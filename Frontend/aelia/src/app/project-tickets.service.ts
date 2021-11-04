import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ticket } from './ticket';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProjectTicketsService {
  constructor(private http: HttpClient) { }

  getTicketsForProject(project: String): Observable<Ticket[]> {
    const url = `${environment.apiBaseUrl}/Ticket?projectName=${project}`;
    return this.http.get<Ticket[]>(url);
  }

  getTicketFullDetails(ticketName: String): Observable<Ticket> {
    const url = `${environment.apiBaseUrl}/Ticket/${ticketName}`;
    return this.http.get<Ticket>(url);
  }
}
