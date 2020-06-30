import * as React from 'react';
import useAppUp from '@app-up/react-native';
import { Platform, View, StyleSheet } from 'react-native';
import {
  ActivityIndicator,
  Portal,
  Dialog,
  Paragraph,
  Button,
} from 'react-native-paper';
import { Linking } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStoreRedirect = () => {
  const [dismissed, setDismissed] = React.useState(false);
  const { loading, data } = useAppUp(
    '5ef1b6c0662c92002c41b3aa',
    Platform.OS,
    '1.13.1'
  );
  if (loading) return <ActivityIndicator size="large" />;
  const handleLink = () => {
    if (data.url) {
      Linking.openURL(data.url);
    }
  };
  return (
    <View style={styles.container}>
      <Portal>
        <Dialog
          dismissable={true}
          visible={data?.upToDate && !dismissed}
          onDismiss={() => setDismissed(true)}
        >
          <Dialog.Title>App Update Available</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              We have some important upgrades we'd like to get to you! Please
              update your app to continue using our service.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleLink}>Update</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default AppStoreRedirect;
