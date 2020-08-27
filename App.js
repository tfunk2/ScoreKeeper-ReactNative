import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ScoreKeeper</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'maroon',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  }
});
