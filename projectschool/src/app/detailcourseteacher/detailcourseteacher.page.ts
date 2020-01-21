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


  constructor(public callapi :CallapiService,public router:Router,public activate:ActivatedRoute) { 

    this.idt = this.activate.snapshot.paramMap.get('idt');
    console.log(this.idt);
    // this.getAlldatacourseTeacher();
    
   
    
  }


  ngOnInit() {

   
  }
  getTeacherById(id) {
    this.callapi.getById_Teacher(id).subscribe(it => {
      console.log(it);
      // this.showDatateacher = it;
      // for (let index = 0; index < Object.keys(this.showDatateacher.course).length; index++) {
      //   this.showcourseteacher[index] = this.showDatateacher.course[index];
      //   console.log(this.showcourseteacher[index]);
      //   this.a = this.showcourseteacher;
      //   console.log(this.a);
        
      // }
        this.router.navigate(['/detailcourseteacher',{_data:id}]);

    });

  }
}