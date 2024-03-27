import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from '../icons-provider.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    CreateUserComponent,
    UserListComponent,
    AdminLayoutComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzModalModule,
    NzAlertModule,
    NzAvatarModule,
    NzEmptyModule,
    NzCardModule,
    NzTableModule,
    NzPaginationModule
  ],
  exports:[

  ]
})
export class AdminModule { }
