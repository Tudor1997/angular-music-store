import { Message } from 'shared/models/message';
import { HttpClient } from '@angular/common/http';


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  alert:boolean = false;
image:string = "../../assets/img/undraw_contact_us_15o2.svg";
  constructor(private db:AngularFireDatabase) {

  }

createMessage(message:Message){
  this.alert = true;
  setTimeout(() => {
    this.alert = false;
  }, 3000);

 return this.db.list('/contact').push(message);
}
closeAlert(){
  this.alert = false;
}

  ngOnInit(): void {
  }

}
