import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

const Header = ({ title, showMenu = false, showBack = false, onBack }) => (
  <View style={styles.header}>
    {showBack ? (
      <TouchableOpacity style={styles.headerButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={24} color={colors.text} />
      </TouchableOpacity>
    ) : (
      <View style={{ width: 40 }} />
    )}
    <Text style={styles.headerTitle}>{title}</Text>
    {showMenu ? (
      <TouchableOpacity style={styles.headerButton}>
        <Ionicons name="menu" size={24} color={colors.text} />
      </TouchableOpacity>
    ) : (
      <View style={{ width: 40 }} />
    )}
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
  },
  headerButton: {
    padding: 8,
    borderRadius: 8,
  },
});

export default Header;