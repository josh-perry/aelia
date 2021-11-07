import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProjectTicketsService } from '../project-tickets.service';
import { Ticket } from '../ticket';
import { setTicket } from '../state/ticket/ticket.actions';

@Component({
  selector: 'app-full-ticket-view',
  templateUrl: './full-ticket-view.component.html',
  styleUrls: ['./full-ticket-view.component.css']
})

export class FullTicketViewComponent implements OnInit {
  ticket$ = this.store.select("ticket");

  constructor(private route: ActivatedRoute,
              private store: Store<{ ticket: Ticket }>,
              private projectTicketsService: ProjectTicketsService) {
  }

  ngOnInit(): void {
    this.getTicketFullDetails();
  }

  getTicketFullDetails(): void {
    let ticketName = String(this.route.snapshot.paramMap.get("ticket"))

    this.projectTicketsService.getTicketFullDetails(ticketName)
      .subscribe((ticket) => this.store.dispatch(setTicket({ ticket: ticket})));
  }
}
