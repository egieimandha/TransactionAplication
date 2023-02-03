module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.tsx', '.ts'],
        alias: {
          '@root': '.',
          '@src': './src',
          '@modules': './src/modules',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
