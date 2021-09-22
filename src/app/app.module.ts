import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { SettingsPageComponent } from './components/pages/settings-page/settings-page.component';

// DEVELOPER NOTE: ONLY ADD THINGS TO THIS FILE NEEDED FOR LANDING, EVERYTHING ELSE CAN BE LAZY LOADED
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchPageComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
