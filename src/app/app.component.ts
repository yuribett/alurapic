import { Component } from '@angular/core';
import { SigninService } from './signin/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ss: SigninService) {}

  logout() {
    this.ss.logout();
  }
}
