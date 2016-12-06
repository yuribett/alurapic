import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  photos: PhotoComponent[] = [];

  constructor(af: AngularFire) {
    
    af.database.list('/photos').subscribe(photos => {
      this.photos = photos;
    });

  }

}
