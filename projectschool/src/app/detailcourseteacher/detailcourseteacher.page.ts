import { Component, OnInit } from '@angular/core';
import { userTeacher } from 'src/models/userTeacher';
import { CallapiService } from '../callapi.service';
import { Router } from '@angular/router';
import { course } from 'src/models/course';

@Component({
  selector: 'app-detailcourseteacher',
  templateUrl: './detailcourseteacher.page.html',
  styleUrls: ['./detailcourseteacher.page.scss'],
})
export class DetailcourseteacherPage implements OnInit {

  getAll : userTeacher;

  constructor(public callapi :CallapiService,public router:Router) { }

  ngOnInit() {
   
  }
  getAlldatacourseTeacher(id){
    this.callapi.getById_Teaccher(id).subscribe(it =>{
      this.getAll = it;
      console.log(this.getAll);
      
      
    })

  }

 


}
