import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CinemaMoviesComponent } from './cinema-movies/cinema-movies.component';
import { MoviePresentComponent } from './movie-present/movie-present.component';
import { GetdataComponent } from './getdata/getdata.component';

//auth AuthGuardService
import { CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthGuardService as AuthGuard } from './guard/auth-guard.service';
import { RoleGuardService as Boom } from './guard/role-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/cinemas/:id', component: CinemaMoviesComponent},
  { path: 'home/cinemas/:cinemaId/moviepresent/:movieId', component:MoviePresentComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: "admin", loadChildren:'./admin/admin.module#AdminModule', canActivate: [Boom] },
  { path: "", redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: "input", component: GetdataComponent},
  // { path: "**", redirectTo: "login", pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
