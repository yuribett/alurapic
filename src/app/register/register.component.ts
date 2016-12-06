import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  photo: PhotoComponent = new PhotoComponent();

  constructor() { 

  }

  ngOnInit() {
  }

  save(event) {
    event.preventDefault();
    console.log(this.photo);
  }

}
