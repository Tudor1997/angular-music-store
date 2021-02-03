import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel , NavigationError} from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private _router: Router,
    private auth:AuthService,
    router:Router,
    private userService:UserService) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
    });

    this.auth.user$.subscribe(user =>{
      if(user){
      userService.save(user);

      let returnUrl = localStorage.getItem('returnUrl')!;
      console.log(returnUrl);
      router.navigateByUrl(returnUrl);
      }
    })
  }
}
