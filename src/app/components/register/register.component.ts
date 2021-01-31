import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { registerAccount } from 'src/app/models/register.inteface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() required: boolean | string = true;
  constructor(private http: HttpClient) { 
   
  }
getAccounts(){
  return this.http.get('http://localhost:3000/accountsRegistered');
}
postAccounts(account:registerAccount){
  return this.http.post('http://localhost:3000/accountsRegistered', account).subscribe((result) =>{
    console.warn(result);
  });
}
  ngOnInit(): void {
  }

}
