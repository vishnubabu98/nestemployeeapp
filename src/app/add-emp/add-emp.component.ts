import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

 
  empcode=""
  empname=""
  designation=""
  salary=""
  department=""
  mobno=""
  username=""
  password=""
  confirmpassword=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any=
    {
  
      "empcode":this.empcode,
      "empname":this.empname,
      "designation":this.designation,
      "salary":this.salary,
      "department":this.department,
      "mobno":this.mobno,
      "username":this.username,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    console.log(data)
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          
          alert("addedd successfully")

          this.empcode=""
          this.empname=""
          this.designation=""
          this. salary=""
          this.department=""
          this.mobno=""
          this.username=""
          this.password=""
          this.confirmpassword=""
        
          
        } else {
          alert("not added")
          
        }
      }
    )


}
}
