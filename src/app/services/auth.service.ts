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
  logout(){
    this.afAuth.auth.signOut();
  }
  get appUser$(): Observable<AppUser | null>{
    return this.user$.pipe(switchMap(user => {
      if(user) return this.userService.get(user.uid).valueChanges();


      return of(null);
    }))
  }
  
}
