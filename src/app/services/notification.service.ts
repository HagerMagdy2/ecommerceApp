import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
notification:string[]
  constructor() { 
    this.notification=[
      "You have unread messages",
      "people reacting to your post",
      "someone send you a friend request",
      '',
      'post shared successfully'
    ]
  }
  getNotifications():Observable<string>{
    return new Observable<string>((obsever)=>{
      // obsever.next()
      // obsever.error()
      // obsever.complete()
      let counter=0
      if(counter==this.notification.length){
        obsever.complete()
      }
      if(this.notification[counter]==''){
        obsever.error()
      }
      setInterval(()=>{
        obsever.next(this.notification[counter])
        counter++
      },2000)
    })
  }
}
