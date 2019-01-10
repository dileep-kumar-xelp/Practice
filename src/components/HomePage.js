import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigator";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: props => (
      <View style={{ height: 56, width: "100%", backgroundColor: "black" }} />
    )
  };
  render() {
    return <TabNavigator />;
  }
}
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }
// class ThirdScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }
// class FourthScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }
// class FivethScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// const stack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Settings: SettingsScreen,
//     ThirdScreen: ThirdScreen,
//     FourthScreen: FourthScreen,
//     FivethScreen: FivethScreen
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "rgb(255,255,255)",
//       inactiveTintColor: "rgba(255,255,255,0.7)",
//       scrollEnabled: true,
//       renderIndicator: () => null
//     }
//   }
// );

//export default createAppContainer(TabNavigator);
