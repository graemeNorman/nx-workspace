import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-root',
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Main Application';
  points = 1;
  itemOne: string;
  itemTwo: string;
  itemThree: string;

  constructor() {
    const setItem = localStorage.setItem('graemeDOB', '07041985');
  }

  plus1() {
    this.points++;
  }

  reset() {
    this.points = 0;
  }

  ngOnInit() {
    this.itemOne = localStorage.getItem('graemeDOB');
    this.itemTwo = localStorage.getItem('samDOB');
    this.itemThree = localStorage.getItem('jamieDOB');
  }
}
