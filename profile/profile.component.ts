import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService, ProfileDataRes } from './profile.service';
import { UserProfileRes } from '../shared/profileres.model';

export interface PeriodicElement {
  name: string;
  weight: string;
}

const ELEMENT_DATA: PeriodicElement[]=[
  // {name:'Email', weight:"vijaysidda"},
  //  {name:'firstName',weight:"vijay"},
  //  {name:'Lastname' , weight : "sidda"},
  // { name:"Mobile" ,weight: '9493921493'}
 ]
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router:Router, private profileService:ProfileService) { }
  displayedColumns: string[] = ['name', 'weight'];
  public userres;
  dataSource=ELEMENT_DATA;
  profiledata:ProfileDataRes;
  ngOnInit() {
    this.profileService.profileView().subscribe(resData =>{
      console.log(resData);
      //  this.profiledata =resData;
         this.userres = new UserProfileRes(resData);
      this.dataSource=[

        {name:"Email", weight:this.userres.email},
        {name:"FirstName",weight:this.userres.firstname},
        {name:"LastName", weight:this.userres.lastname},
        {name:"Mobile", weight:this.userres.number}
      ] 
  },error =>{
      console.log(error);
  });
  }
  onEdit(){
      // this.profileService.updateProfile(this.profiledata)
     this.router.navigate(['profile/updateprofile']);
  }
  
}
