import {  inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';

import { CheckLoginService } from '../Admin/Services/check-login.service';


export const AuthGuard:CanActivateFn = (route,state) =>{
    const router = inject(Router);
    const loginService = inject(CheckLoginService);
  // const currentPath = route.routeConfig?.path;
     if(!loginService.checkLogin()){
            router.navigate(['admin-login']);
           return false;
     }
     return true;
};  

