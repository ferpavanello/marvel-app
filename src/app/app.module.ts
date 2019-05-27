import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { EventsComponent } from "./events/events.component";

const Routes = [
  {
    path: "",
    redirectTo: "events",
    pathMatch: "full"
  },
  {
    path: "events",
    component: EventsComponent
  }
];

@NgModule({
  declarations: [AppComponent, EventsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(Routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
