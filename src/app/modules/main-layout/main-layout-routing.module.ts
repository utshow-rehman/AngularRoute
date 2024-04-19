import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
  path: '',
  component: MainLayoutComponent,
  // canActivateChild: [PermissionGuard],
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    // {
    //   path: 'profile',
    //   loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    // }
]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
