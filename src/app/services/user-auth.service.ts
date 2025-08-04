import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
isUserLogged:boolean=false
  constructor() { }
  login(){
    localStorage.setItem('token',"fghftdrxrhiyutyrtr")
  }
  logout(){
    localStorage.removeItem('token')
  }
  getToken():any{
  return  localStorage.getItem("token")?localStorage.getItem("token"):"";
  }
  getUserLogged():boolean{
    return localStorage.getItem('token')?true:false
  }
}
