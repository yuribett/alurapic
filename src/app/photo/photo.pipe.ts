import { Pipe, PipeTransform } from '@angular/core';
import { PhotoComponent } from './photo.component';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitle implements PipeTransform {

  transform(photos: PhotoComponent[], typing: string): any {
    typing = typing.toLowerCase();
    return photos.filter(photo => photo.title.toLowerCase().includes(typing));

  }

}
