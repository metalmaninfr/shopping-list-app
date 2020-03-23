import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    const id = items[items.length - 1].id + 1;
    if (!text) {
      return Alert.alert('Error', 'Please enter an item', {text: 'ok'});
    }
    setItems(prevItems => {
      return [{id, text}, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
