import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { ProjectTicketsService } from '../project-tickets.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})

export class TicketListComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private projectTicketsService: ProjectTicketsService) {
  }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.projectTicketsService.getTicketsForProject("TST")
      .subscribe(tickets => this.tickets = tickets);
  }
}
