import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { RepositoryService } from './shared/repository.service';

//forms module
import { FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//jwt
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem('currentUser');
}

//interceptors
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor} from './interceptors/httpconfig.interceptor';
import { CinemaMoviesComponent } from './cinema-movies/cinema-movies.component';
import { MoviePresentComponent } from './movie-present/movie-present.component';
import { HallComponent } from './hall/hall.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  }
  from '@angular/material';
import { GetdataComponent } from './getdata/getdata.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    CinemaMoviesComponent,
    MoviePresentComponent,
    HallComponent,
    GetdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDialogModule,
    JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
    }
  }),
    BrowserAnimationsModule,
],
providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }, RepositoryService],
  bootstrap: [AppComponent],
  entryComponents: [HallComponent],
exports: [
 MatButtonModule,
 MatFormFieldModule,
 MatInputModule,
 MatRippleModule,
]
})
export class AppModule { }
