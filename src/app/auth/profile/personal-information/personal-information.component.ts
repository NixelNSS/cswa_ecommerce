import { ConfirmationDialogComponent } from './../../../confirmation-dialog/confirmation-dialog.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
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
  categories = new FormControl({ value: this.currentUser.favoriteCategories, disabled: true });
  categoryList: string[] = ["Java", "Python", "C#", "JS", "Go"];

  constructor(
    private authService: AuthService, private userService: UserService,
    private dialog: MatDialog, private toastService: ToastrService) { }

  ngOnInit(): void { }

  changeEditState(): void {
    this.isNotEditable = !this.isNotEditable;
    this.isNotEditable ? this.categories.disable() : this.categories.enable();
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
            form.value.firstName,
            form.value.lastName,
            form.value.phone,
            form.value.address,
            this.categories.value
          ).subscribe(
            response => {
              this.changeEditState();
              this.authService.updateCurrentUserAfterPersonalInformationUpdate(response);
              this.currentUser = Object.create(this.authService.currentUser);
              this.toastService.success("Personal information updated successfully!");
            }
          );
        }
      });
    }
  }

}
