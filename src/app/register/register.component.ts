import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  photo: PhotoComponent = new PhotoComponent();
  af: AngularFire;
  registerForm: FormGroup;

  constructor(af: AngularFire, fb: FormBuilder) {
    this.af = af;
    this.registerForm = fb.group({
      title: ['', Validators.compose(
          [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]
        )],
      url: ['', Validators.required],
      description: ['', ]
    });
  }

  ngOnInit() {
  }

  save(event) {
    event.preventDefault();
    this.af.database.object("/photos/" + this.photo.id).set(this.photo);
    console.log(this.photo);
  }

}
