// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Find the project directory
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// Add support for native modules and assets
config.resolver.assetExts = [...config.resolver.assetExts, 'db', 'sqlite'];
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

// Add support for symlinks
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs'];
config.resolver.extraNodeModules = {
  '@': path.resolve(__dirname, 'src'),
};

module.exports = config;