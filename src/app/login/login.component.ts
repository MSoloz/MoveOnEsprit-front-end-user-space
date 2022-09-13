import { Component, OnInit } from '@angular/core';
import {  FormGroup ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  user : any;
  loginForm !:FormGroup;


  constructor(private router:Router,private studentService:StudentService) { }

  
  ngOnInit(): void {

    this.loginForm = new FormGroup({

      email: new FormControl('',[Validators.required]),

      password: new FormControl('',[Validators.required]),

    },{updateOn:'submit'});
  
  }


  userLogin() {



    console.log(this.loginForm.value);
    

    if(this.loginForm.valid){


    this.studentService.login(this.loginForm.value).subscribe( res =>{ 

        if(res !=null){



          this.user = res;

          localStorage.setItem('userId',this.user.id);


          console.log(localStorage.getItem('userId'));


          this.router.navigate(['/MoveOnEsprit/home']);


        }else {


          console.log("not found");

          console.log(res);
        }


     })

      // 

    
 

      //this.router.navigate(['/MoveOnEsprit']);



     //this.loginForm.reset();

    

   }

  }

  
  getErrorMessage1(){
    if (this.loginForm.get('email')!.hasError('required')) {
      return 'Email is required';
    }

    return this.loginForm.get('email')!.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessage2(){

    if (this.loginForm.get('password')!.hasError('required')) {
      return 'Password is required';
    }

    return this.loginForm.get('email')!.hasError('email') ? 'Not a valid email' : '';
  }

  
}
