import { Component, OnInit } from '@angular/core';
import { ProfileService, ProfileDataRes } from '../profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserProfileRes } from 'src/app/shared/profileres.model';


interface UserData{
      name:{
      first:string;
      last:string;
    };
    mobile:{
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
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  updateform:FormGroup;
  userdata;
  
  selected='+91';
  constructor(private profileService:ProfileService) { }
  
    ngOnInit() {
    //{****} this.profileService.currentprofiledata.subscribe(profiledata =>{
    //     console.log(profiledata);
    //     this.userdata = profiledata;
    // })
        
    this.getProfile()
    
    this.updateform =  new FormGroup({
      'email': new FormControl({value:'',disabled:true},[Validators.required,Validators.email]),
      'countrycode': new FormControl('this.selected',[Validators.required]),
      'mobilenumber': new FormControl('',[Validators.required,Validators.minLength(10)]),
       'firstname' : new FormControl('',[Validators.required]),
       'lastname' : new FormControl('',Validators.required)
    })

  }

    getProfile(){
     this.profileService.profileView().subscribe( resData =>{
      
      //this.userdata=  resData;

      let user = new UserProfileRes(resData);
      this.userdata = user;
      console.log(this.userdata);
    });


   

    // for (const key in this.userdata) {
    //   if (this.userdata.hasOwnProperty(key)) {
    //     const key = this.userdata[key];
    //     console.log(key);
    //   }
    // }
   
  }
  

  onUpdate(){
    console.log(this.updateform.value);
    let updateprofile;
    this.profileService.updateProfile(updateprofile);
  }
}
