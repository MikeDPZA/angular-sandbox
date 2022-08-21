import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {DonutComponent} from "./donut.component";
import {DonutDataModel, DonutModel} from "../../models/donutModel";
import {NgxEchartsModule} from "ngx-echarts";
import * as echarts from "echarts";
import {CommonModule} from "../../common.module";

export default {
  title: 'Donut',
  component: DonutComponent,
  decorators: [

    moduleMetadata({
      imports: [NgxEchartsModule.forRoot({echarts})]
    })
  ]
} as Meta;

export const DefaultDonut: Story = (args) => ({
  props: args
});
DefaultDonut.args = {
  DonutData: new DonutModel({
    title: 'Donut Default Title',
    values: [
      new DonutDataModel({name: 'Key 1', value: 5}),
      new DonutDataModel({name: 'Value 1', value: 10}),
    ]
  })
}


