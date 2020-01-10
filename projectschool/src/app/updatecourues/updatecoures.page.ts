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

all_DataCoures: FormGroup;

  constructor(public activate: ActivatedRoute, public callapi: CallapiService, public formbuilder: FormBuilder, public router: Router) {

   this.id_dataCoures = this.activate.snapshot.paramMap.get('_id');

    this.all_DataCoures = this.formbuilder.group({
    
      'id_Coures': [null, Validators.required],
      'name_Coires': [null, Validators.required],
     
    });
   }

  
  ngOnInit() {
  }
  getById_Coures() {
    this.callapi.getById_Course(this.id_dataCoures).subscribe(id => {
      this.all_DataCoures.patchValue(id)
      this.update_Coures = id;
      console.log(this.all_DataCoures.value);

    });
  }

  editData_Coures() {
    this.update_Coures = this.all_DataCoures.value;
    console.log(this.update_Coures);
    
    this.id_dataCoures.edit_Teaccher(this.id_dataCoures, this.all_DataCoures).subscribe(id => {

      console.log(id);

    });

    this.router.navigate(['/home']);
  }


}
