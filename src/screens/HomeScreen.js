import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { colors } from '../utils/colors';

const HomeScreen = ({ 
  showSectorModal, 
  setShowSectorModal, 
  setSelectedSector, 
  setCurrentScreen 
}) => {
  return (
    <View style={styles.container}>
      <Header title="Loan Services" showMenu={true} />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeIcon}>
            <Ionicons name="card" size={40} color={colors.primary} />
          </View>
          <Text style={styles.welcomeTitle}>Welcome to Loan Services</Text>
          <Text style={styles.welcomeSubtitle}>
            Quick and reliable financial solutions for your needs
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setShowSectorModal(true)}
            activeOpacity={0.8}
          >
            <Ionicons name="cash" size={24} color="white" />
            <Text style={styles.buttonText}>Request Loan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => Alert.alert('Pay Loan', 'Payment feature coming soon!')}
            activeOpacity={0.8}
          >
            <Ionicons name="card" size={24} color={colors.primary} />
            <Text style={styles.secondaryButtonText}>Pay Loan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          <View style={{ gap: 12 }}>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>Quick approval process</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>Flexible repayment options</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="checkmark-circle" size={20} color={colors.success} />
              <Text style={styles.featureText}>Competitive interest rates</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sector Selection Modal */}
      <Modal
        visible={showSectorModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSectorModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              style={{ position: 'absolute', top: 16, right: 16, zIndex: 1 }}
              onPress={() => setShowSectorModal(false)}
            >
              <Ionicons name="close" size={24} color={colors.textSecondary} />
            </TouchableOpacity>
            
            <Text style={styles.modalTitle}>Select Your Sector</Text>
            <Text style={styles.modalSubtitle}>
              Are you from the Formal or Informal Sector?
            </Text>

            <TouchableOpacity
              style={styles.sectorButton}
              onPress={() => {
                setSelectedSector('formal');
                setCurrentScreen('formalForm');
                setShowSectorModal(false);
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="briefcase" size={32} color={colors.primary} />
              <Text style={styles.sectorButtonText}>Formal</Text>
              <Text style={styles.sectorButtonSubtext}>
                Employed with regular salary
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sectorButton}
              onPress={() => {
                setSelectedSector('informal');
                setCurrentScreen('informalForm');
                setShowSectorModal(false);
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="storefront" size={32} color={colors.secondary} />
              <Text style={styles.sectorButtonText}>Informal</Text>
              <Text style={styles.sectorButtonSubtext}>
                Self-employed or small business
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  welcomeSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  welcomeIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: `${colors.primary}20`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    elevation: 4,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
  featuresSection: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  featureText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  sectorButton: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.border,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  sectorButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 8,
    marginBottom: 4,
  },
  sectorButtonSubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default HomeScreen;