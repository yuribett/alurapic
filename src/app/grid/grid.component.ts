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
  service: PhotoService;

  constructor(service: PhotoService) {
    this.service = service;
    this.list();
  }

  list(){
    this.service.list().subscribe(photos => {
      this.photos = photos;
    });
  }

  delete(photo: PhotoComponent): void {
    this.service.delete(photo);
  }

}
