import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { userStudent } from 'src/models/userStudent';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { userTeacher } from 'src/models/userTeacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataUser: FormGroup;
  user: any;
  pass: any;
  DataS: userStudent;
  DataT: userTeacher;
  status: any;


  constructor(public callapi: CallapiService, public formbuilder: FormBuilder, public route: Router) {
    this.dataUser = this.formbuilder.group({

      'user': [null, Validators.required],
      'pass': [null, Validators.required]

    });

  }

  ngOnInit() {

    this.callapi.getAllData_Student().subscribe((it) => {
      this.DataS = it;
      console.log(this.DataS);



    })

    this.callapi.getAllData_Teaccher().subscribe((Data) => {
      this.DataT = Data;
      console.log(this.DataT);


    })



  }

  checklogin() {
    for (let og = 0; og < Object.keys(this.DataS).length && Object.keys(this.DataS).length; og++) {
      
      if (this.DataS[og].usernameStudent == this.dataUser.value.user && this.dataUser.value.pass == this.DataS[og].passwordStudent) {
        console.log(this.DataS[og].statusStudent);


        this.route.navigate(['/home']);

        console.log(this.dataUser.value);

      }       
       else if (this.DataT[og].usernameTeacher == this.dataUser.value.user && this.dataUser.value.pass == this.DataT[og].passwordTeacher) {
        console.log(this.DataT[og].statusTeacher);



        this.route.navigate(['/showteacher']);

        console.log(this.dataUser.value);

      } 
    }

  }


}
