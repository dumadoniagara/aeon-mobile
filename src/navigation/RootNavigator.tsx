import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TransactionList from "../screens/TransactionList";
import TransactionDetail from "../screens/TransactionDetail";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionList">
        <Stack.Screen
          name="TransactionList"
          component={TransactionList}
          options={{ title: "Transactions" }}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetail}
          options={{ title: "Transaction Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
