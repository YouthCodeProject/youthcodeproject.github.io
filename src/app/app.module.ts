import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RepoCardComponent } from './repo-card/repo-card.component';
import { EventCardComponent } from './event-card/event-card.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MessengerChatboxComponent } from './messenger-chatbox/messenger-chatbox.component';
import { FooterComponent } from './footer/footer.component';
import { FacebookPagePluginComponent } from './facebook-page-plugin/facebook-page-plugin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'repos', component: RepoListComponent },
  { path: 'events/:id', component: EventDetailComponent },
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
    EventDetailComponent,
    MessengerChatboxComponent,
    FooterComponent,
    FacebookPagePluginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
