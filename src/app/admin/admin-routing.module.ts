import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { CinematabComponent } from './cinematab/cinematab.component';
import { MovietabComponent } from './movietab/movietab.component';
import { CreatecinemaComponent } from './createcinema/createcinema.component';
import { ExactmovieComponent } from './exactmovie/exactmovie.component';

const routes: Routes = [
{ path: "", component: DashboardComponent,
  children: [
    { path: "cinemalist", component: CinematabComponent },
    { path: "movielist", component: MovietabComponent },
    { path: "createcinema", component: CreatecinemaComponent },
    { path: "searchuser", component:SearchUserComponent },
    { path: "cinemalist/:id", component: ExactmovieComponent},
    {path: '', redirectTo: 'cinemalist', pathMatch: 'full'},
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
