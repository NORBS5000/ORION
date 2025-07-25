import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const InputField = ({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  icon, 
  type = 'default', 
  required = false 
}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.inputLabel}>
      {label} {required && <Text style={styles.required}>*</Text>}
      }
    </Text>
    <View style={styles.inputWrapper}>
      {icon && <Ionicons name={icon} size={16} color={colors.textSecondary} />}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={type}
        placeholderTextColor={colors.textSecondary}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  required: {
    color: colors.error,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: colors.text,
  },
});

export default InputField;