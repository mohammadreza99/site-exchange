import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'order-title',
  templateUrl: './order-title.component.html',
  styleUrls: ['./order-title.component.scss']
})
export class OrderTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() orderType: string;
  @Input() orderName: string;
}
