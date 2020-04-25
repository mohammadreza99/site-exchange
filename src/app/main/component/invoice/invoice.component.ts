import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../../../model/invoice';

@Component({
  selector: 'invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() invoice: Invoice
}
