import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  photo: PhotoComponent = new PhotoComponent();
  af:AngularFire;

  constructor(af: AngularFire) { 
    this.af = af;
    
  }

  ngOnInit() {
  }

  save(event) {
    event.preventDefault();
    this.af.database.object("/photos/"+this.photo.id).set(this.photo);
    console.log(this.photo);
  }

}
