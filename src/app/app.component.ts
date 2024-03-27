import { Component } from '@angular/core';
import { CheckLoginService } from './Admin/Services/check-login.service';
import { NavigationEnd, Router } from '@angular/router';
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
      this.isLogin = this.LoginService.checkLogin();
       this.LoginService.getData().subscribe(data => {
        this.isLogin = this.LoginService.checkLogin();
      });  
      
      this.route.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          
          if(event.url === '/home' || event.url === '/'){
            this.isLogin = false;
          }

        }
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

}