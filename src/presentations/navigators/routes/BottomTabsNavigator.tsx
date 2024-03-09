import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { SettingScreen } from '../../screens/settings/SettingScreen';
import { ProfileScreen } from '../../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}

// video 134