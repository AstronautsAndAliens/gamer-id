import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaPageComponent } from './persona-page.component';

const routes: Routes = [
  {path: '', component: PersonaPageComponent} // path: /persona
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
