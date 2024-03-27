import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Home/Components/homepage/homepage.component';
import { AdminLoginComponent } from './Auth/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/Components/admin-dashboard/admin-dashboard.component';
import { CreateUserComponent } from './Admin/Components/create-user/create-user.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { UserListComponent } from './Admin/Components/user-list/user-list.component';
import { AuthGuard } from './Guard/auth.guard';
import { AdminLayoutComponent } from './Admin/Components/admin-layout/admin-layout.component'
import { HomeLayoutComponent } from './Home/Components/home-layout/home-layout.component';

const routes: Routes = [
  {path:'', component:HomeLayoutComponent,
  children:[
    { path: 'home', component: HomepageComponent },
  ]
 },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'create', component: CreateUserComponent },
      { path: 'user-list', component: UserListComponent  },
    ],
     canActivate:[AuthGuard]
  },
 
  { path: 'admin-login', component: AdminLoginComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
