import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ProjectTicketListComponent } from './project-ticket-list/project-ticket-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FullTicketViewComponent } from './full-ticket-view/full-ticket-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketListComponent,
    ProjectTicketListComponent,
    ProjectListComponent,
    NavbarComponent,
    FullTicketViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
