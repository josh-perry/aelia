import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProjectTicketsService } from '../project-tickets.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-top-bar',
  templateUrl: './ticket-top-bar.component.html',
  styleUrls: ['./ticket-top-bar.component.css']
})

export class TicketTopBarComponent {
  ticket$ = this.store.select("ticket");

  constructor(private store: Store<{ ticket: Ticket }>,
              private projectTicketsService: ProjectTicketsService) {
  }

  save() {
    this.ticket$.subscribe(t => this.projectTicketsService.setTicket(`${t.project}-${t.id}`, t));
  }
}
