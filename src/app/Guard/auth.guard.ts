import {  inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';

import { CheckLoginService } from '../Admin/Services/check-login.service';


export const AuthGuard:CanActivateFn = (route,state) =>{
    const router = inject(Router);
    const LoginService = inject(CheckLoginService);
  const currentPath = route.url[0].path;
  if(currentPath === 'admin-login'){
       if(LoginService.checkLogin()){
           router.navigate(['/dashboard']);
          return false;
       }
  }
  else if(currentPath !== 'home'){
    if(!LoginService.checkLogin()){
         router.navigate(['/admin-login']);
          return false;
    }
  }

  return true;
};

