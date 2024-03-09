import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { BottomTabsNavigator } from './presentations/navigators/routes/BottomTabsNavigator';



export const Main = () => {
  return (

       <NavigationContainer>
     <BottomTabsNavigator/>
       </NavigationContainer>
 
  );
};
