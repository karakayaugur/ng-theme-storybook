import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';
import { themes } from 'storybook/theming';
import { componentWrapperDecorator } from '@storybook/angular';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  decorators: [componentWrapperDecorator((story) => `<div style="margin: 1em;">${story}</div>`)],
  args: {
    variant: 'default',
    size: 'medium',
    isDisabled: false,
    loading: false,
    label: 'Button',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'warning', 'danger', 'success'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    label: { control: 'text' },
    style: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Button: Story = {
  args: {
    variant: 'default',
    label: 'Button',
  },
};

export const onMobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};
