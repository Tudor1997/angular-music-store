import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel , NavigationError} from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { UserService } from 'shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor( 
    private auth:AuthService,
    router:Router,
    private userService:UserService) {
 

    this.auth.user$.subscribe(user =>{
      if(user){
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl')!;
      router.navigateByUrl(returnUrl);
      }
    })
  }
}
