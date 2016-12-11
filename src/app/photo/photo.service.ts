import { Injectable } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';

@Injectable()
export class PhotoService {

  af: AngularFire;
  url: string = '/photos';

  constructor(af: AngularFire) { 
    this.af = af;
  }

  list(): Observable<PhotoComponent[]> {
    return this.af.database.list(this.url);
  }

  save(photo: PhotoComponent): firebase.Promise<void> {
    return this.af.database.object(this.url + '/' + photo.id).set(photo);
  }

  delete(photo: PhotoComponent): firebase.Promise<void>{
    return this.af.database.object(this.url + '/' + photo.id).remove();
  }

  findById(id: string): Observable<PhotoComponent>{
    return this.af.database.object(this.url + '/' +id);
  }

}
