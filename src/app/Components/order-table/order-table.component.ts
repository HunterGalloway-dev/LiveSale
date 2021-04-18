import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements OnInit {

  @Input() latest: boolean = false;

  public orders: Order[] = [
    {
      orderNumber: 1,
      numberOfItems: 2,
      customer: "Hunter Galloway",
      priceTotal: 12,
      date: "April 4, 2021",
      completed: false
    },
    {
      orderNumber: 1,
      numberOfItems: 2,
      customer: "Hunter Galloway",
      priceTotal: 12,
      date: "April 4, 2021",
      completed: false
    },
    {
      orderNumber: 1,
      numberOfItems: 2,
      customer: "Hunter Galloway",
      priceTotal: 12,
      date: "April 4, 2021",
      completed: false
    },
    {
      orderNumber: 1,
      numberOfItems: 2,
      customer: "Hunter Galloway",
      priceTotal: 12,
      date: "April 4, 2021",
      completed: true
    },
    {
      orderNumber: 1,
      numberOfItems: 2,
      customer: "Hunter Galloway",
      priceTotal: 12,
      date: "April 4, 2021",
      completed: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
