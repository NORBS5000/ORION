import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import InformalFormScreen from './src/screens/InformalFormScreen';
import FormalFormScreen from './src/screens/FormalFormScreen';
import PendingScreen from './src/screens/PendingScreen';
import { colors } from './src/utils/colors';

const LoanServicesApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [showSectorModal, setShowSectorModal] = useState(false);
  const [selectedSector, setSelectedSector] = useState('');
  const [formData, setFormData] = useState({
    amount: '',
    repaymentDate: '',
    hasRetailBusiness: false,
    businessRegNumber: '',
    businessLocation: '',
    guarantor1: { name: '', id: '', contact: '' },
    guarantor2: { name: '', id: '', contact: '' },
    allowPermissions: false,
    uploadedAssets: [],
    uploadedDocuments: [],
  });

  // Main render function
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen
            showSectorModal={showSectorModal}
            setShowSectorModal={setShowSectorModal}
            setSelectedSector={setSelectedSector}
            setCurrentScreen={setCurrentScreen}
          />
        );
      case 'informalForm':
        return (
          <InformalFormScreen
            formData={formData}
            setFormData={setFormData}
            setCurrentScreen={setCurrentScreen}
          />
        );
      case 'formalForm':
        return (
          <FormalFormScreen
            formData={formData}
            setFormData={setFormData}
            setCurrentScreen={setCurrentScreen}
          />
        );
      case 'pending':
        return (
          <PendingScreen
            formData={formData}
            setCurrentScreen={setCurrentScreen}
          />
        );
      default:
        return (
          <HomeScreen
            showSectorModal={showSectorModal}
            setShowSectorModal={setShowSectorModal}
            setSelectedSector={setSelectedSector}
            setCurrentScreen={setCurrentScreen}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
      {renderScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
});

export default LoanServicesApp;