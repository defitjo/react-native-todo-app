import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function NewTodo({ handleSubmit, theme }) {
  const [title, setTitle] = useState('');

  const handleChange = (text) => {
    setTitle(text);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        theme={theme}
        value={title}
        onChangeText={handleChange}
        placeholder="What would you like todo?"
        underlineColor = "#4db6ac"
      />
      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => {
          handleSubmit(title)
          setTitle('')
        }}
      >
        Submit
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
  },
  btn: {
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#4caf50',
  },
})
