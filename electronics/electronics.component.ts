import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  electronics = null;

  constructor(private http:HttpClient) { }
   datacheck;
  ngOnInit() {
    console.log(this.datacheck);
   this.fetchElectronics();
  }

  fetchElectronics(){
    this.http.get("https://shoppingindeed-2c0b6.firebaseio.com/electronics.json").subscribe(response=>{
      console.log(response);
      this.electronics = response;
    });
  }
}

