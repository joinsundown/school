import { Component, OnInit } from '@angular/core';
import { userTeacher } from 'src/models/userTeacher';
import { Router, ActivatedRoute } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-showteacher',
  templateUrl: './showteacher.page.html',
  styleUrls: ['./showteacher.page.scss'],
})
export class ShowteacherPage implements OnInit {

  idDatateacher: any;
  showDatateacher : userTeacher;
  getdatateacher: FormGroup;
  
  constructor(public callapi: CallapiService, public activate: ActivatedRoute, public router: Router, public formbuilder: FormBuilder) {
    this.idDatateacher = this.activate.snapshot.paramMap.get('_data');
    console.log(this.idDatateacher);
    
    this.getdatateacher = this.formbuilder.group({
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required]

    });

  }

  ngOnInit() {
    this.getTeacherById();
    console.log(this.getdatateacher);
    
  }

  getTeacherById() {
    this.callapi.getById_Teaccher(this.idDatateacher).subscribe(it => {
      console.log(it);
      this.showDatateacher = it;
      console.log(this.showDatateacher.idTeacher);
      
      
    });
    
  }

  }


