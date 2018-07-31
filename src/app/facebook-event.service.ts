import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FacebookEventService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://youthcodeproject.azurewebsites.net/api/Events';

  getEvents() {
    return this.http.get(this.baseUrl);
  }

  getEvent(id: string) {
    return this.http.get(this.baseUrl + id);
  }
}
