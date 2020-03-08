import * as React from 'react';
import TaskList from './src/views/taskList';
import TaskDetails from './src/views/taskDetails';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Tasks"
          screenOptions={{gestureEnabled: true}}>
          <Stack.Screen  name="Tasks" component={TaskList} />
          <Stack.Screen name="Task" component={TaskDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
