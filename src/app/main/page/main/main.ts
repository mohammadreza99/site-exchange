import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { DataService } from 'src/app/data.service';
import { Giftcard } from 'src/app/model/giftcard';
import { Sefarat } from 'src/app/model/sefarat';
@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})

export class Main implements OnInit {
  giftcards: Giftcard[];
  sefarats: Sefarat[];
  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() {
    this.giftcards = this.dataService.getGiftcards();
    this.sefarats = this.dataService.getSefarats();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }
}
