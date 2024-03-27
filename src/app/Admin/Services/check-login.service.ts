import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {
  private dataSubject = new Subject<number>();
  constructor() { }
  sendData(data: number) {
    this.dataSubject.next(data);
  }

  getData() {
    return this.dataSubject.asObservable();
  }

  checkLogin():boolean{
    let login = localStorage.getItem("login");
    if(login === "true"){
        return true;
    }
    else{
        return false;   
    }
  }

}
