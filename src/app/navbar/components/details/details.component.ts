import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversityService } from 'src/app/services/university.service';
import { environment } from 'src/environments/environment';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  apiServerUrl = environment.apiBaseUrl;

   idUser : any ;

  universityId:any;

  university: any;

  constructor(private router:Router,private dialog:MatDialog,private route:ActivatedRoute,private universityService:UniversityService) { }

  ngOnInit(): void {



   this.idUser = localStorage.getItem('userId') 

this.route.paramMap.subscribe(params => {  this.universityId = params.get('id'); });


this.universityService.getUniversity(this.universityId).subscribe((res:any )=>{

  this.university = res;


})

  }



    Apply(){


    this.universityService.applyToUniverity(this.universityId,this.idUser).subscribe(res =>{


      if(res!=null){


        this.router.navigate(['/MoveOnEsprit/universities']);

      }

    })
    


  }

}

