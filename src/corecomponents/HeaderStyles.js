import { StyleSheet } from "react-native";
import { Platform } from "react-native";
const HeaderStyles = StyleSheet.create({
  leftContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 50
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 10
  },
  headerContainer: {
    height: Platform.OS === "ios" ? 40 : 56,
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS == "ios" ? 20 : 0
  },

  logoImage: {
    height: 50,
    width: 50
  },
  logoHolder: {
    flexDirection: "row",
    alignItems: "center"
  }
});
export default HeaderStyles;
