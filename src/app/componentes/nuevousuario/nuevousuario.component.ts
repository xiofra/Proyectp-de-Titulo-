import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/servicios/users.service';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { 
        passwordsDontMatch: true 
      }
    }

    return null;
  };
}

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.scss']
})
export class NuevousuarioComponent implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('' ,[Validators.email,Validators.required]),
    password : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required])
  },
  { validators: passwordsMatchValidator() }
  );

  constructor(private authService : AuthService ,
              private toast: HotToastService,
              private router: Router,
              private usersService: UsersService,
              ) { }

  ngOnInit(): void {
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {

    if (!this.signUpForm.valid) {
      return;
    }
    const { name, email, password } = this.signUpForm.value;
    this.authService.signUp(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid, email, displayName: name })
        ),
        this.toast.observe({
          success: 'Congrats! You are all signed up',
          loading: 'Signing up...',
          error: ({ message }) => `${message}`,
        })
      )
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
  }




}
