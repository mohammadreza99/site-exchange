import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() color: string = 'dark'
}
