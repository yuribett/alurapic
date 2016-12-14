import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public af: AngularFire, private ss: SigninService, private router: Router) {

    if(ss.isAuthValid()){
      this.router.navigate(['/grid']);
    }
    
  }

  login() {
    this.ss.login();
  }

  logout() {
    this.ss.logout();
  }

  ngOnInit() {
  }

}
