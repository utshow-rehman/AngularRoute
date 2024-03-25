import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
     allUser:User[] = [];
  ngOnInit(): void {
    let credentialsString = localStorage.getItem("user");
    if(credentialsString !== null) {
       this.allUser = JSON.parse(credentialsString);
    }

  }
}
