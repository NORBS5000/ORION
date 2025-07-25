import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const UploadButton = ({ title, onPress, uploaded = false }) => (
  <TouchableOpacity 
    style={[
      styles.uploadButton,
      uploaded && { borderColor: colors.success, backgroundColor: `${colors.success}10` }
    ]}
    onPress={onPress}
  >
    <Ionicons 
      name={uploaded ? "checkmark-circle" : "cloud-upload"} 
      size={20} 
      color={uploaded ? colors.success : colors.primary} 
    />
    <Text style={[
      styles.uploadButtonText,
      uploaded && { color: colors.success }
    ]}>
      {uploaded ? 'Uploaded ✓' : title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  uploadButton: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  uploadButtonText: {
    fontSize: 14,
    color: colors.text,
  },
});

export default UploadButton;