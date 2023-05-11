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
import { EducationComponent } from './components/education/education.component';
import { TitleComponent } from './components/education/title/title.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { LanguagesComponent } from './components/skills/languages/languages.component';
import { LanguageComponent } from './components/skills/languages/language/language.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProyectComponent } from './components/proyects/proyect/proyect.component';
import { AddButtonComponent } from './components/shared/add-button/add-button.component';
import { DeleteButtonComponent } from './components/shared/delete-button/delete-button.component';
import { EditButtonComponent } from './components/shared/edit-button/edit-button.component';



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
    JobComponent,
    EducationComponent,
    TitleComponent,
    SkillsComponent,
    SkillComponent,
    LanguagesComponent,
    LanguageComponent,
    ProyectsComponent,
    ProyectComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
