import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  hide = true;
  constructor(public userService: UserService){

  }
  ngOnInit(){
    this.userService.getStudent().subscribe((res)=>{
      console.log(res);
    })
   
    this.userService.postStudent().subscribe((res)=>{
      console.log(res)
    })
  }
}
