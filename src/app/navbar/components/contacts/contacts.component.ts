import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  apiServerUrl = environment.apiBaseUrl;

   manager:any = [];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {

  this.managerService.getManager().subscribe( res => {this.manager = res });

  }

}
