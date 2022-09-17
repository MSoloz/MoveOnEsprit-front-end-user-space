import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  apiServerUrl = environment.apiBaseUrl;

   posts : any = [];


  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getAllPosts().subscribe( res =>this.posts = res );


  }

}
