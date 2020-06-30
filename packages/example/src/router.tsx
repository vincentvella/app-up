import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import ClassComponent from './class-component';
import CustomComponent from './custom-component';
import ProvidedVersion from './provided-version';
import FunctionalComponent from './functional-component';
import AppStoreRedirect from './appstore-redirect';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerTitle: 'AppUp Examples' }}
        />
        <Stack.Screen
          name="class"
          component={ClassComponent}
          options={{ headerTitle: 'Class', headerBackTitle: 'Examples' }}
        />
        <Stack.Screen
          name="functional"
          component={FunctionalComponent}
          options={{ headerTitle: 'Functional', headerBackTitle: 'Examples' }}
        />
        <Stack.Screen
          name="custom"
          component={CustomComponent}
          options={{ headerTitle: 'Custom', headerBackTitle: 'Examples' }}
        />
        <Stack.Screen
          name="appstore-redirect"
          component={AppStoreRedirect}
          options={{ headerTitle: 'Redirect', headerBackTitle: 'Examples' }}
        />
        <Stack.Screen
          name="ss-validation"
          component={ProvidedVersion}
          options={{
            headerTitle: 'Server-Side Validation',
            headerBackTitle: 'Examples',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default Router;
