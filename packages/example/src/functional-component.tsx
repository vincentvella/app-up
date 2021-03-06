import * as React from 'react';
import useAppUp from '@app-up/react-native';
import { Platform, View, StyleSheet } from 'react-native';
import { Text, ActivityIndicator } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Functional = () => {
  const { loading, data } = useAppUp('5ef1b6c0662c92002c41b3aa', Platform.OS);
  return (
    <View style={styles.container}>
      <Text>Functional Component</Text>
      <Text>{JSON.stringify(data)}</Text>
      {loading && <ActivityIndicator />}
    </View>
  );
};

export default Functional;
