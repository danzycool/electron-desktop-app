import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundprogressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RoundprogressModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
