import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { BasicSettingsComponent } from './unprotected/basic-settings/basic-settings.component';
import { EditGamerPersonaComponent } from './protected/edit-gamer-persona/edit-gamer-persona.component';


@NgModule({
  declarations: [
    SettingsPageComponent,
    BasicSettingsComponent,
    EditGamerPersonaComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
