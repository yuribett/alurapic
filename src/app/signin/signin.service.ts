import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class SigninService {

  constructor(public af: AngularFire,  private router: Router) {
    if(!this.isAuthValid()){
      this.router.navigate(['/']);
    }
  }

  isAuthValid() {
    this.af.auth.subscribe(auth => {
      if(auth){ 
        console.log('logado')
        return true; 
      }
      else {
        console.log('nao logado')
        return false;
      }
    });
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

}
