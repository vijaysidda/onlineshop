import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { TvsComponent } from './electronics/tvs/tvs.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HomeappliencesComponent } from './electronics/homeappliences/homeappliences.component';
import { UpdateprofileComponent } from './profile/updateprofile/updateprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'electronics', component:ElectronicsComponent
  },
  {
    path:'tvs&appliences', component:TvsComponent
  },
  {
    path:'men', component:MenComponent
  },
  {
    path:'women', component:WomenComponent
  },
  {
    path:'home&kitchen', component:HomeappliencesComponent
  },
  {
    path:'profile/updateprofile',component:UpdateprofileComponent,canActivate:[AuthGuard]
  },
  {
    path:'profile', component:ProfileComponent,canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
