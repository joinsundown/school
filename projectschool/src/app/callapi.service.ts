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

  public getAllData_Teaccher() {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/GetAllData_Teacher');
  }


  public getById_Teaccher(id: string) {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/GetById_Teacher/' + id);
  }

  public add_Teaccher(data) {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/AddUser_Teacher', data);
  }


  public eidit_Teaccher(id: string, data) {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/Teacher/Eidit_Teacher/' + id, data);
  }


  public delete_Teaccher(id: string) {
    return this.http.get<userTeacher>(CallapiService.host + 'Teacher/Teacher/Delete_Teacher/' + id);
  }




}