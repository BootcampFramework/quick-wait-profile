import { Component, HostListener, OnInit } from '@angular/core';
import { mountRootParcel } from 'single-spa';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.sass'],
})
export class ReminderComponent implements OnInit {
  componentMountRootParcel = mountRootParcel;
  async getReminderParcel() {
    // @ts-ignore
    return window.System.import('@frwk-quick-wait-add-view-reminder');
  }

  constructor() {}

  ngOnInit(): void {
    this.getReminderParcel();
    window.addEventListener('@frwk/react-profile/reminder-detail', (e) => {
      console.log('Event:', e);
    });
  }
}
