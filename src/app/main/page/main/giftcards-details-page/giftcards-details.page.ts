import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Giftcard } from 'src/app/model/giftcard';
import { DataService } from 'src/app/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'giftcards-details-page',
  templateUrl: './giftcards-details.page.html',
  styleUrls: ['./giftcards-details.page.scss']
})
export class GiftcardsDetailsPage implements OnInit, AfterViewInit {
  fragment;
  direcion: boolean = false;
  giftcards: Giftcard[];

  constructor(private title: Title, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.giftcards = this.dataService.getGiftcards()
  }

  ngAfterViewInit() {
    document.querySelector('#' + this.fragment).scrollIntoView({ behavior: 'smooth' });
  }

  getDirection() {
    this.direcion = !this.direcion
    if (this.direcion == true) return 'ltr'
    else return 'rtl'
  }
}
