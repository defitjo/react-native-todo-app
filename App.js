import React, { useState } from 'react';
import { DefaultTheme } from 'react-native-paper';
import {
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList
} from 'react-native';

import AppHeader from './components/appHeader';
import NewTodo from './components/newTodo';
import ListItem from './components/listItem';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4db6ac',
  },
};

export default function App() {

  const [todos, setTodos] = useState([
    { title: 'Learn React Native', id: '1' },
    { title: 'Read a novel', id: '2' },
    { title: 'Level up skill set', id: '3' },
    { title: 'Lorem ipsum dolor sit', id: '4' }
  ]);

  const handleSubmit = (title) => {
    if (title.length >= 5) {
      setTodos((todosOld) => {
        return [
          { title: title, id: Math.random().toString() },
          ...todosOld
        ];
      });
    } else {
      Alert.alert('Todos must have at least 5 characters');
    };
  }

  const handlePress = (id) => {
    setTodos((todosOld) => {
      return todosOld.filter(todo => todo.id != id);
    });
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
        <View style={styles.container}>
          <AppHeader theme={theme} />
          <View style={styles.section}>
            <NewTodo handleSubmit={handleSubmit} theme={theme} />
            <View>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <ListItem item={item} handlePress={handlePress} />
                )}
              />
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
    paddingBottom: 70,
  },
});
