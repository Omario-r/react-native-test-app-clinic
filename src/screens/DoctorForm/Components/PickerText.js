import React from 'react';
import { View, TextInput,   StyleSheet } from 'react-native';
import { Text, Picker } from 'native-base';

const PickerText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
        <Picker
          note
          mode="dropdown"
          selectedValue={props.value}
          onValueChange={props.onChange}
        >
          {props.data.map(item => (
            <Picker.Item label={item.title} value={item.id} />
          ))}
        </Picker>
      <View style={styles.picker}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  label: {
    fontSize: 14,
    color: 'gray',
  },
  picker: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default PickerText;
