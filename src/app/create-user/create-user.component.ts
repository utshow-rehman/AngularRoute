import { Component } from '@angular/core';

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
  save(){
    if(this.username.length>0 && this.password.length>0){
        let obj = {
            name:this.username,
            password:this.password
        }
       let credentialsString = localStorage.getItem("user");
       if (credentialsString !== null) {
           let credentials = JSON.parse(credentialsString);
           credentials.push(obj);
           localStorage.setItem("user",JSON.stringify(credentials));
           console.log("sdsd");
           
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

handleCancel(): void {
  this.isVisible = false;
}

}
