import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  photos: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.photos = af.database.list('/photos');
    
  }

}
