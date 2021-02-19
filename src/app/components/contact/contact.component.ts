import { Message } from './../../models/message';
import { HttpClient } from '@angular/common/http';


import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

image:string = "../../assets/img/undraw_contact_us_15o2.svg"
  constructor(private db:AngularFireDatabase) { 

  }

createMessage(message:Message){
 return this.db.list('/contact').push(message)
}
  ngOnInit(): void {
  }

}
