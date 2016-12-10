import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  photos: PhotoComponent[] = [];

  constructor(service: PhotoService) {

    service.list().subscribe(photos => {
      this.photos = photos;
    });

  }

}
