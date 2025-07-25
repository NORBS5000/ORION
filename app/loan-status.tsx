import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '@/components/Header';
import { colors } from '@/utils/colors';

export default function LoanStatusScreen() {
  const [applicationId, setApplicationId] = useState('');
  const [submissionDate, setSubmissionDate] = useState('');
  
  useEffect(() => {
    // Generate a stable application ID and submission date on component mount
    setApplicationId(`LN${Math.random().toString().slice(2, 8)}`);
    setSubmissionDate(new Date().toLocaleDateString());
  }, []);
  return (
    <View style={styles.container}>
      <Header 
        title="Loan Status" 
        showBack={true}
        onBack={() => router.back()}
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
              {submissionDate}
            </Text>
          </View>
          
          <View style={styles.statusRow}>
            <Text style={styles.statusLabel}>Application ID:</Text>
            <Text style={styles.statusValue}>
              {applicationId}
            </Text>
          </View>
          
          <View style={[styles.statusRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.statusLabel}>Status:</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>Under Review</Text>
            </View>
          </View>
        </View>

        <View style={styles.timelineCard}>
          <Text style={styles.timelineTitle}>Application Timeline</Text>
          <View style={styles.timelineItem}>
            <View style={[styles.timelineDot, { backgroundColor: colors.success }]} />
            <Text style={styles.timelineText}>Application Submitted</Text>
            <Text style={styles.timelineTime}>Just now</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={[styles.timelineDot, { backgroundColor: colors.warning }]} />
            <Text style={styles.timelineText}>Document Verification</Text>
            <Text style={styles.timelineTime}>In progress</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={[styles.timelineDot, { backgroundColor: colors.border }]} />
            <Text style={[styles.timelineText, { color: colors.textSecondary }]}>Credit Assessment</Text>
            <Text style={styles.timelineTime}>Pending</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={[styles.timelineDot, { backgroundColor: colors.border }]} />
            <Text style={[styles.timelineText, { color: colors.textSecondary }]}>Final Approval</Text>
            <Text style={styles.timelineTime}>Pending</Text>
          </View>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.supportButton}
            onPress={() => Alert.alert('Support', 'Contact support feature')}
            activeOpacity={0.8}
          >
            <Ionicons name="help-circle" size={20} color="white" />
            <Text style={styles.supportButtonText}>Contact Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => router.push('/')}
            activeOpacity={0.8}
          >
            <Ionicons name="home" size={20} color={colors.primary} />
            <Text style={styles.homeButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pendingContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 24,
  },
  pendingIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: `${colors.warning}20`,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
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
  timelineCard: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  timelineText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
  timelineTime: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  actionButtons: {
    gap: 12,
  },
  supportButton: {
    backgroundColor: colors.accent,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  supportButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  homeButton: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
});