import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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