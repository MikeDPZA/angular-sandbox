import { Component } from '@angular/core';
import {DonutDataModel, DonutModel} from "./@common/models/donutModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sandbox';

  donutData = new DonutModel({
    title: 'Donut Default Title',
    values: [
      new DonutDataModel({name: 'Key 1', value: 5}),
      new DonutDataModel({name: 'Key 2', value: 10}),
    ]
  })
}
