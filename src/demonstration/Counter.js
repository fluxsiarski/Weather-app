import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";

const Counter = () => {
  const [add, setAdd] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed`);
    return () => {
      console.log("useEffect cleanup");
    };
  }, [add]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{add}</Text>
      </View>

      <Button title="Add" onPress={() => setAdd(add + 1)} />

      <Button title="newCount" onPress={() => setNewCount(newCount - 1)} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({});
