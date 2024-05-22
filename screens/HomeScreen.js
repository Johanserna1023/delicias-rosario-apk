import { View, Text } from "react-native";
import SearchInput from "../components/SearchInput";
import FilterDessert from "../components/FilterDesserts";

export default function HomeScreen() {
  return (
    <View>
      <SearchInput/>
      <FilterDessert/>
    </View>
  );
}
