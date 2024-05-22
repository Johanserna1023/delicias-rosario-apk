import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LineChart, BarChart } from "react-native-chart-kit";
import HomeScreen from "./HomeScreen";
import CreateDessertScreen from "./CreateDessert";
import {Entypo, } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();




const AnalyticsScreen = () => (
  
  <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
    <Text>Analytics - Estadísticas y gráficos</Text>
    {/* Agrega gráficos y estadísticas aquí */}
    <LineChart
      data={{
        labels: ["Ene", "Feb", "Mar", "Abr", "May"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99],
          },
        ],
      }}
      width={400}
      height={300}
      yAxisLabel="$"
      yAxisSuffix="k"
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
      }}
      bezier
    />
  </View>
);

const AdminDashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: () =>(
            <Entypo name="home" size={24} color="black" />
          )
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Products"
        options={{
          headerShown: false,
          tabBarIcon: () =>(
            <Entypo name="cake" size={24} color="black" />
          )
        }}
        component={CreateDessertScreen}
      />
      <Tab.Screen
        name="Analytics"
        options={{
          headerShown: false,
          tabBarIcon: () =>(
            <Entypo name="line-graph" size={24} color="black" />
          )
        }}
        component={AnalyticsScreen}
      />
    </Tab.Navigator>
  );
};

export default AdminDashboard;
