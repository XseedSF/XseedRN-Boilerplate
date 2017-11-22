import React from 'react';
import { Text, Animated, Easing } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgottenPasswordScreen from '../screens/ForgottenPasswordScreen';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

import Screen2_1 from '../screens/Screen2_1';
import Screen2_2 from '../screens/Screen2_2';
import Screen2_3 from '../screens/Screen2_3';

import Screen3_1 from '../screens/Screen3_1';
import Screen3_2 from '../screens/Screen3_2';
import Screen3_3 from '../screens/Screen3_3';

import DrawerContainer from '../screens/DrawerContainer';

// drawer stack
const DrawerStack = DrawerNavigator(
  {
    screen1: { screen: Screen1 },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 }
  },
  {
    gesturesEnabled: false,
    contentComponent: props => <DrawerContainer {...props} />
  }
);

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: 'green' },
      title: 'Logged In to your app!',
      gesturesEnabled: false,
      headerLeft: (
        <Text
          onPress={() => {
            navigation.navigate('DrawerToggle');
          }}
        >
          Menu
        </Text>
      )
    })
  }
);

import HamburgerButton from './HamburgerButton';

const Screen1Stack = StackNavigator(
  {
    screen1: {
      screen: Screen1,
      navigationOptions: ({ navigation }) => ({
        title: 'Drawer 1',
        headerLeft: (
          <HamburgerButton
            onPress={() => navigation.navigate('DrawerToggle')}
          />
        )
      })
    },
    screen2: { screen: Screen2 },
    screen3: { screen: Screen3 }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false
    }
  }
);

const Screen2Stack = StackNavigator(
  {
    screen1: {
      screen: Screen2_1,
      navigationOptions: ({ navigation }) => ({
        title: 'Drawer 2',
        headerLeft: (
          <HamburgerButton
            onPress={() => navigation.navigate('DrawerToggle')}
          />
        )
      })
    },
    screen2: { screen: Screen2_2 },
    screen3: { screen: Screen2_3 }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false
    }
  }
);

const Screen3Stack = StackNavigator(
  {
    screen1: {
      screen: Screen3_1,
      navigationOptions: ({ navigation }) => ({
        title: 'Drawer 3 !!',
        headerLeft: (
          <HamburgerButton
            onPress={() => navigation.navigate('DrawerToggle')}
          />
        )
      })
    },
    screen2: { screen: Screen3_2 },
    screen3: {
      screen: Screen3_3
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false
    }
  }
);

const DrawerNavigatorWithoutStack = DrawerNavigator(
  {
    drawer1: { screen: Screen1Stack },
    drawer2: { screen: Screen2Stack },
    drawer3: { screen: Screen3Stack }
  },
  {
    gesturesEnabled: false,
    contentComponent: props => <DrawerContainer {...props} />
  }
);

// login stack
const LoginStack = StackNavigator(
  {
    loginScreen: { screen: LoginScreen },
    signupScreen: { screen: SignupScreen },
    forgottenPasswordScreen: {
      screen: ForgottenPasswordScreen,
      navigationOptions: { title: 'Forgot Password - Olvide mi contraseña' }
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { backgroundColor: '#1080ca' },
      headerBackTitle: null,
      headerTintColor: 'white',
      gesturesEnabled: false
    }

    /*
    //Para que la animacion sea desde abajo, ejemplo de la doc
    ,transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0]
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        });

        return { opacity, transform: [{ translateY }] };
      }
    })*/
  }
);

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigatorWithoutStack }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'loginStack',
    transitionConfig: noTransitionConfig
  }
);

export default PrimaryNav;
