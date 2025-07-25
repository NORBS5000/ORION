# Loan Services Mobile App

A comprehensive React Native mobile application for loan services, built with Expo. This app provides a complete loan application system for both formal and informal sector users.

## Features

### 🏠 Home Screen
- Welcome interface with loan services branding
- Two main action buttons: "Request Loan" and "Pay Loan"
- Feature highlights with checkmarks
- Clean, modern design with gradient buttons

### 📋 Loan Application Process
- **Sector Selection Modal**: Choose between Formal or Informal sector
- **Progress Tracking**: Visual progress bar showing application steps
- **Form Validation**: Required field validation with visual indicators

### 🏢 Formal Sector Features
- Bank statement upload (6 months)
- Salary payslip upload (6 months)
- Document verification system
- Professional styling with business icons

### 🏪 Informal Sector Features
- Asset photo upload (3-10 images)
- Home floor photo upload
- Asset value verification
- Small business information capture

### 📱 Common Features
- **Permissions Management**: Toggle for message/call log access
- **Loan Details**: Amount and repayment date input
- **Business Information**: Conditional retail business fields
- **Guarantor System**: Two guarantor information capture
- **Document Upload**: Proof of illness and other documents
- **Status Tracking**: Loan application status screen
- **Support System**: Contact support functionality

## Technical Stack

- **Framework**: React Native with Expo
- **Icons**: Expo Vector Icons (Ionicons)
- **UI Components**: Custom styled components
- **Navigation**: Screen-based state management
- **Progress**: React Native Progress bars
- **Modals**: React Native Modal
- **Storage**: AsyncStorage for data persistence

## Installation

1. Clone the repository
2. Navigate to the LoanServicesApp directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npx expo start
   ```

## Project Structure

```
LoanServicesApp/
├── App.js                 # Main application component
├── package.json          # Dependencies and scripts
├── app.json             # Expo configuration
└── assets/              # Images and icons
```

## Key Components

### Screens
- **HomeScreen**: Landing page with main navigation
- **InformalFormScreen**: Informal sector loan application
- **FormalFormScreen**: Formal sector loan application  
- **PendingScreen**: Application status display

### Reusable Components
- **Header**: Navigation header with back button
- **InputField**: Styled text input with icons
- **UploadButton**: File upload interface
- **ProgressBar**: Step progress indicator

## Design Features

### Color Palette
- Primary: #6366F1 (Indigo)
- Secondary: #EC4899 (Pink)
- Success: #10B981 (Green)
- Warning: #F59E0B (Amber)
- Background: #F8FAFC (Light Gray)

### UI/UX Elements
- Rounded corners and soft shadows
- Gradient buttons with hover effects
- Card-based layouts for sections
- Consistent spacing and typography
- Responsive design for various screen sizes

## Permissions

The app requests the following permissions:
- **Photo Library**: For uploading asset and document images
- **Camera**: For taking photos of assets and documents
- **Messages/Call Logs**: For verification purposes (optional)

## Future Enhancements

- Real-time loan status updates
- Push notifications for application updates
- Integration with payment gateways
- Biometric authentication
- Multi-language support
- Offline mode capabilities

## Development

To run in development mode:
```bash
npx expo start
```

To build for production:
```bash
npx expo build:android
npx expo build:ios
```

## Support

For technical support or feature requests, use the in-app "Contact Support" feature or reach out to the development team.