import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { userStudent } from 'src/models/userStudent';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

dataUser : FormGroup;
user : any;
pass : any;
Data : userStudent;


  constructor(public callapi: CallapiService,public formbuilder : FormBuilder,public route: Router ) { 
   this.dataUser = this.formbuilder.group({

    'user':[null,Validators.required],
    'pass':[null,Validators.required]

   });

  }

  ngOnInit() {
    this.callapi.getAllData_Student().subscribe((it)=>{
      this.Data = it;
      console.log(this.Data);
      console.log(this.dataUser.value);
    })

    
  }




  checklogin(){
    for (let og = 0; og <Object.keys(this.Data).length; og++){
      if (this.Data[og].username_Student == this.dataUser.value.user && this.dataUser.value.pass == this.Data[og].password_Student){
        this.route.navigate(['/home']);
     
        console.log(this.dataUser.value);
        
      }else{
        console.log("false");
        
      }
    }

  }
  

}
