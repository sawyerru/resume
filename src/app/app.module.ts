import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { AboutMeComponent } from './components/body/about-me/about-me.component';
import { EducationComponent } from './components/body/education/education.component';
import { ExperiencesComponent } from './components/body/experiences/experiences.component';
import { ProjectsComponent } from './components/body/projects/projects.component';
import { InterestsComponent } from './components/body/interests/interests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/body/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    InterestsComponent,
    AboutMeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // This is to handle routing for the different tabs
      // 'path' variable will need to match 'routerLink' in body.component.html
      {path: 'about-me', component: AboutMeComponent},
      {path: 'education', component: EducationComponent},
      {path: 'experiences', component: ExperiencesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'interests', component: InterestsComponent},
      {path: 'contact', component: ContactComponent},
      // Add new buttons above me
      // the bottom two are for error handling 
      {path: '', redirectTo: '/about-me', pathMatch: 'full'},
      {path: '**', component: AboutMeComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
