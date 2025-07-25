import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { colors } from '../utils/colors';

const { width } = Dimensions.get('window');

const ProgressBar = ({ currentStep, totalSteps }) => (
  <View style={styles.progressContainer}>
    <Progress.Bar
      progress={currentStep / totalSteps}
      width={width - 40}
      height={4}
      color={colors.primary}
      unfilledColor={colors.border}
      borderWidth={0}
      borderRadius={2}
    />
    <Text style={styles.progressText}>
      Step {currentStep} of {totalSteps}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  progressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  progressText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default ProgressBar;