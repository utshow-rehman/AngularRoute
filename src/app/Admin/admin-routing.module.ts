import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminLayoutComponent } from "./Components/admin-layout/admin-layout.component";
import { AdminDashboardComponent } from "./Components/admin-dashboard/admin-dashboard.component";
import { CreateUserComponent } from "./Components/create-user/create-user.component";
import { UserListComponent } from "./Components/user-list/user-list.component";
import { AuthGuard } from "../Guard/auth.guard";
import { UserDetailComponent } from "./Components/user-detail/user-detail.component";
const routes:Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        canActivate:[AuthGuard],
        children: [
          {path:'',pathMatch:'full',redirectTo:'dashboard'},
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'create', component: CreateUserComponent },
          { path: 'user-list', component: UserListComponent  },
          { path: 'user-detail/:id', component: UserDetailComponent  }
        ]
      }
     
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule{}