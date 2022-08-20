import {CardComponent} from "./card.component";
import {Meta, Story} from "@storybook/angular";

export default {
  title: 'Card',
  component: CardComponent
} as Meta;

export const TitleOnly: Story = (args) => ({
  props: args
});

export const SomeContent: Story = (args) => ({
  props: args,
  template: `
    <app-card [CardTitle]="CardTitle">
        <ul>
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
        </ul>
    </app-card>
  `
});
SomeContent.args = {
  CardTitle: 'Default Title'
}
