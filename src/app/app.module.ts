import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeLineComponent } from './dialogs/time-line/time-line.component';
import { RateMeComponent } from './rate-me/rate-me.component';
import { ROUTES } from './app.routing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReviewsComponent } from './dialogs/reviews/reviews.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    TimeLineComponent,
    RateMeComponent,
    ReviewsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [
    TimeLineComponent,
    ReviewsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
