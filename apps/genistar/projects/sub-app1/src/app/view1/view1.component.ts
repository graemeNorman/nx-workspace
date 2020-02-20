import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
  itemOne: string;
  itemThree: string;

  constructor() {
    const setItemTwo = localStorage.setItem('samDOB', '09091985');

  }

  ngOnInit() {
    this.itemOne = localStorage.getItem('graemeDOB');
    this.itemThree = localStorage.getItem('jamieDOB');
  }

}
