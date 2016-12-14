import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SigninService } from '../signin/signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  photo: PhotoComponent = new PhotoComponent();
  registerForm: FormGroup;
  service: PhotoService;
  route: ActivatedRoute;
  router: Router;
  message: string = '';
  id: string;

  constructor(fb: FormBuilder, service: PhotoService, private ss: SigninService,  route: ActivatedRoute, router: Router) {
    this.service = service;
    this.route = route;
    this.router = router;

    this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id) {
        this.service.findById(this.id)
            .subscribe(
                photo => {
                  this.photo = photo;
                  //TODO do it more smartly
                  delete this.photo['$key'];
                  delete this.photo['$exists'];
                },
                error => console.log(error));
      }
    });

    this.registerForm = fb.group({
      title: ['', Validators.compose(
        [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z0-9]*')]
      )],
      url: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
  }

  save(event) {
    event.preventDefault();
    this.service.save(this.photo)
      .then(() => {
        
        this.photo = new PhotoComponent();
        if(this.id) {
          this.router.navigate(['']);
        } else {
          this.message = 'Photo sucessfully inserted!';
        }
      })
      .catch(e => {
        this.message = 'Error registring photo';
        console.log('Error registring photo', e);
      });
  }

}
