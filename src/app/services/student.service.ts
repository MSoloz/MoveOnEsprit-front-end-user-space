import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }


  
  login(data: any):Observable<any>{

    return this.http.post(`${this.apiServerUrl}/student/login`,data);


  }


  


}
