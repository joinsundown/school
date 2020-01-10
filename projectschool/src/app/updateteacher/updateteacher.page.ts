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

    this.all_DataTeacher = this.formbuilder.group({
      'userName_Teacher': [null, Validators.required],
      'passWord_Teacher': [null, Validators.required],
      'id_Teacher': [null, Validators.required],
      'firsName_Teacher': [null, Validators.required],
      'laseName_Teacher': [null, Validators.required],
      'email_Teacher': [null, Validators.required]

    });
  }

  ngOnInit() {
    this.getById_Teacher();

  }

  getById_Teacher() {
    this.callapi.getById_Teaccher(this.id_dataTeacher).subscribe(id => {
      this.all_DataTeacher.patchValue(id)
      this.update_Teacher = id;
      console.log(this.all_DataTeacher.value);


    });
  }

  editData_Teacher() {
    this.update_Teacher = this.all_DataTeacher.value;
    console.log(this.update_Teacher);
    
    this.id_dataTeacher.edit_Teaccher(this.id_dataTeacher, this.all_DataTeacher).subscribe(id => {

      console.log(id);

    });

    this.router.navigate(['/home']);
  }
}