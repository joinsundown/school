import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userStudent } from 'src/models/userStudent';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.page.html',
  styleUrls: ['./showstudent.page.scss'],
})
export class ShowstudentPage implements OnInit {

  idDatastudent: any;
  showDatastudent : userStudent;
  getdatastudent: FormGroup;
  
  constructor(public callapi: CallapiService, public activate: ActivatedRoute, public router: Router, public formbuilder: FormBuilder) {
    this.idDatastudent = this.activate.snapshot.paramMap.get('_data');
    console.log(this.idDatastudent);
    
    this.getdatastudent = this.formbuilder.group({
      'idStudent': [null, Validators.required],
      'nameStudent': [null, Validators.required],
      'statusStudent': [null, Validators.required],
      'emailStudent': [null, Validators.required]

    });

  }

  ngOnInit() {
    this.getStudentById();
    console.log(this.getdatastudent.value);
    
  }

  getStudentById() {
    this.callapi.getById_Student(this.idDatastudent).subscribe(it => {
      console.log(it);
      this.showDatastudent = it;
      console.log(this.showDatastudent.idStudent);
      
      
    });
    
  }

  }


