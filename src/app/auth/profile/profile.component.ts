import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changePassword(): void {
    // const dialog = this.dialog.open(ChangePasswordComponent);
    // dialog.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log("Change");
    //   } else {
    //     console.log("Don't change password");
    //   }
    // });
  }

}
