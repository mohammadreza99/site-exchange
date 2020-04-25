import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'giftcard-item',
  templateUrl: './giftcard-item.component.html',
  styleUrls: ['./giftcard-item.component.scss']
})
export class GiftcardItemComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  @Input() direction: string = 'rtl';
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;
  @Input() smallType: boolean = false;

}
