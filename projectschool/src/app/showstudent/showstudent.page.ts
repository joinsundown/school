import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { userStudent } from 'src/models/userStudent';


@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.page.html',
  styleUrls: ['./showstudent.page.scss'],
})
export class ShowstudentPage implements OnInit {

  getdataAllstudent: userStudent;

  constructor(public callapi: CallapiService, public router: Router) {}

  ngOnInit() {
    this.getAllData();
  }
  ionViewDidEnter() {
    this.getAllData();
  }

  getAllData() {
    this.callapi.getAllData_Student().subscribe(data => {
      this.getdataAllstudent = data;
      console.log(this.getdataAllstudent.usernameStudent);
      console.log(this.getdataAllstudent.passwordStudent);

    });
  }
  delete_Student(id) {
    this.callapi.delete_Student(id).subscribe(data => {
      this.getAllData();
    });
  }
  edit_Student(data) {
    console.log(data);
    this.router.navigate(['/updatestudent', { _data: data }]);
  }
}
