import React from 'react';
import { View, TextInput,   StyleSheet, } from 'react-native';
import { Text } from 'native-base';

const InputText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={props.onChange}
        value={props.value}
      />
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
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});

export default InputText;
