import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTicketListComponent } from './project-ticket-list/project-ticket-list.component';

const routes: Routes = [
  { path: "project/:name", component: ProjectTicketListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
