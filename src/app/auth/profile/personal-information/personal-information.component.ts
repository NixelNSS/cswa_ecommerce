import { ConfirmationDialogComponent } from './../../../confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  isEditable: boolean = true;
  v = "Nikola";

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edit(form: NgForm): void {
    this.isEditable = !this.isEditable;
  }

  onSubmit(form: NgForm): void {
    console.log("Change personal information");
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        content: "change your personal information"
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
