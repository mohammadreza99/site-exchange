import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../../data.service';
import { Sefarat } from '../../../../model/sefarat';
import { Giftcard } from '../../../../model/giftcard';
import { Service } from '../../../../model/service';

@Component({
  selector: 'services-page',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
  animations: [
    trigger('show', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition(':enter', animate('500ms ease'))
    ])
  ]
})
export class ServicesPage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.giftcards = this.dataService.getGiftcards();
    this.sefarats = this.dataService.getSefarats();
    this.specialServices = this.dataService.getSpecificServices();
  }
  activeServiceList: Sefarat[] | Giftcard[] | Service[];
  orderType: string;
  radioButtons: MatRadioButton[] = [];
  giftcards: Giftcard[];
  sefarats: Sefarat[];
  specialServices: Service[];
  
  @ViewChildren(MatRadioButton) radioButton: QueryList<MatRadioButton>;

  ngAfterViewInit() {
    this.radioButtons = this.radioButton.toArray();
    this.radioButtons[0].checked = true;
    this.onChange('giftcard');
  }

  getServiceType() {
    if (this.orderType) {
      if (this.orderType == 'giftcard')
        return 'giftcard';
      else if (this.orderType == 'sefarat')
        return 'sefarat';
      else
        return 'special';
    }
  }
  onChange(type) {
    this.orderType = type;
    if (this.orderType == 'sefarat') {
      this.activeServiceList = []
      this.activeServiceList = this.dataService.getSefarats();
    }
    else if (this.orderType == 'giftcard') {
      this.activeServiceList = []
      this.activeServiceList = this.dataService.getGiftcards()
    }
    else {
      this.activeServiceList = []
      this.activeServiceList = this.dataService.getSpecificServices()
    }
  }
}
