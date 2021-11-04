import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTopBarComponent } from './ticket-top-bar.component';

describe('TicketTopBarComponent', () => {
  let component: TicketTopBarComponent;
  let fixture: ComponentFixture<TicketTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketTopBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
