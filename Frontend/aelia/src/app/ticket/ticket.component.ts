import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {
  @Input("ticket") ticket: Ticket;

  constructor() {
    this.ticket = {
      id: 0,
      title: "",
      project: "",
      description: ""
    }
  }

  ngOnInit(): void {
  }
}
