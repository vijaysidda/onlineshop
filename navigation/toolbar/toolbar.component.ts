import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit,OnDestroy {
  private userSub: Subscription;
  
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuthenticated = false;

  constructor(private authService:AuthService) { }

  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    })
  }

  onSidenavToggle(){
    this.sidenavToggle.emit();
  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.authService.logout()
  }
}
