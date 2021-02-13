import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth.service';

import { AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser!:AppUser | null;
 
  constructor(private auth:AuthService,
   ) { }

 async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
  
  
  }
  logout(){
  this.auth.logout();
  }
}
