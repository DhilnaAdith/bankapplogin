import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 constructor(private http:HttpClient) { 
   
  }
  //register
  register(acno: any, password: any, username: any) {
   //req body
   const data = {
    acno, password, username
   }
   //reg api - asynchronous
   return this.http.post(
    'http://localhost:3000/register',data)
   }
  // login()
login(acno: any, pswd: any){
  //req body
const data = {
  acno,pswd
}
//login api - asynchronous
return this.http.post(
  'http://localhost:3000/login',data)
}
//to get headers with token 

getOptions(){
  //fetch the token from local storage
  const token = JSON.parse(localStorage.getItem('token')||'')
  //to get the header , create an object for HttpHeaders
  let headers = new HttpHeaders()
  //apend token inside the header
  if(token){
   headers = headers.append('x-access-token',token)
   //implement overload
   options.headers=headers
  }
  return options
}

//deposit
deposit(acno: any, pswd: any, amt: any) {
  //req body
const data= {
  acno, pswd, amt
}
//deposit api - asynchronous
return this.http.post(
  'http://localhost:3000/deposit',data,this.getOptions())
}
//withdraw
withdraw(acno: any, pswd: any, amt: any) {
//req body
const data = {
  acno, pswd, amt
}
  
//withdraw api - asynchronous
return this.http.post(
  'http://localhost:3000/withdraw',data,this.getOptions())
  }

//transaction
getTransaction(acno:any){
 //req body
const data = {
  acno
}

  //transaction api - asynchronous
return this.http.post('http://localhost:3000/transaction',
  data,this.getOptions())
}
//delete Api
delete(acno:any){
 return this.http.delete('http://localhost:3000/onDelete/'+acno)
  
}
}

 
