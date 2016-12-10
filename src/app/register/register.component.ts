import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  photo: PhotoComponent = new PhotoComponent();
  registerForm: FormGroup;
  service: PhotoService;

  constructor(fb: FormBuilder, service: PhotoService) {
    this.service = service;
    this.registerForm = fb.group({
      title: ['', Validators.compose(
        [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]
      )],
      url: ['', Validators.required],
      description: ['',]
    });
  }

  ngOnInit() {
  }

  save(event) {
    event.preventDefault();
    this.service.save(this.photo)
      .then(() => {
        console.log('Photo sucessfully inserted!');
      })
      .catch(e => {
        console.log('Error registring photo', e);
      });
  }

}
