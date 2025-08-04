import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


constructor(private _NotificationService:NotificationService){

}
  ngOnInit(): void {
    // this._NotificationService.getNotifications().subscribe((notification)=>{
    //   console.log(notification)
    // })
  }
}
