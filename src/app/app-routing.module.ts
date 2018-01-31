import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from "./movies/movies.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    { path: "", component: MoviesComponent },
    { path: "create", component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
