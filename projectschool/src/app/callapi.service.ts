import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userTeacher } from '../models/userTeacher';
import { userStudent } from '../models/userStudent';
import { course } from '../models/course';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host: string = "https://localhost:5001/api/";

  constructor(public http: HttpClient) { }

  // -------------------------------------------Teacher--------------------------------------------------

  public getAllData_Teaccher() {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/GetAllData_Teacher');
  }

  public getById_Teaccher(id: string) {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/GetById_Teacher/' + id);
  }

  public add_Teaccher(data) {
    return this.http.post<userTeacher>(CallapiService.host + 'Teacher/AddUser_Teacher', data);
  }

  public edit_Teaccher(id: string, data) {
    return this.http.put<userTeacher>(CallapiService.host + 'Teacher/Edit_Teacher/' + id, data);
  }

  public delete_Teaccher(id: string) {
    return this.http.delete<userTeacher>(CallapiService.host + 'Teacher/Delete_Teacher/' + id);
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


}