import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProjectsComponent } from './projects/projects.component';
import { ReviewComponent } from './review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeLineComponent } from './dialogs/time-line/time-line.component';
import { RateMeComponent } from './rate-me/rate-me.component';
import { ROUTES } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ReviewComponent,
    TimeLineComponent,
    RateMeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  entryComponents: [
    TimeLineComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
