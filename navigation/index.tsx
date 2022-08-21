/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import TasksScreen from '../screens/tasksScreen/TasksScreen'
import HomeScreen from '../screens/homeScreen/HomeScreen'
import ReportScreen from '../screens/reportScreen/ReportScreen'
import ProfileScreen from '../screens/profileScreen/ProfileScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {TabButton } from '../components/Tabs'


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
     
      <BottomTab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          title: 'Báo cáo',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarButton: (props) => <TabButton {...props} item={{label: 'Báo cáo',icon:'bar-chart-o'}} />
        }}
      />
      <BottomTab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarButton: (props) => <TabButton {...props} item={{label: 'Công việc',icon:'tasks'}} />
        }}
      />
       <BottomTab.Screen
        name="Home"
        component={HomeScreen}
         
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerShown:false,
          tabBarButton: (props) => <TabButton {...props} item={{label: 'Home',  icon: 'home',}} />,
        

        })}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarButton: (props) => <TabButton {...props} item={{label: 'Cá nhân',icon:'user'}} />
        }}
      />
        <BottomTab.Screen
        name="None"
        component={ProfileScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarButton: (props) => <TabButton {...props} item={{label: 'Cá nhân',icon:'user'}} />
        }}
      /> 
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
