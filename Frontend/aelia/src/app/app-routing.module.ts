import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTicketListComponent } from './project-ticket-list/project-ticket-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FullTicketViewComponent } from './full-ticket-view/full-ticket-view.component';

const routes: Routes = [
  { path: "project", component: ProjectListComponent },
  { path: "project/:name", component: ProjectTicketListComponent },
  { path: "project/:name/:ticket", component: FullTicketViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
