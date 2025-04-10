import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { TechnologiesComponent } from './modules/technologies/technologies.component';
import { ExperienceComponent } from './modules/experience/experience.component';
import { StudiesComponent } from './modules/studies/studies.component';
import { ContactComponent } from './modules/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'contact', component: ContactComponent },
];
