import { Component, OnInit, Input } from '@angular/core';

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
    this.id = new Date().getTime();
  }

  ngOnInit() {
  }

}
