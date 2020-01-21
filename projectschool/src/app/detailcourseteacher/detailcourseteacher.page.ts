import { Component, OnInit } from '@angular/core';
import { userTeacher } from 'src/models/userTeacher';
import { CallapiService } from '../callapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { course } from 'src/models/course';

@Component({
  selector: 'app-detailcourseteacher',
  templateUrl: './detailcourseteacher.page.html',
  styleUrls: ['./detailcourseteacher.page.scss'],
})
export class DetailcourseteacherPage implements OnInit {

  getAll : userTeacher;
  idt:any;
  datat:any;
  showDatateacher : any;


  constructor(public callapi :CallapiService,public router:Router,public activate:ActivatedRoute) { 

    this.idt = this.activate.snapshot.paramMap.get('idt');
    console.log(this.idt);
    this.getAlldatacourseTeacher();
    
   
    
  }


  ngOnInit() {

   
  }
  getAlldatacourseTeacher(){
    this.callapi.getById_Teacher(this.idt).subscribe(it =>{
      this.getAll = it;
      console.log(this.getAll.course);

      this.datat = this.getAll.course;

      
      
    });

  }

  
 
}

