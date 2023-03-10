import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'empty-list',
  templateUrl: './empty-list.component.html',
  styleUrls: ['./empty-list.component.scss']
})
export class EmptyListComponent implements OnInit {

  constructor() { }
  @Input() show: boolean = false;

  ngOnInit() { }
}
