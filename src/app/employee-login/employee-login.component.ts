import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  empcode=""
  password=""
  constructor(private api:ApiService){}


  emplogin=()=>
  {
    let data:any={
      "empcode":this.empcode,
      "password":this.password
    }
    console.log(data)
    this.api.employeeLogin(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
    
  }

}
