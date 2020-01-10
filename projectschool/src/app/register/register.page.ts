import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  statusop: any;
  constructor(public router: Router) { }
  ngOnInit() {
    this.statusop ;

  }
a:string;
  gotostatus() {
    console.log(this.statusop);
  }


}
