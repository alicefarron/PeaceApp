module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'tipsi-flavors',
      {
        env: 'FLAVORS',
      },
    ],
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ios.js',
          '.android.js',
          '.json',
          '.tsx',
          '.ts',
        ],
        root: ['.'],
        alias: {
          icons: './assets/icons',
          images: './assets/images',
          app: './src/app',
          shared: './src/shared',
          entities: './src/entities',
          widgets: './src/widgets',
          pages: './src/pages',
          processes: './src/processes',
        },
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
