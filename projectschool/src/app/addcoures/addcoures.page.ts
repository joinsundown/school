import { Component, OnInit } from '@angular/core';
import {CallapiService} from '../callapi.service';
import {FormBuilder,FormGroup,Validators, Form} from '@angular/forms';
import { coures } from 'src/models/coures';

@Component({
  selector: 'app-addcoures',
  templateUrl: './addcoures.page.html',
  styleUrls: ['./addcoures.page.scss'],
})
export class AddcouresPage implements OnInit {

  couresData : FormGroup;
  addcouresData : coures;

  constructor(public callapi:CallapiService,public formbuilder: FormBuilder) {
    this.couresData = this.formbuilder.group({
      'id_Coures':[null,Validators.required],
      'name_Coures':[null,Validators.required]
    });
   }

  ngOnInit() {
  }

  AddCoures(){
    console.log( this.couresData.value);
    
    this.addcouresData = (this.couresData.value);
    this.callapi.add_Coures(this.addcouresData).subscribe(it =>{
      console.log(it);
      
    });
  }

}
