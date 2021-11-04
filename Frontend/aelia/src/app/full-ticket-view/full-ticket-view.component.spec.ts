import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTicketViewComponent } from './full-ticket-view.component';

describe('FullTicketViewComponent', () => {
  let component: FullTicketViewComponent;
  let fixture: ComponentFixture<FullTicketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTicketViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
