import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userTeacher } from '../models/userTeacher';
import { userStudent } from '../models/userStudent';
import { course } from '../models/course';
import { from } from 'rxjs';
import { opencourse } from '../models/opencourse';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://localhost:5001/api/";

  idstudnet:any;
  idteaher:any;
  idcourse:any;



  constructor(public http: HttpClient) { }

  // -------------------------------------------Teacher--------------------------------------------------

  public getAllData_Teacher() {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/GetAllDataTeacher');
  }

  public getById_Teacher(id:string) {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/GetById_Teacher/' + id);
  }

  public add_Teacher(data) {
    return this.http.post<userTeacher>(CallapiService.host + 'Teacher/AddUser_Teacher', data);
  }

  public edit_Teacher(id: string, data) {
    return this.http.put<userTeacher>(CallapiService.host + 'Teacher/Edit_Teacher/' + id, data);
  }

  public delete_Teacher(id: string) {
    return this.http.delete<userTeacher>(CallapiService.host + 'Teacher/Delete_Teacher/' + id);
  }

  public AddCourseToTeacher(id: string, data) {
    return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddCourseToTeacher/' + id, data);
  }
  public AddStudentToCourse(id: string,id2: string, data) {
    return this.http.put<userTeacher>(CallapiService.host + 'Teacher/AddStudentToCourse/'+ id+ '/' +id2 +'/',data);
  }
  


  // -----------------------------------------Student-----------------------------------------------------------------


  public getAllData_Student() {
    return this.http.get<userStudent>(CallapiService.host + 'Student/GetAllData_Student');
  }

  public getById_Student(id: string) {
    return this.http.get<userStudent>(CallapiService.host + 'Student/GetById_Student/' + id);
  }

  public add_Student(data) {
    return this.http.post<userStudent>(CallapiService.host + 'Student/AddUser_Student', data);
  }

  public edit_Student(id: string, data) {
    return this.http.put<userStudent>(CallapiService.host + 'Student/Edit_Student/' + id, data);
  }

  public delete_Student(id: string) {
    return this.http.delete<userStudent>(CallapiService.host + 'Student/Delete_Student/' + id);
  }

  // ------------------------------------------Course-----------------------------------------------------


public getAllData_Course() {
  return this.http.get<course>(CallapiService.host + 'Course/GetAll_DataCourse');
}

public getById_Course(id: string) {
  return this.http.get<course>(CallapiService.host + 'Course/GetById_Course/' + id);
}

public add_Course(data) {
  return this.http.post<course>(CallapiService.host + 'Course/Add_Course', data);
}

public edit_Course(id: string, data) {
  return this.http.put<course>(CallapiService.host + 'Course/Edit_Course/' + id, data);
}

public delete_Course(id: string) {
  return this.http.delete<course>(CallapiService.host + 'Course/Delete_Course/' + id);
}


public courseInStudent(id: string ,data){
  return this.http.put<course>(CallapiService.host + 'Course/CourseInStudent/' + id, data);
}



//----------------------------------------------opencourse-----------------------------------------------------

public getAllData_OpenCourse() {
  return this.http.get<opencourse>(CallapiService.host + 'Opencourse/GetAll_DataOpencourse');
}

public getById_OpenCourse(id: string) {
  return this.http.get<opencourse>(CallapiService.host + 'Opencourse/GetById_Opencourse/' + id);
}

public add_OpenCourse(data) {
  return this.http.post<course>(CallapiService.host + 'Opencourse/AddOpencourse', data);
}

public edit_OpenCourse(id: string, data) {
  return this.http.put<opencourse>(CallapiService.host + 'Opencourse/Edit_Opencourse/' + id, data);
}

public delete_OpenCourse(id: string) {
  return this.http.delete<opencourse>(CallapiService.host + 'Opencourse/Delete_Opencourse/' + id);
}

}