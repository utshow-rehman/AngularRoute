import { Component } from '@angular/core';
import { CheckLoginService } from '../../Services/check-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  isCollapsed = false;
  isLogin = false;
  showDropdown: boolean = false;
  constructor(private LoginService:CheckLoginService,private route:Router){}
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
logout(){
  localStorage.setItem("login","false");
  this.route.navigate(["/home"]);
  this.LoginService.sendData(1);
  
}
}
