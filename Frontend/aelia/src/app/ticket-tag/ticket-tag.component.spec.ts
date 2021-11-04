import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTagComponent } from './ticket-tag.component';

describe('TicketTagComponent', () => {
  let component: TicketTagComponent;
  let fixture: ComponentFixture<TicketTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
