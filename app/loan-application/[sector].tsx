import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import InformalFormScreen from '@/screens/InformalFormScreen';
import FormalFormScreen from '@/screens/FormalFormScreen';
import { FormData } from '@/types';

export default function LoanApplicationScreen() {
  const { sector } = useLocalSearchParams<{ sector: 'formal' | 'informal' }>();
  
  const [formData, setFormData] = useState<FormData>({
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

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    // Validate required fields
    const requiredFields = ['amount', 'repaymentDate'];
    const requiredGuarantorFields = ['name', 'id', 'contact'];
    
    // Check basic required fields
    for (const field of requiredFields) {
      if (!formData[field]) {
        Alert.alert('Missing Information', `Please enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return;
      }
    }
    
    // Check guarantor information
    for (const field of requiredGuarantorFields) {
      if (!formData.guarantor1[field]) {
        Alert.alert('Missing Information', `Please enter Guarantor 1 ${field}`);
        return;
      }
      
      if (!formData.guarantor2[field]) {
        Alert.alert('Missing Information', `Please enter Guarantor 2 ${field}`);
        return;
      }
    }
    
    // Check permissions
    if (!formData.allowPermissions) {
      Alert.alert('Permissions Required', 'Please allow access to messages and call logs for verification');
      return;
    }
    
    // Check business information if retail business is selected
    if (formData.hasRetailBusiness) {
      if (!formData.businessRegNumber) {
        Alert.alert('Missing Information', 'Please enter business registration number');
        return;
      }
      
      if (!formData.businessLocation) {
        Alert.alert('Missing Information', 'Please enter business location');
        return;
      }
    }
    
    // If all validations pass, proceed to loan status screen
    router.push('/loan-status');
  };

  return (
    <View style={styles.container}>
      {sector === 'informal' ? (
        <InformalFormScreen
          formData={formData}
          setFormData={setFormData}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      ) : (
        <FormalFormScreen
          formData={formData}
          setFormData={setFormData}
          onBack={handleBack}
          onSubmit={handleSubmit}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});