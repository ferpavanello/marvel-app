import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    console.log("Fora service");
    return this.http.get("/events/").pipe(
      map(response => {
        console.log("service");
        return response;
      })
    );
  }
}
