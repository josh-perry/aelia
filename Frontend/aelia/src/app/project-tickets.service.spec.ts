import { TestBed } from '@angular/core/testing';

import { ProjectTicketsService } from './project-tickets.service';

describe('ProjectTicketsService', () => {
  let service: ProjectTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
