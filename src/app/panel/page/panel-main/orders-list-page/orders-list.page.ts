import { Component, OnInit } from '@angular/core';

import { OrderList } from '../../../../model/order-list';
import { Status } from '../../../../model/invoice';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'orders-list-page',
  templateUrl: './orders-list.page.html',
  styleUrls: ['./orders-list.page.scss']
})
export class OrdersListPage implements OnInit {
  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  ordersList: OrderList[] = [
    // {
    //   id: '1',
    //   number: 2000,
    //   title: 'خرید گیفت کارت آمازون',
    //   amount: '500 دلار',
    //   submitDate: '1397/08/24',
    //   status: Status["canceled"]
    // }
  ]
}
