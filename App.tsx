import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useUpdateEffect } from "rn_sj_components";

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
