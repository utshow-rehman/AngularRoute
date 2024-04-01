import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup,  UntypedFormGroup,  ValidationErrors, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, of } from 'rxjs';



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
  userForm!: UntypedFormGroup;
// ------ for image 
  loading = false;
  avatarUrl?: string;
 
 ngOnInit(){
  this.userForm = new FormGroup({
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
    email: new FormControl('',{ 
       validators:[Validators.required, Validators.email],
       asyncValidators:[this.emailInLocalStorageValidator]
      
  }),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(50),
    ]),
    checkPassword: new FormControl('',[
      Validators.required, this.confirmationValidator.bind(this)
    ]),
    phoneNumberPrefix: new FormControl('+88'),
    phoneNumber: new FormControl('', [
      Validators.required, 
      Validators.pattern("[0-9]{11}") 
    ]),
    image: new FormControl(null),
  });

 }


 fileList: NzUploadFile[] = [
];
previewImage: string | undefined = '';
previewVisible = false;

handlePreview = async (file: NzUploadFile): Promise<void> => {
  if (!file.url && !file['preview']) {
    file['preview'] = await this.getBase64(file.originFileObj!);
  }
  this.previewImage = file.url || file['preview'];

  
  this.previewVisible = true;
};
handleUpload(event: any): void {
     console.log(event.file);
     
  if (event.file && event.file.status === 'done') {
    // Get the uploaded file object
    const file: File = (event.file as any).originFileObj;

    // Get the base64 string of the image file and set it to the form control named 'image'
    this.getBase64(file).then(imageBase64 => {
      this.userForm.patchValue({ image: imageBase64 });
    }).catch(error => {
      console.error('Error reading file', error);
    });
  }
}



 getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}




  lettersOnlyNoSpacesValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[A-Za-z]+$/.test(control.value);
    return valid ? null : { 'lettersOnlyNoSpaces': { value: control.value } };
  }

  confirmationValidator(control: AbstractControl): { [s: string]: boolean } {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.userForm.controls['password'].value) {
     
      
      return { confirm: true, error: true };
    }
     return {};
  };

   emailInLocalStorageValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;
    const emails = [
       {
         id:4,
         firstName:"uts",
         lastName:"sdsd",
         password:"1234",
         email:"uts@gmail.com"
       },
       {
        id:4,
        firstName:"uts",
        lastName:"sdsd",
        password:"1234",
        email:"rish@gmail.com"
      },

    ]
    const emailExists = emails.some(e => e.email === email);
    if(emailExists){
         return of({userEmailIsExist:true}); 
    }else{
      return of(null);
    }
    

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
  console.log(this.userForm);
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
