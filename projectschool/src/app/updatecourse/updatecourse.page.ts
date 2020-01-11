import { Component, OnInit } from '@angular/core';
import { course } from 'src/models/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../callapi.service';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.page.html',
  styleUrls: ['./updatecourse.page.scss'],
})
export class UpdatecoursePage implements OnInit {
  id_dataCourse: any;
  update_Course: course;
  all_DataCourse: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.id_dataCourse = this.activate.snapshot.paramMap.get('_data');
    console.log(this.id_dataCourse);
    this.all_DataCourse = this.formbuilder.group({
      'id_Course': [null, Validators.required],
      'name_Course': [null, Validators.required],

    });
  }


  ngOnInit() {
    this.getById_Course();
  }

  getById_Course() {
    this.callapi.getById_Course(this.id_dataCourse).subscribe(it => {
      console.log(it);
      this.all_DataCourse.patchValue(it)
      console.log(this.all_DataCourse.value);
    });
  }

  edit_Course() {
    this.update_Course = this.all_DataCourse.value;
    console.log(this.update_Course);
    this.callapi.edit_Course(this.id_dataCourse, this.update_Course).subscribe(it => {
    });
  }

}
