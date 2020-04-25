import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'new-order-page',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],

})

export class NewOrderPage implements OnInit {
  orderType: string
  itemId: string;
  orderName: string;
  buyTypes: string[];
  warnings: string[];
  validForm: boolean = false;
  cost: string = '';
  giftcardId: string;

  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.route.queryParams.subscribe((params) => {
      this.orderType = params['type'];
      this.itemId = params['id'];
      if (this.orderType == 'giftcard') {
        this.warnings = this.dataService.getGiftcard(this.itemId).warnings;
        this.buyTypes = this.dataService.getGiftcard(this.itemId).buyTypes;
        this.orderName = this.dataService.getGiftcard(this.itemId).name;
      }
      else {
        this.warnings = this.dataService.getSefarat(this.itemId).warnings;
        this.orderName = this.dataService.getSefarat(this.itemId).name;
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
