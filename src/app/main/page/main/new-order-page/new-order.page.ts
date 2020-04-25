import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'new-order-page',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss']
})
export class NewOrderPage implements OnInit {
  orderType: string
  itemId: string;
  isLoggedIn = false;
  orderName: string;
  buyTypes: string[];
  warnings: string[];
  validForm: boolean = false;
  constructor(private route: ActivatedRoute, private dataSrevice: DataService, private title: Title) { }
  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.route.queryParams.subscribe((params) => {
      this.orderType = params['type'];
      this.itemId = params['id'];
      if (this.orderType == 'giftcard') {
        this.warnings = this.dataSrevice.getGiftcard(this.itemId).warnings;
        this.buyTypes = this.dataSrevice.getGiftcard(this.itemId).buyTypes;
        this.orderName = this.dataSrevice.getGiftcard(this.itemId).name;
      }
      else {
        this.warnings = this.dataSrevice.getSefarat(this.itemId).warnings;
        this.orderName = this.dataSrevice.getSefarat(this.itemId).name;
      }
    });
  }

  isValid(e) {
    if (e)
      this.validForm = true;
    else
      this.validForm = false;
  }
}
