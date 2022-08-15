import { Component, OnInit } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { Router, RouterPreloader } from "@angular/router"
import { DataService } from "../services/data.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //properties / variables declaration

  aim = 'Your Perfect banking Partner'

  account = 'Please enter account number here'

  //to hold user account number
 acno=""
 //to hold user password number
 pswd=""
  

 //login - model
loginForm = this.fb.group({
  
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]//square bracket allenkil promis rejection varum
  
})
 //constructor-dependency injection
  
constructor(private fb:FormBuilder,private router:Router,private ds:DataService) {

 }

 
  //angular il life cycle hook 
  ngOnInit(): void {
         }
//user defined function


// login()
login()
{
 var acno = this.loginForm.value.acno
 var pswd = this.loginForm.value.pswd
if(this.loginForm.valid)
{
  //calling login data service
 const result =this.ds.login(acno,pswd)

 if(result)
 {
  
alert('login sucessful')
this.router.navigateByUrl('dashboard')
  }
}
else{
  alert('invalid Form')
}
 
 
}
}

