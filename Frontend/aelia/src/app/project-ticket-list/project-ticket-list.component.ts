import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProjectTicketsService } from '../project-tickets.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-project-ticket-list',
  templateUrl: './project-ticket-list.component.html',
  styleUrls: ['./project-ticket-list.component.css']
})

export class ProjectTicketListComponent implements OnInit {
  projectName: string = "";
  tickets: Ticket[] = [];

  constructor(private route: ActivatedRoute,
              private projectTicketsService: ProjectTicketsService) {
  }

  ngOnInit(): void {
    this.projectName = String(this.route.snapshot.paramMap.get("name"));
    this.getTickets();
  }

  getTickets(): void {
    this.projectTicketsService.getTicketsForProject(this.projectName)
      .subscribe(tickets => this.tickets = tickets);
  }
}
