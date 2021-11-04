import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProjectTicketsService } from '../project-tickets.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-full-ticket-view',
  templateUrl: './full-ticket-view.component.html',
  styleUrls: ['./full-ticket-view.component.css']
})
export class FullTicketViewComponent implements OnInit {
  ticketName: String = "";

  ticket: Ticket = {
    id: 0,
    title: "",
    project: ""
  };

  constructor(private route: ActivatedRoute,
              private projectTicketsService: ProjectTicketsService) {
  }

  ngOnInit(): void {
    this.ticketName = String(this.route.snapshot.paramMap.get("ticket"));
    this.getTicketFullDetails();
  }

  getTicketFullDetails(): void {
    this.projectTicketsService.getTicketFullDetails(this.ticketName)
      .subscribe(t => this.ticket = t);
  }
}
