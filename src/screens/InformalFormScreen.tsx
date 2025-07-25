import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Switch,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Header from '@/components/Header';
import InputField from '@/components/InputField';
import UploadButton from '@/components/UploadButton';
import ProgressBar from '@/components/ProgressBar';
import { colors } from '@/utils/colors';
import { FormData } from '@/types';

const { width } = Dimensions.get('window');

interface InformalFormScreenProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onBack: () => void;
  onSubmit: () => void;
}

const InformalFormScreen: React.FC<InformalFormScreenProps> = ({ 
  formData, 
  setFormData, 
  onBack, 
  onSubmit 
}) => {
  const pickImage = async (type: 'asset' | 'home' | 'shop') => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      Alert.alert('Success', `${type} photo uploaded successfully!`);
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Informal Sector Loan Request" 
        showBack={true}
        onBack={onBack}
      />
      <ProgressBar currentStep={1} totalSteps={4} />
      
      <ScrollView contentContainerStyle={styles.formContent}>
        {/* Asset Upload Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upload Asset Photos</Text>
          <Text style={styles.sectionSubtitle}>
            Upload 3-10 pictures of your most valuable assets
          </Text>
          
          <View style={styles.uploadGrid}>
            {[1, 2, 3, 4].map((i) => (
              <TouchableOpacity 
                key={i} 
                style={styles.assetUploadBox}
                onPress={() => pickImage('asset')}
              >
                <Ionicons name="camera" size={24} color={colors.textSecondary} />
                <Text style={styles.uploadBoxText}>
                  Asset {i}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <UploadButton 
            title="Upload Home Floor Photo" 
            onPress={() => pickImage('home')}
          />
        </View>

        {/* Permissions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>
          <View style={styles.toggleContainer}>
            <View style={styles.toggleInfo}>
              <Text style={styles.toggleLabel}>
                Allow access to messages and call logs
              </Text>
              <Text style={styles.toggleSubtext}>
                Used for verification purposes only
              </Text>
            </View>
            <Switch
              value={formData.allowPermissions}
              onValueChange={(value) => 
                setFormData(prev => ({ ...prev, allowPermissions: value }))
              }
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={formData.allowPermissions ? 'white' : colors.textSecondary}
            />
          </View>
        </View>

        {/* Loan Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Loan Details</Text>
          
          <InputField
            label="Amount Requested"
            value={formData.amount}
            onChange={(value) => setFormData(prev => ({ ...prev, amount: value }))}
            placeholder="Enter amount"
            icon="cash"
            type="numeric"
            required
          />

          <InputField
            label="Repayment Date"
            value={formData.repaymentDate}
            onChange={(value) => setFormData(prev => ({ ...prev, repaymentDate: value }))}
            placeholder="Select date"
            icon="calendar"
            required
          />

          <UploadButton 
            title="Upload Proof of Illness" 
            onPress={() => Alert.alert('Upload', 'Proof of illness document')}
          />
        </View>

        {/* Business Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Business Information</Text>
          
          <View style={styles.toggleContainer}>
            <Text style={styles.businessToggleText}>
              Do you own a retail business?
            </Text>
            <Switch
              value={formData.hasRetailBusiness}
              onValueChange={(value) => 
                setFormData(prev => ({ ...prev, hasRetailBusiness: value }))
              }
              trackColor={{ false: colors.border, true: colors.primary }}
              thumbColor={formData.hasRetailBusiness ? 'white' : colors.textSecondary}
            />
          </View>

          {formData.hasRetailBusiness && (
            <View style={styles.businessFields}>
              <InputField
                label="Business Registration Number"
                value={formData.businessRegNumber}
                onChange={(value) => setFormData(prev => ({ ...prev, businessRegNumber: value }))}
                placeholder="Enter registration number"
                icon="business"
              />

              <InputField
                label="Business Location"
                value={formData.businessLocation}
                onChange={(value) => setFormData(prev => ({ ...prev, businessLocation: value }))}
                placeholder="Enter business address"
                icon="location"
              />

              <UploadButton 
                title="Upload Shop Picture" 
                onPress={() => pickImage('shop')}
              />
            </View>
          )}
        </View>

        {/* Guarantors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Guarantors</Text>
          
          {/* Guarantor 1 */}
          <View style={styles.guarantorSection}>
            <Text style={styles.guarantorTitle}>
              Guarantor 1
            </Text>
            <View style={styles.guarantorFields}>
              <InputField
                label="Full Name"
                value={formData.guarantor1.name}
                onChange={(value) => 
                  setFormData(prev => ({ 
                    ...prev, 
                    guarantor1: { ...prev.guarantor1, name: value }
                  }))
                }
                placeholder="Enter full name"
                icon="person"
                required
              />
              <InputField
                label="ID Number"
                value={formData.guarantor1.id}
                onChange={(value) => 
                  setFormData(prev => ({ 
                    ...prev, 
                    guarantor1: { ...prev.guarantor1, id: value }
                  }))
                }
                placeholder="Enter ID number"
                icon="card"
                required
              />
              <InputField
                label="Contact"
                value={formData.guarantor1.contact}
                onChange={(value) => 
                  setFormData(prev => ({ 
                    ...prev, 
                    guarantor1: { ...prev.guarantor1, contact: value }
                  }))
                }
                placeholder="Enter phone number"
                icon="call"
                type="phone-pad"
                required
              />
            </View>
          </View>

          {/* Guarantor 2 */}
          <View style={styles.guarantorSection}>
            <Text style={styles.guarantorTitle}>
              Guarantor 2
            </Text>
            <View style={styles.guarantorFields}>
              <InputField
                label="Full Name"
                value={formData.guarantor2.name}
                onChange={(value) => 
                  setFormData(prev => ({ 
                    ...prev, 
                    guarantor2: { ...prev.guarantor2, name: value }
                  }))
                }
                placeholder="Enter full name"
                icon="person"
                required
              />
              <InputField
                label="ID Number"
                value={formData.guarantor2.id}
                onChange={(value) => 
                  setFormData(prev => ({ 
                    ...prev, 
                    guarantor2: { ...prev.guarantor2, id: value }
                  }))
                }
                placeholder="Enter ID number"
                icon="card"
                required
              />
              <InputField
                label="Contact"
                value={formData.guarantor2.contact}
                onChange={(value) => 
                  setFormData(prev => ({ 
                    ...prev, 
                    guarantor2: { ...prev.guarantor2, contact: value }
                  }))
                }
                placeholder="Enter phone number"
                icon="call"
                type="phone-pad"
                required
              />
            </View>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={onSubmit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitButtonText}>Submit Loan Request</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  formContent: {
    padding: 20,
    gap: 24,
  },
  section: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    gap: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: -8,
  },
  uploadGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  assetUploadBox: {
    width: (width - 64) / 2,
    height: 100,
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  uploadBoxText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  toggleInfo: {
    flex: 1,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  toggleSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  businessToggleText: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
  },
  businessFields: {
    gap: 16,
    marginTop: 16,
  },
  guarantorSection: {
    marginBottom: 24,
  },
  guarantorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  guarantorFields: {
    gap: 16,
  },
  submitButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default InformalFormScreen;