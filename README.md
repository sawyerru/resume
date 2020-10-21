# Steps to Start
## 1. Install Necessary Tools:
a. download [git](https://git-scm.com/downloads) for your machine (mac/os/linux)

b. download [node](https://nodejs.org/en/) and click the box labeled 'Recommended for Most Users'

c. Ensure you have the right versions by typing in your command line
```bash
git --version
node --version
```
You should see 2.9 for git and 12 for node

d. make a [github account](https://github.com/join)

## 2. Clone the Project:
a. Go to [this repo](https://github.com/sawyerru/resume)

b. look for a folder where you'd want to save your resume project and copy the path to this folder

c. navigate to that folder in your command line by:
```bash
cd <YOUR PATH HERE>
```
*note that on Windows the slashes are wrong from the File Explorer the path should include `/`. 
(e.g. BAD = `C:\Users\sawye\Documents\Projects`; GOOD = `C:/Users/sawye/Documents/Projects`)

d. on the github repo page click the green button that says "Code". Click HTTPS and copy the link. 
here it is also: `https://github.com/sawyerru/resume.git`

e. back in the command line type:
```bash
git clone https://github.com/sawyerru/resume.git
```

f. enter into the folder to make sure you did it correctly:
```bash
cd resume/
```
this line should run with no errors and your current working directory should include resume/ 

## 3. Make Updates
obviously you don't want my face and information on there so it's time to change it to you!

Below are a few things to get you started!

### Running the Project
Run `npm install` to install all required dependcies for the project


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Adding a profile image

In the src/assets/folder add your image of choice. Then in the header.component.html file change the name of the file at the end of this:
`src="../../../assets/Your-Image.jpg"`

### Adding a Section

Under the body/ folder you can create a new component with the code: 
```bash 
ng generate component NewComponent
````
(You'll need to navigate to the body folder in the command line with the following:) 
```bash 
cd resume/src/app/components/body
```

In the body.component.html file add a new HTML tag:
```html
<a class="button" routerLink="/NewComponent" routerLinkActive="activebutton">NewComponent</a>
```

In the app.module.ts file you'll need to make sure you have the new module imported:
```angular2 
import { NewComponent } from './components/body/NewComponent/NewComponent.component';
```

Also make sure the Module is in the declarations array:
```angular 
declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    InterestsComponent,
    AboutMeComponent,
    NewComponent,
  ],
```

Also add a new route for your new component:
```angular
imports: [
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
    ]),
``` 


### Build

Run `ng build` to build the project. 
Change the angular.json file and for the `outputPath` variable change the value to `docs/`
The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.
#### To update website content
Enter the following in the Command Line
```bash 
ng build --prod --baseHref="https://USERNAME.github.io/resume/
git add *
git commit -m "updated build on DATE
git push -u origin master
```
