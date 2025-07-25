import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Switch,
} from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import UploadButton from '../components/UploadButton';
import ProgressBar from '../components/ProgressBar';
import { colors } from '../utils/colors';

const FormalFormScreen = ({ formData, setFormData, setCurrentScreen }) => {
  return (
    <View style={styles.container}>
      <Header 
        title="Formal Sector Loan Request" 
        showBack={true}
        onBack={() => setCurrentScreen('home')}
      />
      <ProgressBar currentStep={2} totalSteps={4} />
      
      <ScrollView contentContainerStyle={styles.formContent}>
        {/* Document Upload Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Required Documents</Text>
          
          <UploadButton 
            title="Upload 6 Months Bank Statements" 
            onPress={() => Alert.alert('Upload', 'Bank statements upload')}
          />
          
          <UploadButton 
            title="Upload 6 Months Salary Payslips" 
            onPress={() => Alert.alert('Upload', 'Payslips upload')}
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
            <Text style={{ fontSize: 16, color: colors.text, flex: 1 }}>
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
            <View style={{ gap: 16, marginTop: 16 }}>
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
                onPress={() => Alert.alert('Upload', 'Shop photo upload')}
              />
            </View>
          )}
        </View>

        {/* Guarantors Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Guarantors</Text>
          
          {/* Guarantor 1 */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: colors.text, marginBottom: 16 }}>
              Guarantor 1
            </Text>
            <View style={{ gap: 16 }}>
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
          <View>
            <Text style={{ fontSize: 18, fontWeight: '600', color: colors.text, marginBottom: 16 }}>
              Guarantor 2
            </Text>
            <View style={{ gap: 16 }}>
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
          onPress={() => setCurrentScreen('pending')}
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
    marginBottom: 16,
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

export default FormalFormScreen;