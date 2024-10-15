import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useUpdateEffect } from "./src";

const App = () => {
  useUpdateEffect(() => {
    console.log("useUpdateEffect");
  }, []);

  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
};

export default App;
