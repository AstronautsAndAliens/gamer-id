import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { BasicSettingsComponent } from './unprotected/basic-settings/basic-settings.component';
import { FormsModule } from '@angular/forms';
import { EditPersonaNicknameComponent } from './protected/edit-persona-nickname/edit-persona-nickname.component';
import { DeleteAccountComponent } from './protected/delete-account/delete-account.component';
import { SharedModule } from '../shared/shared.module';
import { EditSteamIdComponent } from './protected/edit-steam-id/edit-steam-id.component';


@NgModule({
  declarations: [
    SettingsPageComponent,
    BasicSettingsComponent,
    // PrimaryButtonComponent,
    EditPersonaNicknameComponent,
    DeleteAccountComponent,
    EditSteamIdComponent
  ],
  imports: [
    SharedModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule { }
