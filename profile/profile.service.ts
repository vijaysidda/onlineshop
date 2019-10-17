import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { UserProfileRes } from '../shared/profileres.model';


export interface ProfileDataRes{
  status:string;
  message:string;
  data:{
    name:{
      first:string;
      last:string;
    };
    mobile:{
      countryCode:string,
      number : string;
    };
    role:string;
    signUpType:string;
    _id:string;
    email:string;
    createdAt:string;
    updatedAt:string;
    __v:number;
}
}

@Injectable({providedIn:'root'})

export class ProfileService implements OnInit{

    // { ***This is used to send data to sibling i.e update profile component from profile***
    // profiledatatoupdate = new BehaviorSubject<ProfileDataRes>();
    //  currentprofiledata = this.profiledatatoupdate.asObservable();}
    
    constructor(private http:HttpClient,private authService:AuthService){}
     
    ngOnInit(){

    }
    // public getToken(): string {
    //     return localStorage.getItem('_token');
    //   }

     profileView(){
        // get the token
        // const token = this.getToken();
      //   let token =(localStorage.getItem('token'));
      //  // console.log(token);
      //   let headers: HttpHeaders = new HttpHeaders();
      //   headers = headers.append('x-access-token', token)
        
        return this.http.get<UserProfileRes>("http://13.233.161.206:3001/api/v1.0/users/")
    }

    updateProfile(userprofiledata:ProfileDataRes){
         // {***console.log(userprofiledata);
        //  this.profiledatatoupdate.next(userprofiledata);}
          // let token=localStorage.getItem('token');
          // let headers:HttpHeaders = new HttpHeaders();
          // headers = headers.append('x-access-token', token)
        // return this.http.put("http://13.233.161.206:3001/api/v1.0/users/",{},{headers:headers})
    }
}