import { AuthService } from 'src/app/services/auth.service';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { switchMap, map } from 'rxjs/operators';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit{
  orders$;
 
  @ViewChild('container') container?: ElementRef;
  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.orders$ = this.authService.user$.pipe(
      switchMap((user) => this.orderService.getOrdersByUser(user?.uid!))
    );
  }
 
  setHeight() {
    if (this.container) {
      if (this.container.nativeElement.innerHTML.length > 420) {
        this.container.nativeElement.classList.add('full');
      }
    }
  }
}
