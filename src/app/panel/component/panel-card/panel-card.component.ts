import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-card',
  templateUrl: './panel-card.component.html',
  styleUrls: ['./panel-card.component.scss']
})
export class PanelCardComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  @Input() title: string
  @Input() image: string
  @Input() list: string[];

}
