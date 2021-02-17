import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;
  @ViewChild('container') container?: ElementRef;
  constructor( orderService: OrderService) {
     orderService.getOrders().valueChanges().subscribe(orders => this.orders$ = orders)

   }

  ngOnInit(): void {
  }
  setHeight() {
    if (this.container) {
      console.log(this.container.nativeElement.innerHTML.length);
      if (this.container.nativeElement.innerHTML.length > 420) {
        this.container.nativeElement.classList.add('full');
      }
    }
  }

}
