import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import ClassComponent from './class-component';
import CustomComponent from './custom-component';
import FunctionalComponent from './functional-component';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerTitle: "AppUp Examples" }}
        />
        <Stack.Screen
          name="class"
          component={ClassComponent}
          options={{ headerTitle: "Class", headerBackTitle: 'Examples' }}
        />
        <Stack.Screen
          name="functional"
          component={FunctionalComponent}
          options={{ headerTitle: "Functional", headerBackTitle: 'Examples' }}
        />
        <Stack.Screen
          name="custom"
          component={CustomComponent}
          options={{ headerTitle: "Custom", headerBackTitle: 'Examples' }}
        />
      </Stack.Navigator>
    </>
  );
}

export default Router;