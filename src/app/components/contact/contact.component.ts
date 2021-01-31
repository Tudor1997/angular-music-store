import { HttpClient } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

image:string = "../../assets/img/undraw_contact_us_15o2.svg"
  constructor(private http: HttpClient) { 

  }
  getMessage(){
    return this.http.get('http://localhost:3000/messages');
  }
postMessage(message):any{
  
  return this.http.post('http://localhost:3000/messages', message).subscribe((result) =>{
    console.log(result)
  });
  
}
  ngOnInit(): void {
  }

}
