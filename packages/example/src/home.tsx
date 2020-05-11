import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, StyleSheet } from 'react-native';
import { Title, Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title>Example Components: </Title>
      <Button onPress={() => navigation.navigate('class')}>
        Class Component
      </Button>
      <Button onPress={() => navigation.navigate('functional')}>
        Functional Component
      </Button>
      <Button onPress={() => navigation.navigate('custom')}>
        Custom Component
      </Button>
    </View>
  );
};

export default Home;
