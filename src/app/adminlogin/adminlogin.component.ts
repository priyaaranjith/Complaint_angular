import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username =""
  password =""

  constructor(private route : Router){}
  
  readValues =() =>
  {
    if(this.username == "admin" && this.password == "12345"){
      alert
    }else{
      
    }
    
}

}


