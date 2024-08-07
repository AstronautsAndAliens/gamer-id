import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment as env } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AutherizedPersonaService } from './services/auth/auth.service';
import { AuthButtonsComponent } from './components/auth/auth-buttons/auth-buttons.component';
import { PersonaService } from './services/persona/persona.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SearchModule } from './components/modules/search/search.module';

// DEVELOPER NOTE: ONLY ADD THINGS TO THIS FILE NEEDED FOR LANDING, EVERYTHING ELSE CAN BE LAZY LOADED IN OTHER MODULES
@NgModule({ declarations: [
        AppComponent,
        LandingPageComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        AuthButtonsComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        AuthModule.forRoot({
            domain: env.AUTH0_DOMAIN,
            clientId: env.AUTH0_CLIENT_ID
        }),
        SearchModule], providers: [
        AutherizedPersonaService,
        PersonaService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
