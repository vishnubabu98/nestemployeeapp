import { Component } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  constructor(private route:Router){}
  adminlogin=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    if(this.username =="admin"&& this.password == "12345"){
      this.route.navigate(["/addemp"])

    }else{
      alert("Invalid credentials")
    }
  }
  
  

}
