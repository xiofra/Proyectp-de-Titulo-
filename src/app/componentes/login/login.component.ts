import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { SendEmailComponent } from '../send-email/send-email.component';
import { AuthService } from 'src/app/servicios/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required , Validators.email]),
    password : new FormControl('', [Validators.required]),
  });
  

  constructor(private authService: AuthService,
              private toast: HotToastService,
              private router: Router,
              public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  popUpSendEmail(){
    this.dialog.open(SendEmailComponent,{
      width:'50%'
    });
  }

  popUpForgotPassword(){
    this.dialog.open(ForgotPasswordComponent,{
      width:'50%'
    });
  }

  signUP(){
    this.router.navigate(['/nuevousuario']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit(){
    if(!this.loginForm.valid){
      return;
    }

    const{email,password} = this.loginForm.value;
    this.authService.login(email,password).pipe(
      this.toast.observe({
        success: 'Has ingresado con exito',
        loading : 'Cargando ...',
        error: 'Ha ocurrido un error '
      })
    ).subscribe(()=> {
      this.router.navigate(['/home']);
    });
  }


}
