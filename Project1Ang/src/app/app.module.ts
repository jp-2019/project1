import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeannieComponent } from './jeannie/jeannie.component';
import { ShaksCallToActionCompComponent } from './shaks-call-to-action-comp/shaks-call-to-action-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    JeannieComponent,
    ShaksCallToActionCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
