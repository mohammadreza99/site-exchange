import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Sefarat } from '../../../../model/sefarat';
import { Giftcard } from '../../../../model/giftcard';
import { Service } from '../../../../model/service';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'service-details-page',
  templateUrl: './service-details.page.html',
  styleUrls: ['./service-details.page.scss']
})
export class ServiceDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService, private title: Title) { }
  service: Sefarat | Giftcard | Service;

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.route.queryParams.subscribe((params) => {
      if (params['type'] == 'sefarat')
        this.service = this.dataService.getSefarat(params['id'])
      else if (params['type'] == 'giftcard')
        this.service = this.dataService.getGiftcard(params['id'])
      else
        this.service = this.dataService.getSpecificService(params['id'])
    })
  }
}
