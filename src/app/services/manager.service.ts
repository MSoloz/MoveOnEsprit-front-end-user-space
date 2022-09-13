import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }


  
 getManager() {  

  return this.http.get(`${this.apiServerUrl}/manager/details/631b3752ac1dc43d9b3425e2`);

     }


}
