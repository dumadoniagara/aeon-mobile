import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { useTransactionStore } from '../../store/transactionStore';
import { getTransactions } from '../../api/transactionApi';
import TransactionCard from '../../components/TransactionCard';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'TransactionList'>;

const TransactionListScreen = () => {
  const navigation = useNavigation<NavProp>();

  const { transactions, setTransactions } = useTransactionStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (err) {
        console.error('Failed to fetch transactions:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.refId}
        renderItem={({ item }) => (
          <TransactionCard
            onPress={() =>
              navigation.navigate('TransactionDetail', { id: item.refId })
            }
            refId={item.refId}
            transferDate={item.transferDate}
            recipientName={item.recipientName}
            transferName={item.transferName}
            amount={item.amount}
          />
        )}
      />
    </View>
  );
};

export default TransactionListScreen;
