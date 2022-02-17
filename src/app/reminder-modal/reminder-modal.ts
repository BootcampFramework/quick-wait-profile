import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reminder-modal',
  templateUrl: './reminder-modal.html',
  styleUrls: ['./reminder-modal.css'],
})
export class ReminderModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReminderModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { description: string; title: string; date: Date | null }
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
