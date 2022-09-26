import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//// Angular Material //////////
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';


//////// Fire //////////////////
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { initializeApp } from "firebase/app";
import { provideFirestore, getFirestore } from '@angular/fire/firestore';






///////// Componentes ////////////////
import { environment } from 'src/environments/environment.prod';
;


////// Providers ///////////////////////

import { LandingComponent } from './componentes/landing/landing.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NuevousuarioComponent } from './componentes/nuevousuario/nuevousuario.component';
import { SendEmailComponent } from './componentes/send-email/send-email.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { PerfilComponent } from './componentes/perfil/perfil.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    HomeComponent,
    UsuariosComponent,
    NuevousuarioComponent,
    SendEmailComponent,
    PerfilComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    ///AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(()=>getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    HotToastModule.forRoot(),
    
    

    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
