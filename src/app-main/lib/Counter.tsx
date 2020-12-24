import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCount(count - 1)}
        disabled={count < 1}
      >
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCount(0)}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
