import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  username=""
  password=""


  emplogin=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }

}
