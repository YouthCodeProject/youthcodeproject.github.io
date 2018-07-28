import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerChatboxComponent } from './messenger-chatbox.component';

describe('MessengerChatboxComponent', () => {
  let component: MessengerChatboxComponent;
  let fixture: ComponentFixture<MessengerChatboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerChatboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
