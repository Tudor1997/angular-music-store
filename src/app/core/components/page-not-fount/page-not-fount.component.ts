import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-fount',
  templateUrl: './page-not-fount.component.html',
  styleUrls: ['./page-not-fount.component.css']
})
export class PageNotFountComponent implements OnInit {
  

  constructor(  private location: Location,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back()
  }
}
