import { ConfirmationDialogComponent } from './../../../confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../user/user.service';
import { AuthService } from '../../auth.service';
import { User } from '../../user/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  isNotEditable: boolean = true;
  currentUser: User = Object.create(this.authService.currentUser);

  constructor(
    private authService: AuthService, private userService: UserService, 
    private dialog: MatDialog, private toastService: ToastrService) {}

  ngOnInit(): void {}

  changeEditState(): void {
    this.isNotEditable = !this.isNotEditable;
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const dialog = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          content: "change your personal information"
        }
      });
      dialog.afterClosed().subscribe(result => {
        if (result) {
          this.userService.update(
            this.currentUser.id,
            form.value.firstName,
            form.value.lastName,
            form.value.phone,
            form.value.address,
            form.value.favoriteCategories
          );
          this.changeEditState();
          this.currentUser = Object.create(this.authService.currentUser);
          this.toastService.success("Personal information updated successfully!");
        }
      });
    }
  }

}
