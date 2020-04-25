import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.scss']
})
export class WarningsComponent implements OnInit {

  constructor() { }
  @ViewChild('tips') tips: ElementRef;
  ngOnInit() {
    if (this.maxHeight) {
      this.tips.nativeElement.style.overflowY = 'scroll';
    }
  }
  @Input() warnings: string[];
  @Input() maxHeight: string;
}
