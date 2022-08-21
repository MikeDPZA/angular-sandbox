import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DonutModel} from "../../models/donutModel";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit, OnChanges {

  @Input() DonutData: DonutModel = new DonutModel()

  options: EChartsOption = { }

  constructor() {
  }

  ngOnInit(): void {
    this.setOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes['DonutData']?.currentValue !== changes['DonutData']?.previousValue){
    //   this.setOptions();
    // }
  }

  private setOptions() {
    this.options.title = {
      text: this.DonutData.title
    }

    this.options.series = [
      {
        type: 'pie',
        data: this.DonutData.values.map(_ => {
          return {
            name: _.name,
            value: _.value
          }
        }),
      }
    ];
  }

}
