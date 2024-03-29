import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './Home/Components/homepage/homepage.component';
import { AdminLoginComponent } from './Auth/admin-login/admin-login.component';
import { NotFoundComponent } from './NotFound/not-found/not-found.component';
import { AuthGuard } from './Guard/auth.guard';


const routes: Routes = [
  {path:'home', component:HomepageComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin', loadChildren:()=>import('./Admin/admin.module').then(m=> m.AdminModule)},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
