import { Component } from '@angular/core';
import { sharedTitleString } from "@workspace/my-utils-lib";

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  testStr: string;

  constructor() {
    this.testStr = sharedTitleString;
  }
}
