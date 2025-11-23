import type { Preview, AngularRenderer } from '@storybook/angular';

import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute<AngularRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'color-scheme',
    }),
  ],
};

export default preview;
