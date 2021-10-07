import React from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="E-mail Address" />
        <TextInput style={styles.input} value="password" />

        <Button label="Submit" />

        <View style={styles.fotter}>
          <Text style={styles.fotterText}>Not resisterd?</Text>
          <TouchableOpacity>
            <Text style={styles.fotterLink}>Log in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F1',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    color: '#CCCCCC',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  fotter: {
    flexDirection: 'row',
  },
  fotterText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  fotterLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});
