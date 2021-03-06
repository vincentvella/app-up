import * as React from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import { View, Platform, StyleSheet } from 'react-native';
import { withAppUp } from '@app-up/react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Class extends React.Component<{ loading: boolean; data: any }> {
  render() {
    const { loading, data } = this.props;
    return (
      <View style={styles.container}>
        <Text>Class Component</Text>
        <Text>{JSON.stringify(data)}</Text>
        {loading && <ActivityIndicator />}
      </View>
    );
  }
}

export default withAppUp('5ef1b6c0662c92002c41b3aa', Platform.OS)(Class);
