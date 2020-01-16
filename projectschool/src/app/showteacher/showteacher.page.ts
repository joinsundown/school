import { Component, OnInit } from '@angular/core';
import { userTeacher } from 'src/models/userTeacher';
import { Router, ActivatedRoute } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { course } from '../../models/course';
import { opencourse } from '../../models/opencourse';


@Component({
  selector: 'app-showteacher',
  templateUrl: './showteacher.page.html',
  styleUrls: ['./showteacher.page.scss'],
})
export class ShowteacherPage implements OnInit {

  idDatateacher: any;
  showDatateacher: userTeacher;
  getdatateacher: FormGroup;
  showCourse: course;
  courseDataTeacher: FormGroup;
  addcourseTeacher: course;
  courseData: FormGroup;
  course: any;
  addcourse: opencourse;
  dataCourse:course[] = [];
  dataCourse2:course[] = [];
  opencourseData: FormGroup;
  addopencourseData: opencourse;
  asd;
  showteachercourse :any;

  datax = {
    "idCourse":null,
    "nameCourse":null,
    "student":null,
    "teacher":null
  };


  constructor(public callapi: CallapiService, public activate: ActivatedRoute, public router: Router, public formbuilder: FormBuilder) {
    this.idDatateacher = this.activate.snapshot.paramMap.get('_data');
    console.log(this.idDatateacher);
    this.datax = {
      "idCourse":'',
      "nameCourse":'',
      "student":null,
      "teacher":null
    };

    this.getdatateacher = this.formbuilder.group({
      'idTeacher': [null, Validators.required],
      'nameTeacher': [null, Validators.required],
      'statusTeacher': [null, Validators.required],
      'emailTeacher': [null, Validators.required]
    });

    this.courseData = this.formbuilder.group({
      'id_Course': [null, Validators.required],
      'name_Course': [null, Validators.required]

    });

  }

  ngOnInit() {
    this.getTeacherById();
    console.log(this.getdatateacher);
    this.getCourse();
    this.allshowcourse();
  }

  getTeacherById() {
    this.callapi.getById_Teaccher(this.idDatateacher).subscribe(it => {
      console.log(it);
      this.showDatateacher = it;
      console.log(this.showDatateacher.idTeacher);


    });

  }
  getCourse() {
    this.callapi.getAllData_Course().subscribe(it => {
      console.log(it);
      this.showCourse = it;
      console.log(this.showCourse);
      
      for (let index = 0; index < Object.keys(this.showCourse).length; index++) {
          this.dataCourse[index] = this.showCourse[index];        
      }
    });
    console.log(this.dataCourse);
   
    
    
  }
  AddCourseTeacher() {

    console.log(this.showCourse);
    console.log(this.courseData.value.id_Course);
    
    var filter = this.dataCourse.find(it => it.idCourse == this.courseData.value.id_Course);
    console.log(filter);
    this.datax.idCourse = filter.idCourse;
    this.datax.nameCourse = filter.nameCourse;
    console.log(this.datax);
    this.callapi.add_OpenCourse(this.datax).subscribe(it =>{
      console.log(it);
    });

    // console.log(this.courseData.value.id_Course);
    // this.course = this.courseData.value.id_Course
    // // console.log(this.course);
    // this.callapi.getById_Course(this.course).subscribe(it => {
    //   console.log(it);
    //   this.asd = it;
    //  this.addopenCourse(this.asd);

    // });

  }
  chang(s) {
    console.log(s);

  }

  addopenCourse(data){
    this.callapi.add_OpenCourse(data).subscribe(data => {
      console.log(data);    })
  }

  allshowcourse(){
    this.callapi.getAllData_OpenCourse().subscribe(it => {
      console.log(it);
      this.showteachercourse = it;
      
    })
    
  }
}


