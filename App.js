import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <View>
          <Text onPress= {()=> this.props.navigation.navigate('Details')}>D Screen</Text>
          </View>
    );
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <View>
        <Text>B</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);
