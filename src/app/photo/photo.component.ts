import { Component, OnInit, Input } from '@angular/core';
import { DataUtils } from '../utils/data-utils';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  id: number;
  @Input() title;
  @Input() url;
  description: string;

  constructor() { 
    this.id = DataUtils.generateID();
  }

  ngOnInit() {
  }

}
