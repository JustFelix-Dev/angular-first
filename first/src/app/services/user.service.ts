import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getStudent(){
    return this.http.get("http://localhost/first/test.php");
  }


  postStudent(){
    return this.http.post("http://localhost/first/test2.php",{
      firstname:"sola",
      lastname:"sade",
      email:"solasade@gmail.com",
      password:"fish"
    })
  }
}
