import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Design System/Components/Button',
  component: ButtonComponent,
  args: {
    variant: 'primary',
    size: 'medium',
    isDisabled: false,
    loading: false,
    label: 'Button',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'destructive'],
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

// Default
export const Default: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: { args },
    template: `
      <h4>Button default</h4>
      <div style="display: flex; gap: 1rem;">
        <app-button [label]="args.label" [variant]="'default'" [size]="'small'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [label]="args.label" [variant]="'default'" [size]="'medium'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [label]="args.label" [variant]="'default'" [size]="'large'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
      </div>
    `,
  }),
};

export const DefaultIcon: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: { args },
    template: `
    <h4>Button default icon</h4>
      <div style="display: flex; gap: 1rem;">
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'default'" [size]="'small'" [loading]="args.loading" [isDisabled]="args.isDisabled">
        </app-button>
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'default'" [size]="'medium'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'default'" [size]="'large'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
      </div>
    `,
  }),
};

// Primary
export const Primary: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: { args },
    template: `
      <h4>Button primary</h4>
      <div style="display: flex; gap: 1rem;">
        <app-button [label]="args.label" [variant]="'primary'" [size]="'small'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [label]="args.label" [variant]="'primary'" [size]="'medium'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [label]="args.label" [variant]="'primary'" [size]="'large'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
      </div>
    `,
  }),
};

export const PrimaryIcon: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: { args },
    template: `
      <h4>Button primary icon</h4>
      <div style="display: flex; gap: 1rem;">
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'primary'" [size]="'small'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'primary'" [size]="'medium'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'primary'" [size]="'large'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
      </div>
    `,
  }),
};

// Destructive
export const Destructive: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: { args },
    template: `
      <h4>Button destructive</h4>
      <div style="display: flex; gap: 1rem;">
        <app-button [label]="args.label" [variant]="'destructive'" [size]="'small'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [label]="args.label" [variant]="'destructive'" [size]="'medium'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [label]="args.label" [variant]="'destructive'" [size]="'large'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
      </div>
    `,
  }),
};

export const DestructiveIcon: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: { args },
    template: `
      <h4>Button destructive icon</h4>
      <div style="display: flex; gap: 1rem;">
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'destructive'" [size]="'small'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'destructive'" [size]="'medium'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
        <app-button [class]="'button-icon'" [label]="args.label" [variant]="'destructive'" [size]="'large'" [loading]="args.loading" [isDisabled]="args.isDisabled"></app-button>
      </div>
    `,
  }),
};
