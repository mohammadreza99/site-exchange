import { Component, OnInit, DoCheck, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sefarat-buy-panel',
  templateUrl: './sefarat-buy-panel.component.html',
  styleUrls: ['./sefarat-buy-panel.component.scss']
})
export class SefaratBuyPanelComponent implements OnInit, DoCheck {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  @Output() isValid: EventEmitter<boolean> = new EventEmitter();
  ngOnInit() {
    this.formGroup = this.fb.group({
      exchangeAmount: new FormControl('', [Validators.required]),
      serviceAddress: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required])
    })
  }

  ngDoCheck() {
    if (!(this.formGroup.get('exchangeAmount').hasError('required') || this.formGroup.get('serviceAddress').hasError('required') || this.formGroup.get('terms').hasError('required')))
      this.isValid.emit(true)
    else
      this.isValid.emit(false)
  }
}
