import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Sefarat } from '../../../model/sefarat';
import { Service } from '../../../model/service';

@Component({
  selector: 'service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.orderType = params['type']
    })
  }
  
  orderType: string;
  @Input() service: Sefarat | Service;
}
