import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaPageComponent } from '../pages/persona/persona-page.component';
import { TestSteam1Component } from './Steam/test-steam1/test-steam1.component';
import { TestSteamComponent } from './Steam/test-steam/test-steam.component';
import { TestSteam2Component } from './Steam/test-steam2/test-steam2.component';
import { TestBlizzard1Component } from './Blizzard/test-blizzard1/test-blizzard1.component';
import { TestBlizzard2Component } from './Blizzard/test-blizzard2/test-blizzard2.component';
import { BasicPersonaInfoComponent } from './123xyz/basic-persona-info/basic-persona-info.component';



@NgModule({
  declarations: [
    PersonaPageComponent,
    BasicPersonaInfoComponent,
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
  ]
})
export class PersonaModule { }
