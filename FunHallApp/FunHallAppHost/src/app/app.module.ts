import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewTeamsComponent } from './view-teams/view-teams.component';
import { FormsModule } from '@angular/forms';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { MessagesComponent } from './messages/messages.component' ; 

@NgModule({
  declarations: [
    AppComponent,
    ViewTeamsComponent,
    TeamDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
