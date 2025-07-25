import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import Header from '@/components/Header';
import { colors } from '@/utils/colors';

export default function LoanDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  // In a real app, you would fetch loan details based on the ID
  // For now, we'll use mock data based on the ID
  const loanDetails = {
    id,
    amount: id === '1' ? '5000' : '2500',
    status: id === '1' ? 'approved' : 'pending',
    submittedAt: id === '1' ? '2025-01-15' : '2025-01-20',
    sector: id === '1' ? 'formal' : 'informal',
    nextPayment: id === '1' ? '2025-02-15' : '2025-02-20',
    interestRate: '12%',
    term: '12 months',
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return colors.success;
      case 'pending':
        return colors.warning;
      case 'rejected':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return 'checkmark-circle';
      case 'pending':
        return 'time';
      case 'rejected':
        return 'close-circle';
      default:
        return 'help-circle';
    }
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Loan Details" 
        showBack={true}
        onBack={() => router.back()}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.statusCard}>
          <View style={styles.statusHeader}>
            <Text style={styles.loanAmount}>${loanDetails.amount}</Text>
            <View style={[
              styles.statusBadge, 
              { backgroundColor: `${getStatusColor(loanDetails.status)}20` }
            ]}>
              <Ionicons 
                name={getStatusIcon(loanDetails.status)} 
                size={16} 
                color={getStatusColor(loanDetails.status)} 
              />
              <Text style={[
                styles.statusText, 
                { color: getStatusColor(loanDetails.status) }
              ]}>
                {loanDetails.status.charAt(0).toUpperCase() + loanDetails.status.slice(1)}
              </Text>
            </View>
          </View>
          
          <View style={styles.detailsSection}>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Application ID:</Text>
              <Text style={styles.detailValue}>{loanDetails.id}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Submitted:</Text>
              <Text style={styles.detailValue}>
                {new Date(loanDetails.submittedAt).toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Sector:</Text>
              <Text style={styles.detailValue}>
                {loanDetails.sector.charAt(0).toUpperCase() + loanDetails.sector.slice(1)}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Next Payment:</Text>
              <Text style={styles.detailValue}>
                {new Date(loanDetails.nextPayment).toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Interest Rate:</Text>
              <Text style={styles.detailValue}>{loanDetails.interestRate}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Term:</Text>
              <Text style={styles.detailValue}>{loanDetails.term}</Text>
            </View>
          </View>
        </View>

        <View style={styles.actionsCard}>
          <Text style={styles.sectionTitle}>Actions</Text>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => router.push('/payment')}
          >
            <Ionicons name="card" size={20} color={colors.primary} />
            <Text style={styles.actionButtonText}>Make Payment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => router.push('/')}
          >
            <Ionicons name="document-text" size={20} color={colors.primary} />
            <Text style={styles.actionButtonText}>View Statement</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.actionButton, styles.supportButton]}
            onPress={() => router.push('/')}
          >
            <Ionicons name="help-circle" size={20} color="white" />
            <Text style={styles.supportButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
    gap: 24,
  },
  statusCard: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  loanAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  detailsSection: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailLabel: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  actionsCard: {
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
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
  supportButton: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  supportButtonText: {
    color: 'white',
  },
});