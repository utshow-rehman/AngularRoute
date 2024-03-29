import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Model/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
       userName:string = "";
        userData!:User;
       constructor(private router:ActivatedRoute){}
       ngOnInit():void{
             let userId = +this.router.snapshot.params['id'];
             let credentialsString = localStorage.getItem("user");
             if (credentialsString !== null) {
                 let credentials = JSON.parse(credentialsString);
                 this.userData = credentials.find((user: User) => user.id === userId);
                

                 
             }


       }

}
