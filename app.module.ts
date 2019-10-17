import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { MoreComponent } from './more/more.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { TvsComponent } from './electronics/tvs/tvs.component';
import { HomeappliencesComponent } from './electronics/homeappliences/homeappliences.component';
import { MenComponent } from './men/men.component';
import { TopwearComponent } from './men/topwear/topwear.component';
import { BottomwearComponent } from './men/bottomwear/bottomwear.component';
import { WomenComponent } from './women/women.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import {MatSidenavModule, MatToolbarModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule, MatListModule, MatNavList, MatInputBase, MatInputModule, MatRadioModule, MatSelectModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmValidatorDirective } from './auth/signup/helper/confirm-validator.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading_spinner.component';
import { UpdateprofileComponent } from './profile/updateprofile/updateprofile.component';
import { AuthInterceptorService } from './auth/auth-interceptors.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ToolbarComponent,
    MoreComponent,
    CartComponent,
    ProfileComponent,
    ElectronicsComponent,
    TvsComponent,
    HomeappliencesComponent,
    MenComponent,
    TopwearComponent,
    BottomwearComponent,
    WomenComponent,
    SidenavListComponent,
   ConfirmValidatorDirective,
   LoadingSpinnerComponent,
   UpdateprofileComponent,
   ProfileComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
