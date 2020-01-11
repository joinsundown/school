import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallapiService } from '../callapi.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { course } from 'src/models/course';

@Component({
  selector: 'app-updatecoures',
  templateUrl: './updatecoures.page.html',
  styleUrls: ['./updatecoures.page.scss'],
})
export class UpdatecouresPage implements OnInit {

id_dataCoures:any;
update_Coures: course;

all_DataCoires: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {

   this.id_dataCoures = this.activate.snapshot.paramMap.get('_id');

    this.all_DataCoires = this.formbuilder.group({
    
      'id_Coures': [null, Validators.required],
      'name_Coires': [null, Validators.required],
     
    });
   }

  
  ngOnInit() {
  }

}
