import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ActivityNodeComponent} from './activity-node/activity-node.component';
import {ActivityNodeService} from "./activity-node/activity-node.service";
import {SortByBool} from "./activity-node/activity-node-sort.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ActivityNodeComponent,
    SortByBool
  ],
  exports: [
    SortByBool
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ActivityNodeService,
    {provide: LOCALE_ID, useValue: "pl"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
