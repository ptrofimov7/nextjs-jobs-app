// import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const config = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // docs: {
  //   autodocs: 'tag',
  // },
  // framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(
          __dirname,
          '../tsconfig.json'
        ),
      })
    );
    return config;
  },
};
export default config;
