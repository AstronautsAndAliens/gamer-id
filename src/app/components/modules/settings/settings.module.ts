import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { BasicSettingsComponent } from './unprotected/basic-settings/basic-settings.component';
import { EditGamerPersonaComponent } from './protected/edit-gamer-persona/edit-gamer-persona.component';
import { PrimaryButtonComponent } from '../../common/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SettingsPageComponent,
    BasicSettingsComponent,
    EditGamerPersonaComponent,
    PrimaryButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
