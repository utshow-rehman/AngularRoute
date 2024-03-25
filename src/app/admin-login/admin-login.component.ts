import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';
import { CheckLoginService } from '../check-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  validateForm!: UntypedFormGroup;
  userName:string = "";
  password:string = "";
  found:boolean = false;
  constructor(private fb: UntypedFormBuilder, private route:Router, private LoginService:CheckLoginService) {}
  submitForm(): void {
    if (this.validateForm.valid) {
      // console.log('submit', this.validateForm.value.userName);
  
      this.userName = this.validateForm.value.userName;
      this.password = this.validateForm.value.password;
      let credentialsString = localStorage.getItem("user");
      if(credentialsString === null){
        let obj = [{
          name:"admin",
          password:"1234"
    }]
    localStorage.setItem("user",JSON.stringify(obj));
      }
      else if(credentialsString !== null) {
          let credentials = JSON.parse(credentialsString);
        
          credentials.forEach((credential:User) => {
            if (credential.name === this.userName && credential.password === this.password) {
               localStorage.setItem("sidename",credential.name)
               localStorage.setItem("login","true");
               this.LoginService.sendData(1);
              this.route.navigate(['/dashboard']);
               this.found = true;
              }

        });
        if(!this.found){
         alert("user name pass problem");
        }
        
      }

      

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  // constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
