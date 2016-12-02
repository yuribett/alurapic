import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.photos = af.database.list('/photos');
    
  }


}
