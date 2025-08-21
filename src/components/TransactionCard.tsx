import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatCurrency } from '../utils/formatCurrency';
import { formatDateTime } from '../utils/formatDateTime';

interface TransactionCardProps {
  refId: string;
  transferDate: string;
  recipientName: string;
  transferName: string;
  amount: number;
  onPress?: () => void;
}

export default function TransactionCard({
  refId,
  transferDate,
  recipientName,
  transferName,
  amount,
  onPress,
}: TransactionCardProps) {
  const isNegative = amount < 0;

  const { full: dateTime } = formatDateTime(transferDate);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.row}>
        <Text style={styles.title}>{transferName}</Text>
        <Text
          style={[
            styles.amount,
            isNegative ? styles.negative : styles.positive,
          ]}
        >
          {isNegative ? '-' : '+'} {formatCurrency(amount)}
        </Text>
      </View>

      <Text style={styles.recipient}>{recipientName}</Text>
      <Text style={styles.date}>
        {dateTime} • Ref: {refId}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  recipient: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },
  date: {
    marginTop: 2,
    fontSize: 12,
    color: '#888',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
});
