import { Component, OnInit } from '@angular/core';
import { userTeacher } from 'src/models/userTeacher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CallapiService } from '../callapi.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {
  id_dataTeacher: any;
  update_Teacher: userTeacher;
  all_DataTeacher: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.id_dataTeacher = this.activate.snapshot.paramMap.get('_data');
    console.log(this.id_dataTeacher);
    this.all_DataTeacher = this.formbuilder.group({
      'usernameTeacher': [null, Validators.required],
      'passwordTeacher': [null, Validators.required],
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required]

    });
  }

  ngOnInit() {
    this.getById_Teaccher();
  }

  getById_Teaccher() {
    this.callapi.getById_Teaccher(this.id_dataTeacher).subscribe(it => {
      console.log(it);
      this.all_DataTeacher.patchValue(it)
      console.log(this.all_DataTeacher.value);
    });
  }

  edit_Teaccher() {
    this.update_Teacher = this.all_DataTeacher.value;
    console.log(this.update_Teacher);
    this.callapi.edit_Teaccher(this.id_dataTeacher, this.update_Teacher).subscribe(it => {
    });
  }

}