import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-tag',
  templateUrl: './ticket-tag.component.html',
  styleUrls: ['./ticket-tag.component.css']
})

export class TicketTagComponent implements OnInit {
  @Input("ticketName") ticketName: String = "";

  constructor() { }

  ngOnInit(): void {
  }
}
