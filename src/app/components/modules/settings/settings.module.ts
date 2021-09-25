import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { BasicSettingsComponent } from './unprotected/basic-settings/basic-settings.component';
import { PrimaryButtonComponent } from '../../common/primary-button/primary-button.component';
import { FormsModule } from '@angular/forms';
import { EditPersonaNicknameComponent } from './protected/edit-persona-nickname/edit-persona-nickname.component';
import { DeleteAccountComponent } from './protected/delete-account/delete-account.component';


@NgModule({
  declarations: [
    SettingsPageComponent,
    BasicSettingsComponent,
    PrimaryButtonComponent,
    EditPersonaNicknameComponent,
    DeleteAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
