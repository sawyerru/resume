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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about-me', component: AboutMeComponent},
      {path: 'education', component: EducationComponent},
      {path: 'experiences', component: ExperiencesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'hobbies', component: InterestsComponent},
      {path: '', redirectTo: '/about-me', pathMatch: 'full'},
      {path: '**', component: AboutMeComponent}
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
