module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Reanimated plugin (if you're using react-native-reanimated)
      'react-native-reanimated/plugin',
      // Enable path aliases
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@/components': './src/components',
            '@/screens': './src/screens',
            '@/utils': './src/utils',
            '@/types': './src/types',
          },
        },
      ],
    ],
  };
};