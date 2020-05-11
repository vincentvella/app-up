import * as React from 'react';
import makeRequest from '@appup/network';
import { Platform, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CustomComponent = () => {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    let mounted = true;
    const checkVersion = async () => {
      try {
        // Not a recommended pattern but wanted to show that the packages were published separately
        // so if you found yourself in a scenario where you couldn't use a React Hook/FC then you
        // could in theory just access the network request from the @appup/network package.
        // This is purely a convenience.
        const response = await makeRequest('8rDOMaWCWSywEFmaSbZl', Platform.OS);
        if (mounted) setData(response);
      } catch (err) {
        console.log(err);
      }
    };
    checkVersion();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Custom Component</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default CustomComponent;
