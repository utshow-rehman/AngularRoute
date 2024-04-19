import { Component } from '@angular/core';

import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  userForm: UntypedFormGroup;
  
  constructor(private fb: UntypedFormBuilder) {
    this.userForm = this.fb.group({
      userName:[''],
      phone: ['']
    });
  }
  submitForm(){
       console.log(this.userForm);
       console.log(this.userForm.value," uts");
  }
}
