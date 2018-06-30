import { Component, OnInit } from '@angular/core';
import {Order} from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

orders: Order[] = [
  {id: 1, customer: 
    {id: 1, name: 'main st baker', state: 'CO', email: 'main@example.com'}, 
    total: 230, placed: new Date(2019,5,18), fulfilled: new Date(20186,12)},

    {id: 2, customer: 
      {id: 1, name: 'main st baker', state: 'CO', email: 'main@example.com'}, 
      total: 230, placed: new Date(2019,5,18), fulfilled: new Date(20186,12)},

    {id: 3, customer: 
      {id: 1, name: 'main st baker', state: 'CO', email: 'main@example.com'}, 
      total: 230, placed: new Date(2019,5,18), fulfilled: new Date(20186,12)},

    {id: 4, customer: 
      {id: 1, name: 'main st baker', state: 'CO', email: 'main@example.com'}, 
      total: 230, placed: new Date(2019,5,18), fulfilled: new Date(20186,12)},

    {id: 5, customer: 
      {id: 1, name: 'main st baker', state: 'CO', email: 'main@example.com'}, 
      total: 230, placed: new Date(2019,5,18), fulfilled: new Date(20186,12)},
];



  ngOnInit() {
  }

}
