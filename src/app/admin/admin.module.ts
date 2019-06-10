import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SearchUserComponent } from './search-user/search-user.component';
import { FormsModule } from '@angular/forms';
import { CinematabComponent } from './cinematab/cinematab.component';
import { CreatecinemaComponent } from './createcinema/createcinema.component';
import { MovietabComponent } from './movietab/movietab.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ModalModule } from 'ngx-foundation';
import { ReactiveFormsModule }   from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule,
         MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { DatatableComponent } from './datatable/datatable.component';
import { ExactmovieComponent } from './exactmovie/exactmovie.component';
//ngx smart modal
import { NgxsmatdialogComponent } from './ngxsmatdialog/ngxsmatdialog.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';


@NgModule({
  declarations: [
     SearchUserComponent,
     DashboardComponent,
     CinematabComponent,
     CreatecinemaComponent,
     MovietabComponent,
     DatatableComponent,
     ExactmovieComponent,
     NgxsmatdialogComponent,
   ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    ModalModule.forRoot(),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [NgxSmartModalService],
  bootstrap:    [ ]

})
export class AdminModule { }
