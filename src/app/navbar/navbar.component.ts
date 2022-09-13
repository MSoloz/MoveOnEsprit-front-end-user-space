import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


   notifications :any = [];


  constructor(private universityService: UniversityService) { }

  ngOnInit(): void {

   this.universityService.getUniversities().subscribe((res:any) => { this.notifications = res});



  }

}
