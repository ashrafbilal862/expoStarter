import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppNavigator from "./src/AppNavigation/appNavigator";
import AuthContextContainer from "./src/Contaxt/Auth/authContainer";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AuthContextContainer>
            <AppNavigator />
          </AuthContextContainer>
        </ApplicationProvider>
      </SafeAreaView>
    </>
  );
}
