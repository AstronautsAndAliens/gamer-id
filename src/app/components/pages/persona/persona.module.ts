import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaService } from 'src/app/services/persona/persona.service';
import { PersonaPageComponent } from './persona-page.component';
import { TestSteam1Component } from '../../persona/Steam/test-steam1/test-steam1.component';
import { TestSteamComponent } from '../../persona/Steam/test-steam/test-steam.component';
import { TestSteam2Component } from '../../persona/Steam/test-steam2/test-steam2.component';
import { TestBlizzard1Component } from '../../persona/Blizzard/test-blizzard1/test-blizzard1.component';
import { TestBlizzard2Component } from '../../persona/Blizzard/test-blizzard2/test-blizzard2.component';



@NgModule({
  declarations: [
    PersonaPageComponent,
    TestSteamComponent,
    TestSteam1Component,
    TestSteam2Component,
    TestBlizzard1Component,
    TestBlizzard2Component
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ],
  providers: [
    PersonaService
  ]
})
export class PersonaModule { }
