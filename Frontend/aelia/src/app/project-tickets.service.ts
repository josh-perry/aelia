import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})

export class ProjectTicketsService {
  constructor(private http: HttpClient) { }

  getTicketsForProject(project: String): Observable<Ticket[]> {
    // TODO: don't harccode this, obviously
    const url = "https://localhost:5001/Ticket?projectName=TEST";
    return this.http.get<Ticket[]>(url);
  }
}
