import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import {NgbModule} from '@ng-';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule//,
  //  NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
