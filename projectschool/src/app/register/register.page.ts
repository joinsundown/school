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
      'username_Teacher': [null, Validators.required],
      'password_Teacher': [null, Validators.required],
      'id_Teacher': [null, Validators.required],
      'firstName_Teacher': [null, Validators.required],
      'laseName_Teacher': [null, Validators.required],
      'email_Teacher': [null, Validators.required],
    });

    this.studentData = this.formbuilder.group({
      'username_Student': [null, Validators.required],
      'password_Student': [null, Validators.required],
      'id_Student': [null, Validators.required],
      'firstName_Student': [null, Validators.required],
      'laseName_Student': [null, Validators.required],
      'email_Student': [null, Validators.required],
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
    this.router.navigate(['/showstudent']);

  }

  add_Teacher() {
    this.callapi.add_Teaccher(this.teacherData.value).subscribe(it => {
    });
    this.router.navigate(['/showteacher']);

  }

}
