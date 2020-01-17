import { Component, OnInit } from '@angular/core';
import { userTeacher } from 'src/models/userTeacher';
import { CallapiService } from '../callapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailcourseteacher',
  templateUrl: './detailcourseteacher.page.html',
  styleUrls: ['./detailcourseteacher.page.scss'],
})
export class DetailcourseteacherPage implements OnInit {

  
  showDatateacher: userTeacher;
  idDatateacher: any;
  showcourseteacher:string [] = [];
  a;
  

  constructor(public callapi :CallapiService,public router:Router) { }

  ngOnInit() {

   
  }
  getTeacherById(id) {
    this.callapi.getById_Teaccher(id).subscribe(it => {
      console.log(it);
      this.showDatateacher = it;
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
