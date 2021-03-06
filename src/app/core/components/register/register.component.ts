import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.login();
  }
  onSubmit(email: string, password: string){
  this.auth.signup(email, password);
  }
}
