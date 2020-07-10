# Resume

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Adding a profile image

In the src/assets/folder add your image of choice. Then in the header.component.html file change the name of the file at the end of this:
`src="../../../assets/Your-Image.jpg"`

## Adding a Section

Under the body/ folder you can create a new component with the code: `ng generate component NewComponent`. (You'll need to navigate to the body folder in the command line with the following: `cd resume/src/app/components/body`)

In the body.component.html file add a new HTML tag:
`<a class="button" routerLink="/NewComponent" routerLinkActive="activebutton">NewComponent</a>`

In the app.module.ts file you'll need to make sure you have the new module imported:
`import { NewComponent } from './components/body/NewComponent/NewComponent.component';`

Also make sure the Module is in the declarations array:
`declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    InterestsComponent,
    AboutMeComponent,
    NewComponent,
  ],` 

Also add a new route for your new component:
`  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about-me', component: AboutMeComponent},
      {path: 'education', component: EducationComponent},
      {path: 'experiences', component: ExperiencesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'hobbies', component: InterestsComponent},
      {path: 'New Component', component: NewComponent},
      {path: '', redirectTo: '/about-me', pathMatch: 'full'},
      {path: '**', component: AboutMeComponent}
    ]),`


## Build

Run `ng build` to build the project. 
Change the angular.json file and for the `outputPath` variable change the value to `docs/`
The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.

## 
