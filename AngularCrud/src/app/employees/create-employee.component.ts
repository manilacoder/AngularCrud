import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  photoPath = '';
  department = '3';
  isActive = false;
  fullName  = '';
  email = '';
  phoneNumber = '';
  contactPreference = 'email';
  gender = 'male';
  dateOfBirth: Date = new Date(2018,0,30);
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Paroll'}
  ];
  constructor() { 
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue', 
      showWeekNumbers: false,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }
  
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
 saveEmployee(empForm: NgForm): void{
   console.log(empForm);
 };
}
