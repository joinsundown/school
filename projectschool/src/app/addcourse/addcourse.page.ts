import { Component, OnInit } from '@angular/core';
import {CallapiService} from '../callapi.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { course } from 'src/models/course';
import { userTeacher } from 'src/models/userTeacher';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.page.html',
  styleUrls: ['./addcourse.page.scss'],
})
export class AddcoursePage implements OnInit {

  courseData : FormGroup;
  addcourseData : userTeacher;

  constructor(public callapi:CallapiService,public formbuilder: FormBuilder) {
    this.courseData = this.formbuilder.group({
      'idCourse':[null,Validators.required],
      'nameCourse':[null,Validators.required]
    });
   }

  ngOnInit() {
  }

  AddCourse(){
    this.addcourseData = (this.courseData.value);
    console.log(this.addcourseData); 
    this.callapi.teacheraddCourse(this.addcourseData).subscribe(it =>{
      console.log(it);
      
    });
  }

  

}
