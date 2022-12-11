import { Component } from '@angular/core';

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


}
}
