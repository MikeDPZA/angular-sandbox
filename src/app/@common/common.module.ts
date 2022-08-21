import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { DonutComponent } from './components/donut/donut.component';
import {NgxEchartsModule} from "ngx-echarts";
import * as echarts from 'echarts';



@NgModule({
  declarations: [
    CardComponent,
    DonutComponent
  ],
  imports: [
    NgxEchartsModule.forRoot({echarts})
  ],
  exports: [
    CardComponent,
    DonutComponent
  ]
})
export class CommonModule { }
