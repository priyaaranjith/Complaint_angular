import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {

  constructor(private api: ApiService, private route: Router) { }
  name =""
  address =""
  email = ""
  mobile = ""
  username =""
  password = ""

  readValues =()=>{
    let data ={
      "name": this.name,
      "address" :this.address,
      "email" : this.email ,
      "mobile" :this.mobile,
      "username":this.username,
      "password":this.password
    }
    this.api.userreg(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          console.log(response)
          alert ("register success")
          this.route.navigate(["/userlogin"])
        }else{
          alert("register failed")
        }
      }
    )

  }
  

  }


