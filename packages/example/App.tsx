import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

enableScreens();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <PaperProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    </KeyboardAvoidingView>
  );
}
