import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaLoaderService } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { EventCardComponent } from './event-card/event-card.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { MessengerChatboxComponent } from './messenger-chatbox/messenger-chatbox.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookPagePluginComponent } from './facebook-page-plugin/facebook-page-plugin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'repos', component: RepoListComponent },
  { path: 'events', component: EventListComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    RepoCardComponent,
    EventCardComponent,
    RepoListComponent,
    EventListComponent,
    MessengerChatboxComponent,
    FooterComponent,
    FacebookPagePluginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6LeyKmcUAAAAAE0qpC3SCPvP9Ls45kcPfIeL3d87' } as RecaptchaSettings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
