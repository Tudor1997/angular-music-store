import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UserService } from './user.service';
import { of } from 'rxjs';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$!: Observable<firebase.User | null> ;
  isLoggedIn: boolean = false
  constructor(private afAuth: AngularFireAuth,
    private route:ActivatedRoute,
    private userService:UserService) {
    this.user$ = afAuth.authState;
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    
  }
  loginWithEmail(email: string, password: string){
 
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res=>{
        this.isLoggedIn = true
        localStorage.setItem('user', JSON.stringify(res.user))
      });
    
  }
  signup(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  logout(){
    this.afAuth.auth.signOut();
    localStorage.removeItem('user')
  }
  get appUser$(): Observable<AppUser | null>{
    return this.user$.pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid).valueChanges();


      return of(null);
    }))
  }
  
}
