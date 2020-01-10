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
  updateStudent: userStudent;
  all_DataStudent: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {

    this.id_dataStudent = this.activate.snapshot.paramMap.get('_id');

    this.all_DataStudent = this.formbuilder.group({
      'userName_Student': [null, Validators.required],
      'passWord_Student': [null, Validators.required],
      'id_Student': [null, Validators.required],
      'firsName_Student': [null, Validators.required],
      'laseName_Student': [null, Validators.required],
      'email_Student': [null, Validators.required]

    });


  }

  ngOnInit() {
  }

}
