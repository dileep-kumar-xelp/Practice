import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import styles from "./HeaderStyles";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
class Header extends Component {
  renderHeaderLeft = () => {
    if (this.props.headerLeft) {
      return this.props.headerLeft;
    }
    return (
      <TouchableOpacity
        style={styles.leftContainer}
        onPress={() => {
          this.props.navigation.goBack();
        }}
      >
        <Icon
          size={this.props.iconSize}
          name={this.props.backIcon}
          color={this.props.backIconColor}
        />
      </TouchableOpacity>
    );
  };
  renderHeaderRight = () => {
    if (this.props.headerRight) {
      return this.props.headerRight;
    }
  };
  renderHeaderCenter = () => {
    if (this.props.headerCenter) {
      return this.props.headerCenter;
    }
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.headerTitle}>{this.props.headerTitle}</Text>
      </View>
    );
  };
  render() {
    return (
      <View>
        <StatusBar
          translucent={this.props.translucent}
          backgroundColor={this.props.statusBarColor}
          barStyle={this.props.barStyle}
        />
        <View
          style={[
            styles.headerContainer,
            {
              backgroundColor: this.props.headerBackgroundColor,
              height: this.props.headerHeight
            }
          ]}
        >
          {this.props.showHeaderCenter && this.renderHeaderCenter()}

          {this.props.showBackIcon && this.renderHeaderLeft()}
          {this.renderHeaderRight()}
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);
Header.propTypes = {
  translucent: PropTypes.bool,
  statusBarColor: PropTypes.string,
  barStyle: PropTypes.string,
  headerLeft: PropTypes.element,
  headerRight: PropTypes.element,
  headerCenter: PropTypes.element,
  showHeaderCenter: PropTypes.bool,
  showBackIcon: PropTypes.bool,
  backIcon: PropTypes.string,
  headerTitle: PropTypes.string,
  backIconColor: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  iconSize: PropTypes.number
};
Header.defaultProps = {
  translucent: false,
  statusBarColor: colors.statusbarColor,
  barStyle: "dark-content",
  showHeaderCenter: true,
  showBackIcon: false,
  backIcon: "md-arrow-back",
  backIconColor: colors.black,
  headerTitle: HEADERTITLE,
  iconSize: 25,
  headerHeight: 56,
  headerBackgroundColor: colors.headerBackgroundColor
};
