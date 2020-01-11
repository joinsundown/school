import { Component, OnInit } from '@angular/core';
import {CallapiService} from '../callapi.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { course } from 'src/models/course';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.page.html',
  styleUrls: ['./addcourse.page.scss'],
})
export class AddcoursePage implements OnInit {

  courseData : FormGroup;
  addcourseData : course;

  constructor(public callapi:CallapiService,public formbuilder: FormBuilder) {
    this.courseData = this.formbuilder.group({
      'id_Course':[null,Validators.required],
      'name_Course':[null,Validators.required]
    });
   }

  ngOnInit() {
  }

  AddCourse(){
    console.log( this.courseData.value); 
    this.addcourseData = (this.courseData.value);
    console.log(this.addcourseData); 
    this.callapi.add_Course(this.addcourseData).subscribe(it =>{
      console.log(it);
      
    });
  }

}