import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { mountRootParcel } from 'single-spa';
import { ReminderModalComponent } from '../reminder-modal/reminder-modal';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
})
export class ReminderComponent implements OnInit {
  description: string = '';
  date: Date | null = null;
  title: string = '';
  componentMountRootParcel = mountRootParcel;
  async getReminderParcel() {
    // @ts-ignore
    return window.System.import('@frwk-quick-wait-add-view-reminder');
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getReminderParcel();
    window.addEventListener('@frwk/react-profile/reminder-detail', (e: any) => {
      console.log('Event:', e.detail);
      this.description = e.detail.details;
      this.date = e.detail.date;
      this.title = e.detail.title;
      this.openDialog();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ReminderModalComponent, {
      width: '400px',
      data: {
        description: this.description,
        date: this.date,
        title: this.title,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
