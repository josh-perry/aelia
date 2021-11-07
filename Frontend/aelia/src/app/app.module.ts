import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ProjectTicketListComponent } from './project-ticket-list/project-ticket-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FullTicketViewComponent } from './full-ticket-view/full-ticket-view.component';
import { TicketTagComponent } from './ticket-tag/ticket-tag.component';
import { TicketTopBarComponent } from './ticket-top-bar/ticket-top-bar.component';

import { ticketReducer } from './state/ticket/ticket.reducers';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketListComponent,
    ProjectTicketListComponent,
    ProjectListComponent,
    NavbarComponent,
    FullTicketViewComponent,
    TicketTagComponent,
    TicketTopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ ticket: ticketReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
