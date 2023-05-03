import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { LoginButtonComponent } from './components/header/login-button/login-button.component';
import { LogosComponent } from './components/header/logos/logos.component';
import { SocialNetworksComponent } from './components/header/social-networks/social-networks.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    LoginButtonComponent,
    LogosComponent,
    SocialNetworksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
