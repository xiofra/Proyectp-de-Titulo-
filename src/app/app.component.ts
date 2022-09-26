import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { UsersService } from './servicios/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user$ = this.usersService.currentUserProfile$;

  constructor(private authService:AuthService,
            private toast: HotToastService,
            private router: Router,
            private usersService:UsersService){}


  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);

    });
  }

  irUsuarios(){
    this.router.navigate(['usuarios'])
  }

  irHome(){
    this.router.navigate(['home'])
  }

}


