import * as React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider as PaperProvider } from 'react-native-paper'
import { Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

enableScreens();

export default function App() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <PaperProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    </KeyboardAvoidingView>
  );
}
