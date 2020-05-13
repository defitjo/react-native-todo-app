import React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppHeader({ theme }) {
  return (
    <Appbar.Header dark theme={theme}>
      <Appbar.Content title='Todo App' />
    </Appbar.Header>
  )
}