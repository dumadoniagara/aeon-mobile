import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types"

type NavProp = NativeStackNavigationProp<RootStackParamList, "TransactionList">;

const TransactionListScreen = () => {
     const navigation = useNavigation<NavProp>();
    return(
        <View>
            <Text>TransactionList Screen</Text>
            <Button 
             title="Go to detail screen"
            onPress={()=> navigation.navigate("TransactionDetail", { id: 'test-id'})}/>
        </View>
    )
}

export default TransactionListScreen;