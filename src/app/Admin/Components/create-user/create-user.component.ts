import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  username:string = "";
  passwordVisible = false;
  password: string = "";
  showAlert:boolean = false;
  isVisible = false;
  isOkLoading = false;

  userForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(50),
      this.lettersOnlyNoSpacesValidator // Using the custom validator
    ]),
    lastName: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(50),
      this.lettersOnlyNoSpacesValidator // Using the custom validator
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    phoneNumber: new FormControl('', [
      Validators.required, 
      Validators.pattern("[0-9]{11}") 
    ]),
    address: new FormControl('', Validators.required),
  });


  lettersOnlyNoSpacesValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[A-Za-z]+$/.test(control.value);
    return valid ? null : { 'lettersOnlyNoSpaces': { value: control.value } };
  }
  numericOnly(event: KeyboardEvent): void {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', 'Escape', 'Enter'];
    if (!allowedKeys.includes(event.key) && !(event.key === '.')) {
      event.preventDefault();
    }
  }
  
  


  save(){
    if(this.username.length>0 && this.password.length>0){
        let obj = {
            name:this.username,
            password:this.password,
            id:0
        }
       let credentialsString = localStorage.getItem("user");
       if (credentialsString !== null) {
           let credentials = JSON.parse(credentialsString);
           let lastObject = credentials[credentials.length - 1];
           obj.id = lastObject.id + 1;
           credentials.push(obj);
           localStorage.setItem("user",JSON.stringify(credentials));
           this.showModal();
       }
    this.showAlert = true;
    }
}
showModal(): void {
  this.isVisible = true;
}
handleOk(): void {
  this.isOkLoading = true;
  setTimeout(() => {
    this.isVisible = false;
    this.isOkLoading = false;
  }, 1000);
  this.username = "";
  this.password = "";
}
onSubmit() {
  if (this.userForm.valid) {
    // Proceed with form submission logic, such as sending data to a server
    console.log(this.userForm.value);
  } else {
    // If the form is invalid, mark all controls as touched to show errors
    Object.values(this.userForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}

// Add a method to check if the form is valid before submission
isFormValid() {
  return this.userForm.valid;
}



handleCancel(): void {
  this.isVisible = false;
}

}
