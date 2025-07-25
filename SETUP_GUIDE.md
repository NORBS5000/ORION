# Expo App Setup Guide

This guide provides instructions for setting up and troubleshooting your Expo app on physical devices.

## Setup Commands

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies listed in package.json, including:
- Expo SDK 49
- React Navigation v6
- Other necessary packages

### 3. Start the Development Server

```bash
npx expo start
```

This will start the Expo development server and display a QR code that you can scan with the Expo Go app on your physical device.

### 4. Run on Specific Platforms

```bash
# For Android
npx expo start --android

# For iOS
npx expo start --ios
```

## Troubleshooting Commands

If you encounter issues with the app not loading on your physical device, try these commands:

### 1. Clear Cache and Restart

```bash
npx expo start -c
```

This clears the Expo development server cache before starting.

### 2. Clear Metro Bundler Cache

```bash
npx react-native start --reset-cache
```

### 3. Clear npm Cache

```bash
npm cache clean --force
```

### 4. Reinstall node_modules

```bash
rm -rf node_modules
npm install
```

### 5. Fix Metro Bundler Issues

If you encounter the error `Cannot find module 'metro/src/ModuleGraph/worker/importLocationsPlugin'`, try these steps:

```bash
# Run the clean script to reinstall dependencies
npm run clean

# If that doesn't work, try manually fixing Metro dependencies
npm install --save-dev @expo/metro-config@0.20.0
npm install --save-dev metro@0.76.0 metro-resolver@0.76.0

# Then clear cache and restart
npx expo start -c
```

### 6. Update Package Dependencies

If you see warnings about package version mismatches, update your dependencies to match the expected versions:

```bash
# Update core packages
npm install @expo/vector-icons@14.1.0 @react-native-async-storage/async-storage@2.1.2 expo-document-picker@13.1.6 expo-image-picker@16.1.4 expo-status-bar@2.2.3 react@19.0.0 react-native@0.79.5

# Update navigation packages
npm install react-native-gesture-handler@2.24.0 react-native-safe-area-context@5.4.0 react-native-screens@4.11.1

# Update dev dependencies
npm install --save-dev @expo/metro-config@0.20.0

# Clear cache and restart
npx expo start -c
```

### 6. Clear Watchman Cache (if using Watchman)

```bash
watchman watch-del-all
```

### 6. Reset Expo Go App

On your physical device, clear the cache of the Expo Go app or reinstall it.

## Troubleshooting Checklist

If your app still won't load on your physical device, check these common issues:

1. **Network Issues**
   - Ensure your development machine and phone are on the same Wi-Fi network
   - Try using a tunnel connection: `npx expo start --tunnel`
   - Check if your Wi-Fi has client isolation enabled (common in public Wi-Fi)
   - Try using a mobile hotspot from another device

2. **Firewall/Security Software**
   - Temporarily disable firewall or security software on your development machine
   - Check if your antivirus is blocking the connection

3. **Expo SDK Version Mismatch**
   - Ensure your app.json and package.json have matching Expo SDK versions
   - Make sure you're using the correct version of Expo Go app that supports SDK 49

4. **Device Compatibility**
   - Check if your device is compatible with the Expo SDK version
   - Ensure your device OS is updated to a compatible version

5. **Dependencies Issues**
   - Check for conflicting or outdated dependencies
   - Run `npm ls` to check for dependency issues

6. **Metro Bundler Issues**
   - Check Metro Bundler logs for errors
   - Try restarting Metro Bundler with `--reset-cache` flag

7. **App Configuration**
   - Verify app.json has correct configuration
   - Check that the main entry point in package.json is correct

8. **Device Storage**
   - Ensure your device has enough storage space
   - Clear cache on your device

9. **Hermes Engine**
   - Try toggling the Hermes engine setting in app.json

10. **Development Environment**
    - Restart your development machine
    - Try using a different development environment (e.g., different computer)

## Common Error Solutions

### Blank Screen
- Check console logs for errors
- Verify that App.js is exporting the component correctly
- Check for runtime errors in your code

### Connection Timeout
- Use `--tunnel` option with expo start
- Check your network connection
- Verify that your phone and computer are on the same network

### JavaScript Bundle Not Loading
- Clear cache with `npx expo start -c`
- Check for syntax errors in your code
- Verify that metro.config.js is configured correctly

### Native Module Issues
- Ensure all native modules are compatible with Expo SDK 49
- Check that you're not using modules that require custom native code without the proper setup

### Expo Go App Crashes
- Update Expo Go to the latest version
- Try using a development build instead of Expo Go
- Check if your app is using features not supported by Expo Go