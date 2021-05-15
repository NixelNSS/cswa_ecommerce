import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  isEditable: boolean = true;
  v = "Nikola";

  constructor() { }

  ngOnInit(): void {
  }

  edit(form: NgForm): void {
    this.isEditable = !this.isEditable;
  }

  onSubmit(form: NgForm): void {
    console.log("Change personal information");
  }

}
