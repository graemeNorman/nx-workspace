import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  itemTwo: string;
  itemThree: string;

  constructor() { }

  ngOnInit() {
    this.itemTwo = localStorage.getItem('samDOB');
    this.itemThree = localStorage.getItem('jamieDOB');
  }

}
