import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'new-ticket-page',
  templateUrl: './new-ticket.page.html',
  styleUrls: ['./new-ticket.page.scss']
})
export class NewTicketPage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
}
