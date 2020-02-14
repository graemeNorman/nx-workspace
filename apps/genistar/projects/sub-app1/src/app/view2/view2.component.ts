import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
  itemOne: string;
  itemTwo: string;

  constructor() {
    const setItemThree = localStorage.setItem('jamieDOB', '23122017');
  }

  ngOnInit() {
    this.itemOne = localStorage.getItem('graemeDOB');
    this.itemTwo = localStorage.getItem('samDOB');
  }

}
