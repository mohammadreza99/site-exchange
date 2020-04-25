import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { TransactionList } from '../../../../model/transaction-list';
import { Status } from '../../../../model/invoice';

@Component({
  selector: 'transactions-list-page',
  templateUrl: './transactions-list.page.html',
  styleUrls: ['./transactions-list.page.scss']
})
export class TransactionsListPage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  transactionsList: TransactionList[] = [
    // {
    //   id: '13',
    //   number:25462,
    //   title: 'خرید گیفت کارت',
    //   description: 'تمامی پرداخت ها انجام شده است.',
    //   deposit: 20000,
    //   removal: 150000,
    //   inventory: 25645221,
    //   submitDate: '',
    //   status: Status.suspended
    // }
  ]
}
