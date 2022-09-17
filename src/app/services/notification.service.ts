
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient){ }


  getNotificationByUserId(id:string){

   return this.http.get(`${this.apiServerUrl}/notification/student/`+id);
  
  }


}
