import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [AuthService],
})
export class SendEmailComponent implements OnInit {
  public user$:Observable<any> = this.authSvc.currentUser$;
  userEmailVali = new FormControl('');

  constructor(private authSvc:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }

  async onSendEmail(){
    try {
      const email = this.userEmailVali.value;
      //// aqui deberia ir la funcion de enviar el correo verificado 
      window.alert('Email ha sido enviado , revisa');
      this.router.navigate(['/login'])
      
    } catch (error){console.log(error),console.log('ERROR :C')}
  }


}
