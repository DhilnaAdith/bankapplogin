import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

uname=""
acno=""
pswd=""
//register - model
registerForm = this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]], //model driven forms
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]//square bracket allenkil promis rejection varum
  
})
  constructor(private ds : DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    
    if(this.registerForm.valid){
   //call register in data service -asynchronous
    this.ds.register(acno,pswd,uname)
    .subscribe((result:any)=>{
      if(result){
      alert(result.message)
      this.router.navigateByUrl("")
    }
   },
  result=>{
    alert(result.error.message)
    this.router.navigateByUrl("")
  }
  )
}
    else{
      alert('invalid form')
      
    }
    }

  }
