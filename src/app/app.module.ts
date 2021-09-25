import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthService } from './services/auth/auth.service';
import { AuthButtonsComponent } from './components/auth/auth-buttons/auth-buttons.component';
import { PersonaService } from './services/persona/persona.service';
import { HttpClientModule } from '@angular/common/http';

// DEVELOPER NOTE: ONLY ADD THINGS TO THIS FILE NEEDED FOR LANDING, EVERYTHING ELSE CAN BE LAZY LOADED IN OTHER MODULES
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchPageComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    AuthButtonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-wz5rreaa.us.auth0.com',
      clientId: 'JEdJ7OiX4dPFILPKyjDKji1q61aLxBAa'
    })
  ],
  providers: [
    AuthService,
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
