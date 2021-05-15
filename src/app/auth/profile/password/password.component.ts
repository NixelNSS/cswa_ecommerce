import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "change your password"
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      } else {
        console.log(result)
      }

    });
  }

}
