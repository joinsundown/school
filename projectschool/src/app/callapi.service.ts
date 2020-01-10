import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userTeacher } from '../models/userTeacher';
import { userStudent } from '../models/userStudent';
import { coures } from '../models/coures';
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

  public eidit_Teaccher(id: string, data) {
    return this.http.put<userTeacher>(CallapiService.host + 'Teacher/Teacher/Eidit_Teacher/' + id, data);
  }

  public delete_Teaccher(id: string) {
    return this.http.delete<userTeacher>(CallapiService.host + 'Teacher/Teacher/Delete_Teacher/' + id);
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

public eidit_Student(id: string, data) {
  return this.http.put<userStudent>(CallapiService.host + 'Student/Eidit_Student/' + id, data);
}

public delete_Student(id: string) {
  return this.http.delete<userStudent>(CallapiService.host + 'Student/Delete_Student/' + id);
}

// ------------------------------------------Coures-----------------------------------------------------


public getAllData_Coures() {
  return this.http.get<coures>(CallapiService.host + 'Coures/GetAll_DataCourse');
}

public getById_Coures(id: string) {
  return this.http.get<coures>(CallapiService.host + 'Coures/GetById_Course/' + id);
}

public add_Coures(data) {
  return this.http.post<coures>(CallapiService.host + 'Coures/Add_Course/', data);
}

public eidit_Coures(id: string, data) {
  return this.http.put<coures>(CallapiService.host + 'Coures/Eidit_Course/' + id, data);
}

public delete_Coures(id: string) {
  return this.http.delete<coures>(CallapiService.host + 'Coures/Delete_Course/' + id);
}

}