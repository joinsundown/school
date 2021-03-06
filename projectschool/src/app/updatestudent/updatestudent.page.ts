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
      'usernameStudent': [null, Validators.required],
      'passwordStudent': [null, Validators.required],
      'idStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'statusStudent': [null, Validators.required],
      'emailStudent': [null, Validators.required]

    });
  }

  ngOnInit() {
    this.getById_Student();
  }
  getById_Student() {
    this.callapi.getById_Student(this.id_dataStudent).subscribe(it => {
      console.log(it);
      this.all_DataStudent.patchValue(it)
      console.log(this.all_DataStudent.value);
    });
  }

  edit_Student() {
    this.update_Student = this.all_DataStudent.value;
    console.log(this.update_Student);
    this.callapi.edit_Student(this.id_dataStudent, this.update_Student).subscribe(it => {
    });
  }

}
