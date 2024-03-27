import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../Guard/auth.guard";
import { AdminLayoutComponent } from "./Components/admin-layout/admin-layout.component";
import { AdminDashboardComponent } from "./Components/admin-dashboard/admin-dashboard.component";
import { CreateUserComponent } from "./Components/create-user/create-user.component";
import { UserListComponent } from "./Components/user-list/user-list.component";
const routes:Routes = [
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
          { path: 'dashboard', component: AdminDashboardComponent },
          { path: 'create', component: CreateUserComponent },
          { path: 'user-list', component: UserListComponent  },
        ],
         canActivate:[AuthGuard]
      }
     
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AdminRoutingModule{}