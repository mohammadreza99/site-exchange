import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { TicketّList } from '../../../../model/ticket-list';
import { Status } from '../../../../model/invoice';

@Component({
  selector: 'tickets-list-page',
  templateUrl: './tickets-list.page.html',
  styleUrls: ['./tickets-list.page.scss']
})
export class TicketsListPage implements OnInit {

  constructor(private title: Title, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }
  ticketsList: TicketّList[] = [
    // {
    //   id: '1',
    //   number: 22223,
    //   title: 'تیکت 1',
    //   relevantSection: 'مالی',
    //   submitDate: '1397/05/23',
    //   status: Status["canceled"]
    // }
  ]
}
