import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Lading from '../Pages/Landing';
import GiveClasses from '../Pages/GiveClasses';

const { Navigator,Screen } = createStackNavigator();

function AppStack(){
  return(
    <NavigationContainer>
      <Navigator  screenOptions={{
        headerShown:false,
      }} >
        <Screen name='Ladding' component={Lading} />
        <Screen name='GiveClasses' component={GiveClasses} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;