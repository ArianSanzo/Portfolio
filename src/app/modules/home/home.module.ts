import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { LoginButtonComponent } from './components/header/login-button/login-button.component';
import { LogosComponent } from './components/header/logos/logos.component';
import { SocialNetworksComponent } from './components/header/social-networks/social-networks.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/about/info/info.component';
import { PhotoComponent } from './components/about/photo/photo.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/jobs/job/job.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    LoginButtonComponent,
    LogosComponent,
    SocialNetworksComponent,
    AboutComponent,
    InfoComponent,
    PhotoComponent,
    JobsComponent,
    JobComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
