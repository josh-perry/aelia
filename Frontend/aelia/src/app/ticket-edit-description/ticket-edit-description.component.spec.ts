import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEditDescriptionComponent } from './ticket-edit-description.component';

describe('TicketEditDescriptionComponent', () => {
  let component: TicketEditDescriptionComponent;
  let fixture: ComponentFixture<TicketEditDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEditDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEditDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
