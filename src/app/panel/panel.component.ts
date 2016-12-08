import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.title = this.title.length > 7
      ? `${this.title.substr(0, 7)}...`
      : this.title;
  }

}
