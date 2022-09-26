import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevousuarioComponent } from './componentes/nuevousuario/nuevousuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { SendEmailComponent } from './componentes/send-email/send-email.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
 



const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:LandingComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'usuarios',
    component:UsuariosComponent
  },
  {
    path:'nuevousuario',
    component:NuevousuarioComponent
  },
  {
    path:'verificacion-email',
    component: SendEmailComponent,
  },
  { path: 'forgot-password', 
    loadChildren: () => 
      import('./componentes/forgot-password/forgot-password.module').then(
        m => m.ForgotPasswordModule
        ), },
  {
    path:'perfil',
    component: PerfilComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
