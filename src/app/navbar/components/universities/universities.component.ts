import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

  apiServerUrl = environment.apiBaseUrl;
  
  universities : any = [];

  page:number = 1;

  constructor(private universityService:UniversityService) { }

  ngOnInit(): void {

    this.universityService.getAllUniversities().subscribe( res => this.universities = res);
  }

}
