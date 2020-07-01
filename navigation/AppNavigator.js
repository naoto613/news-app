import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../screens/HomeScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ClipScreen from '../screens/ClipScreen';
import { FontAwesome } from '@expo/vector-icons';

// import { CardStyleInterpolators } from 'react-navigation-stack';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    }
  },
  Article: {
    screen: ArticleScreen,
  },
});

const ClipStack = createStackNavigator({
  Clip: {
    screen: ClipScreen,
    navigationOptions: {
      title: 'クリップ一覧',
    }
  },
  Article: {
    screen: ArticleScreen,
  },
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    // navigationOptions: {
    // tabBarIcon: ({ tintColor }) => {
    //   return <FontAwesome name="home" color={tintColor} size={24} />;
    // },
    // },
  },
  Clip: {
    screen: ClipStack,
    // navigationOptions: {
    //   tabBarIcon: ({tintColor}) => {
    //     return <FontAwesome name='bookmark' color={tintColor} size={24} />
    //   },
    // },
  },
});

export default createAppContainer(AppNavigator);

// バージョン5使用時
// export default AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{headerShown: false}}
//         /> 
//         <Stack.Screen
//         name="Article"
//         component={ArticleScreen}
//         options={{headerShown: false}}
//         /> 
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
