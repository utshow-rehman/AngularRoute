import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { AdminLoginComponent } from './Admin/Components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/Components/admin-dashboard/admin-dashboard.component';
import { CreateUserComponent } from './Admin/Components/create-user/create-user.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { UserListComponent } from './Admin/Components/user-list/user-list.component';
import { AuthGuard } from './Guard/auth.guard';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomepageComponent },
  { path: 'admin-login', component: AdminLoginComponent , canActivate:[AuthGuard]},
  { path: 'dashboard', component: AdminDashboardComponent, canActivate:[AuthGuard] },
  { path: 'create', component: CreateUserComponent, canActivate:[AuthGuard] },
  { path: 'user-list', component: UserListComponent, canActivate:[AuthGuard] },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
