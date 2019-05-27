import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get("/events/").pipe(
      map(response => {
        return response;
      })
    );
  }
}
