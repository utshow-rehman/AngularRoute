import { Component } from '@angular/core';
import { CheckLoginService } from './check-login.service';
import { Router } from '@angular/router';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  isLogin = false;
  showDropdown: boolean = false;
  constructor(private LoginService:CheckLoginService,private route:Router){}
  ngOnInit(): void {
      this.checkLogin();
       this.LoginService.getData().subscribe(data => {
        this.checkLogin();
      });   
  } 
  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }
logout(){
  localStorage.setItem("login","false");
  this.route.navigate(["/home"]);
  this.LoginService.sendData(1);
  
}
checkLogin(){
  let login = localStorage.getItem("login");
  console.log(login," -->")
  if(login === "true"){
       this.isLogin = true;
  }
  else{
      this.isLogin = false;
      
  }
}
}