import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
