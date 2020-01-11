import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { Router } from '@angular/router';
import { course } from 'src/models/course';


@Component({
  selector: 'app-showcourse',
  templateUrl: './showcourse.page.html',
  styleUrls: ['./showcourse.page.scss'],
})
export class ShowcoursePage implements OnInit {

  getdataAllcourse: course;

  constructor(public callapi: CallapiService, public router: Router) { }

  ngOnInit() {
    this.getAllData();
  }
  ionViewDidEnter() {
    this.getAllData();
  }

  getAllData() {
    this.callapi.getAllData_Course().subscribe(data => {
      this.getdataAllcourse = data;
      console.log(this.getdataAllcourse);

    });
  }

  delete_Course(id) {
    this.callapi.delete_Course(id).subscribe(data => {
      this.getAllData();
    });

  }
  edit_Course(data) {
    console.log(data);
    this.router.navigate(['/updatecourse', { _data: data }]);
  }


}
