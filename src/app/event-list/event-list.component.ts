import { Component, OnInit } from '@angular/core';
import { FacebookEventService } from '../facebook-event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [ FacebookEventService ]
})
export class EventListComponent implements OnInit {
  pastEvents: Event[];
  upcomingEvents: Event[];
  events: Event[];

  constructor(private facebook: FacebookEventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.facebook.getEvents().subscribe(
      (response: Event[]) => this.events = response
    );
  }
}
