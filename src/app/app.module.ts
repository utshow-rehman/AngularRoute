import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { HomepageComponent } from './Home/Components/homepage/homepage.component';
import { AdminLoginComponent } from './Auth/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/Components/admin-dashboard/admin-dashboard.component';
import { CreateUserComponent } from './Admin/Components/create-user/create-user.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { UserListComponent } from './Admin/Components/user-list/user-list.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { AdminLayoutComponent } from './Admin/Components/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './Home/Components/home-layout/home-layout.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    CreateUserComponent,
    NotFoundComponent,
    UserListComponent,
    AdminLayoutComponent,
    HomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
