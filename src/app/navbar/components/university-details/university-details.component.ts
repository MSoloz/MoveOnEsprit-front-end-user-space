import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements OnInit {

  
  apiServerUrl = environment.apiBaseUrl;

   idUser : any ;

  universityId:any;

  university: any;

  constructor(private router:Router,private route:ActivatedRoute,private universityService:UniversityService) { }

  ngOnInit(): void {

    this.idUser = localStorage.getItem('userId') 

    this.route.paramMap.subscribe(params => {  this.universityId = params.get('id'); });
 
    this.universityService.getUniversityById(this.universityId).subscribe(res=> this.university = res);

  }


  
  Apply(){


    this.universityService.applyToUniverity(this.universityId,this.idUser).subscribe(res =>{

      if(res!=null){

        this.router.navigate(['/MoveOnEsprit/universities']);

      }

    })

  }



}
