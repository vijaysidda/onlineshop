import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isloading = false;
  error = null;
  constructor(private http : HttpClient, private authService : AuthService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.isloading = true;
    console.log(form.value); 
    const email = form.value.username;
    const password = form.value.password;
    this.authService.userLogin(email, password).subscribe(
      response => {
        console.log(response)
        this.isloading = false;
        Swal.fire({
          type: 'success',
          title: 'Sucess',
          text: response.message,
          // footer: '<a href>Why do I have this issue?</a>'
        });
        this.router.navigate(['']);
      },
      errMessage =>{
        this.isloading=false;
        this.error = errMessage;
        console.log(this.error);
        Swal.fire({
          type: 'error',
          title: 'Error Occured',
          text: this.error,
          // footer: '<a href>Why do I have this issue?</a>'
        })
      }
    );
  }
}
