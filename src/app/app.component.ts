import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(public router: Router){

  }
}