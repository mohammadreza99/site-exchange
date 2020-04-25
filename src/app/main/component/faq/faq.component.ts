import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() question: string;
  @Input() answer: string;
}
