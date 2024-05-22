import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import OrderFormScreen from "./screens/OrderFormScreen";
import LoginFormScreen from "./screens/LoginFormScreen";
import AdminDashboard from "./screens/DashboardAdminScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginFormScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Order" component={OrderFormScreen} />
        <Stack.Screen name="Admin" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
