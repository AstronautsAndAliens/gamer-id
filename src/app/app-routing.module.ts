import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';

//DEV NOTE || LAZY LOAD EVERYTHING EXCEPT LANDING PAGE
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'search', component: SearchPageComponent }, //search results list and filtering
  { path: 'persona', pathMatch: 'full', redirectTo: '/search'},
  { 
    path: 'persona/:personaId',  //a players unique page
    loadChildren: () => import('./components/modules/persona/persona.module').then(m => m.PersonaModule) //lazy load to keep massive components list and services seperate
  },
  // { path: 'settings', component:  SettingsPageComponent }, //site and account settings & dashboard
  { 
    path: 'settings',  //a players unique page
    loadChildren: () => import('./components/modules/settings/settings.module').then(m => m.SettingsModule) //lazy load to keep massive components list and services seperate
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
