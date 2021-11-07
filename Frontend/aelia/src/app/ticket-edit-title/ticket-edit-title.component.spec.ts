import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEditTitleComponent } from './ticket-edit-title.component';

describe('TicketEditTitleComponent', () => {
  let component: TicketEditTitleComponent;
  let fixture: ComponentFixture<TicketEditTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEditTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEditTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
