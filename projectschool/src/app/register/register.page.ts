import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  statusop: any;
  teacherData: FormGroup;
  studentData: FormGroup;

  constructor(public callapi: CallapiService,public formbuilder: FormBuilder,public router: Router) { 
    this.teacherData = this.formbuilder.group({
      'usernameTeacher': [null, Validators.required],
      'passwordTeacher': [null, Validators.required],
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required],
    });

    this.studentData = this.formbuilder.group({
      'usernameStudent': [null, Validators.required],
      'passwordStudent': [null, Validators.required],
      'idStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'statusStudent': [null, Validators.required],
      'emailStudent': [null, Validators.required],
    });
  }
  
  ngOnInit() {
    this.statusop ;
  

  }
 
a:string;
  gotostatus() {
    console.log(this.statusop);
  }

  add_Student() {
    this.callapi.add_Student(this.studentData.value).subscribe(it => {
    });
    console.log(this.studentData.value);
    
    
    this.router.navigate(['/login']);

  }

  add_Teacher() {
    this.callapi.add_Teacher(this.teacherData.value).subscribe(it => {
    });
    this.router.navigate(['/login']);

  }

}
