import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { userTeacher } from 'src/models/userTeacher';

@Component({
  selector: 'app-updateteacher',
  templateUrl: './updateteacher.page.html',
  styleUrls: ['./updateteacher.page.scss'],
})
export class UpdateteacherPage implements OnInit {

  id_dataTeacher: any;
  update_Teacher: userTeacher;
  all_DataTeacher: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.id_dataTeacher = this.activate.snapshot.paramMap.get('_id');
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
    this.callapi.getById_Teacher(this.id_dataTeacher).subscribe(it => {
      console.log(it);
      this.all_DataTeacher.patchValue(it)
      console.log(this.all_DataTeacher.value);
    });
  }

  edit_Teaccher() {
    this.update_Teacher = this.all_DataTeacher.value;
    console.log(this.update_Teacher);
    this.callapi.edit_Teacher(this.id_dataTeacher, this.update_Teacher).subscribe(it => {
    });
  }

}

