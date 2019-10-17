import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {throwError, Subject, BehaviorSubject} from  'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { ProfileDataRes } from '../profile/profile.service';

interface AuthResponseData{
  status:string;
  message:string;
  data:{
    name:{
      first:string;
      last:string;
    };
    mobile:{
      countryCode:string;
      number : string;
    };
    role:string;
    signUpType:string;
    _id:string;
    email:string;
    createdAt:string;
    updatedAt:string;
    __v:number;
    token:string;
  }
}

@Injectable({providedIn:'root'})

export class AuthService{
    user = new BehaviorSubject<User>(null);
    private tokenExpirationTimer:any;

    constructor(private http:HttpClient,private router:Router){}
    userLogin(email:string, password:string)
    {
     return this.http.post<AuthResponseData>("http://13.233.161.206:3001/api/v1.0/users/login",
        {
            email: email,
            password:password
        }
      ).pipe(catchError(errorRes =>{
        console.log(errorRes);
        console.log(errorRes.error);
        console.log(errorRes.error.error);
        let errorMessage = "An unknown Error occured !";

        if(!errorRes.error || !errorRes.error.message){
          return throwError(errorMessage);
        }
        else{
          errorMessage=errorRes.error.message;
          console.log(errorMessage)
          return throwError(errorMessage);
        }
      }),tap(resData => {
        this.handleAuthentication(
          resData.data.email,
          resData.data._id,
          resData.data.token,
        )
      }));
    }

    newUserSignup(userData){
      return this.http.post<AuthResponseData>("http://13.233.161.206:3001/api/v1.0/users/register",
        userData).pipe(catchError(errorRes =>{
          console.log(errorRes);
          // console.log(errorRes.error);
          // console.log(errorRes.error.error);
          let errorMessage = "An unknown Error occured !";

          if(!errorRes.error || !errorRes.error.message){
            return throwError(errorMessage);
          }
          else{
            errorMessage=errorRes.error.message;
            console.log(errorMessage)
            return throwError(errorMessage);
          }
        })//,tap(resData => {
        //   this.handleAuthentication(
        //     resData.data.email,
        //     resData.data._id,
        //     resData.data.token,
        //   )
        // })
        );    
    }

    autoLogin(){
      const userData: {
        email:string;
        id:string;
        _token:string;
        _tokenExpirationDate:string
      } = JSON.parse(localStorage.getItem('userData'));
      if(!userData){
        return;
      }

      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate));

        if(loadedUser.token){
          this.user.next(loadedUser);
          const expirationDuration =  new Date(userData._tokenExpirationDate).getTime()-new Date().getTime();
          this.autoLogout(expirationDuration);
        }
    }

    logout(){
      this.user.next(null);
      this.router.navigate(['login']);
      localStorage.removeItem('userData');
      localStorage.removeItem('token');

      if(this.tokenExpirationTimer){
        clearTimeout(this.tokenExpirationTimer);
      }
      this.tokenExpirationTimer=null;
    }

    autoLogout(expirationDuration:number){
      this.tokenExpirationTimer = setTimeout(()=>{
        this.logout();
      },expirationDuration)
    }

    private handleAuthentication(
      email:string,
      userId:string,
      token : string
      ){
        const expirationDate = new Date(new Date().getTime()+ 3600*1000);
        const user = new User(email,userId,token,expirationDate);
        this.user.next(user);
        this.autoLogout(3600*1000);
        localStorage.setItem('userData',JSON.stringify(user));
        localStorage.setItem('token', user.token);
      }
}