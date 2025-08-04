import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLogged:boolean;
constructor(private _UserAuthService:UserAuthService){
  this.isUserLogged=this._UserAuthService.getUserLogged()
}
login(){
this._UserAuthService.login()
this.isUserLogged=this._UserAuthService.getUserLogged()
}
logout(){
this._UserAuthService.logout()
this.isUserLogged=this._UserAuthService.getUserLogged()
}
}
