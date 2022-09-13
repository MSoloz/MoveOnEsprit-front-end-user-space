import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})



export class UniversityService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }



  getUniversities() { 

    return this.http.get(`${this.apiServerUrl}/university/all`);
  
  }


 getUniversity(id:any) {  
  
  return this.http.get(`${this.apiServerUrl}/university/details/`+id);

     }


     applyToUniverity(id1:any,id2:any ):Observable<any>{


      return this.http.post(`${this.apiServerUrl}/candidate/create/`+ id1 +'/'+ id2,null);
  
  
      }



}
