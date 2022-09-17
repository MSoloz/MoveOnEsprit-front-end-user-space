import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  
  getAllPosts() { 

    return this.http.get(`${this.apiServerUrl}/post/all`);
  
  }


 getPostById(id:any) {  

  return this.http.get(`${this.apiServerUrl}/post/details/`+id);

     }

}
