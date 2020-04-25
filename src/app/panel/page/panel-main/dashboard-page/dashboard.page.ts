import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Giftcard } from '../../../../model/giftcard';
import { Sefarat } from '../../../../model/sefarat';
import { Service } from '../../../../model/service';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  giftcards: Giftcard[];
  sefarats: Sefarat[];
  // specialServices: Service[];
  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.giftcards = this.dataService.getGiftcards();
    this.sefarats = this.dataService.getSefarats();
    // this.specialServices = this.dataService.getSpecificServices();
  }

}
