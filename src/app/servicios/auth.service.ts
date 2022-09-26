import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, 
  updateCurrentUser, updateProfile , UserInfo } from 'firebase/auth';
import { concatMap, from, Observable, of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.auth);
  
  constructor(public auth:Auth ) { }




  resetPassword(email:string){
    return from(sendPasswordResetEmail(this.auth,email));
  }


  login(username : string , password:string){
    return from(signInWithEmailAndPassword(this.auth,username,password));
  }

  logout(){
    return from(this.auth.signOut());
  }

  signUp(email: string,password: string){
    return from(createUserWithEmailAndPassword(this.auth,email,password));

  }

  updateProfileData(profileData: Partial<UserInfo> ):Observable<any>{
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if (!user) throw new Error('Nor Authenticated');
        return updateProfile(user , profileData);
      })

    )

  }





}



