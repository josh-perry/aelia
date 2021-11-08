import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';

import { ProjectTicketsService } from '../project-tickets.service';
import { Ticket } from '../ticket';
import { setDescription } from '../state/ticket/ticket.actions';

@Component({
  selector: 'app-ticket-edit-description',
  templateUrl: './ticket-edit-description.component.html',
  styleUrls: ['./ticket-edit-description.component.css']
})

export class TicketEditDescriptionComponent {
  ticket$ = this.store.select("ticket");

  description = new FormControl("");

  constructor(private store: Store<{ ticket: Ticket }>,
              private projectTicketsService: ProjectTicketsService) {
  }

  save() {
    this.store.dispatch(setDescription({ description: this.description.value}));
  }
}
