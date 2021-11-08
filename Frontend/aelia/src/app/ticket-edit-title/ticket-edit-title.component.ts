import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';

import { ProjectTicketsService } from '../project-tickets.service';
import { Ticket } from '../ticket';
import { setTitle } from '../state/ticket/ticket.actions';

@Component({
  selector: 'app-ticket-edit-title',
  templateUrl: './ticket-edit-title.component.html',
  styleUrls: ['./ticket-edit-title.component.css']
})

export class TicketEditTitleComponent {
  ticket$ = this.store.select("ticket");

  title = new FormControl("");

  constructor(private store: Store<{ ticket: Ticket }>,
              private projectTicketsService: ProjectTicketsService) {
  }

  save() {
    this.store.dispatch(setTitle({ title: this.title.value}));
  }
}
