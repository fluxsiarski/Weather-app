import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
  const { iconName, size, iconColor, bodyText, bodyTextStyles } = props;
  const { textTheme, container } = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={size} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

export default IconText;

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
  },
});
