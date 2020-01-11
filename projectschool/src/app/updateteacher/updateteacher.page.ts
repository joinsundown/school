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
    this.id_dataTeacher = this.activate.snapshot.paramMap.get('_data');
    console.log(this.id_dataTeacher);
    this.all_DataTeacher = this.formbuilder.group({
      'username_Teacher': [null, Validators.required],
      'password_Teacher': [null, Validators.required],
      'id_Teacher': [null, Validators.required],
      'firstName_Teacher': [null, Validators.required],
      'laseName_Teacher': [null, Validators.required],
      'email_Teacher': [null, Validators.required]

    });
  }

  ngOnInit() {
<<<<<<< HEAD
    this.getById_Teaccher();
=======
    this.getById_Teacher();

>>>>>>> 9359bf52864c212998c782e5ad154811ddca7df1
  }

  getById_Teaccher() {
    this.callapi.getById_Teaccher(this.id_dataTeacher).subscribe(it => {
      console.log(it);
      this.all_DataTeacher.patchValue(it)
      console.log(this.all_DataTeacher.value);
<<<<<<< HEAD
    });
  }

  edit_Teaccher() {
    this.update_Teacher = this.all_DataTeacher.value;
    console.log(this.update_Teacher);
    this.callapi.edit_Teaccher(this.id_dataTeacher, this.update_Teacher).subscribe(it => {
    });
  }
=======


    });
  }

  editData_Teacher() {
    this.update_Teacher = this.all_DataTeacher.value;
    console.log(this.update_Teacher);
    
    this.id_dataTeacher.edit_Teaccher(this.id_dataTeacher, this.all_DataTeacher).subscribe(id => {

      console.log(id);
>>>>>>> 9359bf52864c212998c782e5ad154811ddca7df1

    });

    this.router.navigate(['/home']);
  }
}