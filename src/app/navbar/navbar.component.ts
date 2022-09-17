import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


   notifications :any = [];

   id:any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {

    this.id = localStorage.getItem('userId');

   this.notificationService.getNotificationByUserId(this.id).subscribe(res =>  this.notifications = res);

  }

  Refrech(){

    this.ngOnInit();

  }

}
