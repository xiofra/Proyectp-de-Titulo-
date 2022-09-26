import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/servicios/auth.service';
import { SubirimagenesService } from 'src/app/servicios/subirimagenes.service';
import { HotToastService } from '@ngneat/hot-toast';
import { HotToastModule } from '@ngneat/hot-toast';
import { concatMap } from 'rxjs';
import { switchMap, tap } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user$ = this.authService.currentUser$;

  profileForm = new FormGroup({
    uid:new FormControl(''),
    displayName:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    phone:new FormControl(''),
    address:new FormControl(''),
  });

  constructor(private authService:AuthService,
              private imageUploadService:SubirimagenesService,
              public toast : HotToastModule,
              private usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.currentUserProfile$
    .pipe(untilDestroyed(this), tap(console.log))
    .subscribe((user) => {
      this.profileForm.patchValue({ ...user });
    });
  }

  uploadImage(event: any , user:User){
    this.imageUploadService.uploadImage(event.target.file[0], 'images/${user.uid}').pipe(
      concatMap((photoURL) => this.authService.updateProfileData({photoURL}))
    ).subscribe();

  }

  saveProfile(){
    const profileData=this.profileForm.value;
    this.usersService.updateUser(profileData).pipe(
    ).subscribe();
  }

}
