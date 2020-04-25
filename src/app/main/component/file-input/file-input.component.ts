import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  @Input() label = 'انتخاب فایل';

}
