import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { userStudent } from 'src/models/userStudent';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.page.html',
  styleUrls: ['./updatestudent.page.scss'],
})
export class UpdatestudentPage implements OnInit {

  id_dataStudent: any;
  update_Student: userStudent;
  all_DataStudent: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.id_dataStudent = this.activate.snapshot.paramMap.get('_data');
    console.log(this.id_dataStudent);
    this.all_DataStudent = this.formbuilder.group({
      'username_Student': [null, Validators.required],
      'password_Student': [null, Validators.required],
      'id_Student': [null, Validators.required],
      'firstName_Student': [null, Validators.required],
      'laseName_Student': [null, Validators.required],
      'email_Student': [null, Validators.required]

    });
  }

  ngOnInit() {
    this.getById_Student();
  }
<<<<<<< HEAD
  getById_Student() {
    this.callapi.getById_Student(this.id_dataStudent).subscribe(it => {
      console.log(it);
      this.all_DataStudent.patchValue(it)
=======

  getById_Student() {
    this.callapi.getById_Student(this.id_dataStudent).subscribe(id => {
      this.all_DataStudent.patchValue(id)
      this.update_Student = id;
>>>>>>> 9359bf52864c212998c782e5ad154811ddca7df1
      console.log(this.all_DataStudent.value);
    });
  }

<<<<<<< HEAD
  edit_Student() {
    this.update_Student = this.all_DataStudent.value;
    console.log(this.update_Student);
    this.callapi.edit_Student(this.id_dataStudent, this.update_Student).subscribe(it => {
    });
=======
  editData_Student() {
    this.update_Student = this.all_DataStudent.value;
    console.log(this.update_Student);
    
    this.id_dataStudent.edit_Student(this.id_dataStudent, this.all_DataStudent).subscribe(id => {

      console.log(id);

    });

    this.router.navigate(['/home']);
>>>>>>> 9359bf52864c212998c782e5ad154811ddca7df1
  }

}
