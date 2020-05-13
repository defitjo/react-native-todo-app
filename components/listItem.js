import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ListItem({ item, handlePress }) {
  return (
    <View style={styles.listItem}>
      <Text>{item.title}</Text>
      <TouchableOpacity
        onPress={() => handlePress(item.id)}
      >
        <MaterialIcons name='clear' size={20} color='#f44336' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#4db6ac',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    padding: 15,
  },
});
