import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project } from './project';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    const url = `${environment.apiBaseUrl}/Project`;
    return this.http.get<Project[]>(url);
  }
}
