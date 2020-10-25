import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Template1Component } from './templates/template1/template1.component';
import { Template2Component } from './templates/template2/template2.component';
import { Template3Component } from './templates/template3/template3.component';
import { Template4Component } from './templates/template4/template4.component';
import { Template5Component } from './templates/template5/template5.component';
import { Template6Component } from './templates/template6/template6.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    Template6Component,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
