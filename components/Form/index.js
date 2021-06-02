import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { styles } from './styles.js';
const Form = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Text style={{ color: 'white' }}>Login Form </Text>
      <View style={styles.container}>
        <TextInput
          style={{ color: 'white' }}
          placeholder="Enter Email"
          placeholderTextColor="#77787a"
        />
        <TextInput
          secureTextEntry={true}
          placeholderTextColor="#77787a"
          placeholder="Enter Password"
        />
      </View>
    </View>
  );
};

export default Form;
