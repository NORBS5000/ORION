import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '@/components/Header';
import InputField from '@/components/InputField';
import { colors } from '@/utils/colors';

const mockActiveLoans = [
  {
    id: '1',
    amount: '5000',
    balance: '3200',
    nextPayment: '2025-02-15',
    monthlyPayment: '450',
  },
  {
    id: '2',
    amount: '2500',
    balance: '1800',
    nextPayment: '2025-02-20',
    monthlyPayment: '300',
  },
];

export default function PaymentScreen() {
  const [selectedLoan, setSelectedLoan] = useState<string | null>(null);
  const [paymentAmount, setPaymentAmount] = useState('');

  const handlePayment = () => {
    if (!selectedLoan || !paymentAmount) {
      Alert.alert('Error', 'Please select a loan and enter payment amount');
      return;
    }
    Alert.alert('Payment', 'Payment processing feature coming soon!');
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Make Payment" 
        showBack={true}
        onBack={() => router.back()}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Loans</Text>
          <Text style={styles.sectionSubtitle}>
            Select a loan to make a payment
          </Text>
          
          {mockActiveLoans.map((loan) => (
            <TouchableOpacity
              key={loan.id}
              style={[
                styles.loanCard,
                selectedLoan === loan.id && styles.selectedLoanCard
              ]}
              onPress={() => setSelectedLoan(loan.id)}
              activeOpacity={0.8}
            >
              <View style={styles.loanHeader}>
                <View style={styles.loanInfo}>
                  <Text style={styles.loanAmount}>Loan ${loan.amount}</Text>
                  <Text style={styles.loanBalance}>
                    Balance: ${loan.balance}
                  </Text>
                </View>
                <View style={styles.radioButton}>
                  {selectedLoan === loan.id && (
                    <View style={styles.radioButtonInner} />
                  )}
                </View>
              </View>
              
              <View style={styles.loanDetails}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Next Payment:</Text>
                  <Text style={styles.detailValue}>
                    {new Date(loan.nextPayment).toLocaleDateString()}
                  </Text>
                </View>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Monthly Payment:</Text>
                  <Text style={styles.detailValue}>${loan.monthlyPayment}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {selectedLoan && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Payment Amount</Text>
            
            <InputField
              label="Amount to Pay"
              value={paymentAmount}
              onChange={setPaymentAmount}
              placeholder="Enter amount"
              icon="cash"
              type="numeric"
              required
            />

            <View style={styles.quickAmounts}>
              <Text style={styles.quickAmountsLabel}>Quick amounts:</Text>
              <View style={styles.quickAmountButtons}>
                {['100', '250', '500'].map((amount) => (
                  <TouchableOpacity
                    key={amount}
                    style={styles.quickAmountButton}
                    onPress={() => setPaymentAmount(amount)}
                  >
                    <Text style={styles.quickAmountText}>${amount}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          
          <TouchableOpacity style={styles.paymentMethodCard}>
            <Ionicons name="card" size={24} color={colors.primary} />
            <View style={styles.paymentMethodInfo}>
              <Text style={styles.paymentMethodTitle}>Credit/Debit Card</Text>
              <Text style={styles.paymentMethodSubtitle}>
                Secure payment via card
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.paymentMethodCard}>
            <Ionicons name="phone-portrait" size={24} color={colors.success} />
            <View style={styles.paymentMethodInfo}>
              <Text style={styles.paymentMethodTitle}>Mobile Money</Text>
              <Text style={styles.paymentMethodSubtitle}>
                Pay via mobile wallet
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.payButton,
            (!selectedLoan || !paymentAmount) && styles.payButtonDisabled
          ]}
          onPress={handlePayment}
          disabled={!selectedLoan || !paymentAmount}
          activeOpacity={0.8}
        >
          <Ionicons name="card" size={20} color="white" />
          <Text style={styles.payButtonText}>Make Payment</Text>
        </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: -8,
  },
  loanCard: {
    backgroundColor: colors.background,
    borderWidth: 2,
    borderColor: colors.border,
    padding: 16,
    borderRadius: 12,
  },
  selectedLoanCard: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}05`,
  },
  loanHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  loanInfo: {
    flex: 1,
  },
  loanAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  loanBalance: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  loanDetails: {
    gap: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  quickAmounts: {
    gap: 8,
  },
  quickAmountsLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  quickAmountButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  quickAmountButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  quickAmountText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  paymentMethodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  paymentMethodInfo: {
    flex: 1,
    marginLeft: 12,
  },
  paymentMethodTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  paymentMethodSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  payButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  payButtonDisabled: {
    backgroundColor: colors.textSecondary,
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});