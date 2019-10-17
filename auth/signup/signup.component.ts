import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

export interface userSignup{
  name:{
    first:string;
    last:string;
  },
  email:string;
  mobile:{
       countrycode: string;
       number:string;
  },
  password:string;
 
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error=null;
  isLoading=false;
  selectedValue='+91';
  modifiedValue ;
  countrycode=[
    {value:'+1',  viewValue: 'Australia'},
    {value:'+2',  viewValue: 'Bangladesh'},
    {value:'+3',  viewValue: 'Canada'},
    {value:'+4',  viewValue: 'Uk'},
    {value:'+91',  viewValue: 'India'},
    {value:'+7',  viewValue: 'US'}
  ]
  signupForm : FormGroup;
  constructor(private http : HttpClient,private authService:AuthService,private router:Router) { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      'name' : new FormGroup({
        'first' : new FormControl('',Validators.required),
        'last' : new FormControl('',Validators.required)
      }),
      'email' : new FormControl('',[Validators.required,Validators.email]),
      'mobile' : new FormGroup({
        "countrycode" : new FormControl('',Validators.required),
        "number" : new FormControl('',Validators.required),
      }),
      'password' : new FormControl('',[Validators.required,Validators.minLength(6)]),
      'confirmpassword': new FormControl('',Validators.required),
      // 'gender' : new FormControl('male'),
      // 'selectcountry' : new FormControl('null',Validators.required),
    });
    
  }
  // countrycodeSelected(val:any){
  //   console.log(val);
  //   this.modifiedValue = val;
  //   // for(let country of this.countrycode){
  //   //   if(country.value = this.modifiedValue){
  //   //     country.value = this.modifiedValue;
        
  //   //   }
  //   //}
  // }
  

  onSubmit(){
    this.isLoading=true;
    console.log(this.signupForm.value);
   let formvlue=this.signupForm.value;
    // const userData :userSignup= {
    //   "name":{
    //     "first" : formvlue.name.first,
    //     "last" : formvlue.name.last,
    //   },
    //   "email" : formvlue.email,
    //   "mobile":{
    //     "countrycode" : formvlue.mobile.countrycode,
    //     "number":formvlue.mobile.number,
    //   },
    //   password:formvlue.password
    // }
    this.authService.newUserSignup(formvlue).subscribe(
      res => {
        console.log(res);
        Swal.fire({
          type: 'success',
          title: 'Sucess',
          text: res.message,
          footer: '<a href>Why do I have this issue?</a>'
        })
        this.isLoading=false;
        this.router.navigate(['/login']);
      },
      errMessage =>{
        
        this.error = errMessage;
        console.log(this.error);
        Swal.fire({
          type: 'error',
          title: 'Error Occured',
          text: this.error,
          footer: '<a href>Why do I have this issue?</a>'
        })
        this.isLoading=false;

      }
      
    );
  }

}
