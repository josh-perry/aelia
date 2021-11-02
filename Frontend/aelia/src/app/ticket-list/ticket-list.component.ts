import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit {
  @Input("tickets") tickets: Ticket[] = [];

  constructor() { }

  ngOnInit(): void { }
}
