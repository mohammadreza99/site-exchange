import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'giftcard-buy-panel',
  templateUrl: './giftcard-buy-panel.component.html',
  styleUrls: ['./giftcard-buy-panel.component.scss']
})
export class GiftcardBuyPanelComponent implements OnInit, DoCheck {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) { }
  @Input() buyTypes: string[];
  @Output() isValid: EventEmitter<boolean> = new EventEmitter()
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  accept: boolean;
  count = new FormControl('', [Validators.required]);
  cost: string
  ngOnInit() { }

  accepted(e) {
    this.accept = e.checked;
  }
  ngDoCheck() {
    if (!(!this.accept ||this.count.hasError('required'))) this.isValid.emit(true)
    else this.isValid.emit(false)
  }
}
