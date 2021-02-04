
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.interface';

import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
public prodList!: Products[]

  constructor() { }

  ngOnInit(): void {

  }
 
 
}
