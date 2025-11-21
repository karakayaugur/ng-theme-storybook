import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
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

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Warning Button',
  },
};
