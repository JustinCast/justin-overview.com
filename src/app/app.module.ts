import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProjectsComponent } from './projects/projects.component';
import { ReviewComponent } from './review/review.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { TimeLineComponent } from './dialogs/time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ReviewComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    TimeLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
