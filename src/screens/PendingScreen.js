import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { colors } from '../utils/colors';

const PendingScreen = ({ formData, setCurrentScreen }) => {
  return (
    <View style={styles.container}>
      <Header 
        title="Loan Status" 
        showBack={true}
        onBack={() => setCurrentScreen('home')}
      />
      
      <View style={styles.pendingContent}>
        <View style={styles.pendingIcon}>
          <Ionicons name="time" size={60} color={colors.warning} />
        </View>
        
        <Text style={styles.pendingTitle}>
          Your Loan Request is Being Processed
        </Text>
        
        <View style={styles.statusCard}>
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Submission Date:</Text>
            <Text style={styles.statusValue}>
              {new Date().toLocaleDateString()}
            </Text>
          </View>
          
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Requested Amount:</Text>
            <Text style={styles.statusValue}>
              ${formData.amount || '0'}
            </Text>
          </View>
          
          <View style={[styles.statusRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.statusLabel}>Status:</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Under Review</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.supportButton}
          onPress={() => Alert.alert('Support', 'Contact support feature')}
          activeOpacity={0.8}
        >
          <Ionicons name="help-circle" size={20} color="white" />
          <Text style={styles.supportButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pendingContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 24,
  },
  pendingIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: `${colors.warning}20`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  statusCard: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statusLabel: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  statusValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  statusBadge: {
    backgroundColor: `${colors.warning}20`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusBadgeText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.warning,
  },
  supportButton: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  supportButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});

export default PendingScreen;