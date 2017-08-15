import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { NewKegComponent } from './new-keg/new-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    AboutComponent,
    NewKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }