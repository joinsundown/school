import { Component, OnInit } from '@angular/core';
import { userTeacher } from 'src/models/userTeacher';
import { Router } from '@angular/router';
import { CallapiService } from '../callapi.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  getdataAllteacher: userTeacher;

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
    this.getAllData();
  }
  ionViewDidEnter() {
    this.getAllData();
  }

  getAllData() {
    this.callapi.getAllData_Teaccher().subscribe(data => {
      this.getdataAllteacher = data;
      console.log(this.getdataAllteacher);

    });
  }

  delete_Teaccher(id) {
    this.callapi.delete_Teaccher(id).subscribe(data => {
      this.getAllData();
    });

  }
  edit_Teaccher(data) {
    console.log(data);
    this.router.navigate(['/updateteacher', { _data: data }]);
  }
}