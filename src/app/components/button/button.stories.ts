import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    block: true,
    color: 'primary',
    isDisabled: false,
    label: 'Primary',
    loading: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: 'secondary',
    label: 'Secondary',
  },
};
