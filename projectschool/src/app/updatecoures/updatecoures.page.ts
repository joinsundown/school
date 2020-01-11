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

  id_dataCoures: any;
  update_Coures: course;
  all_DataCoires: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {
    this.id_dataCoures = this.activate.snapshot.paramMap.get('_data');
    console.log(this.id_dataCoures);
    this.all_DataCoires = this.formbuilder.group({
      'id_Coures': [null, Validators.required],
      'name_Coires': [null, Validators.required],

    });
  }


  ngOnInit() {
    this.getById_Course();
  }

  getById_Course() {
    this.callapi.getById_Course(this.id_dataCoures).subscribe(it => {
      console.log(it);
      this.all_DataCoires.patchValue(it)
      console.log(this.all_DataCoires.value);
    });
  }

  edit_Course() {
    this.update_Coures = this.all_DataCoires.value;
    console.log(this.update_Coures);
    this.callapi.edit_Teaccher(this.id_dataCoures, this.update_Coures).subscribe(it => {
    });
  }


}
