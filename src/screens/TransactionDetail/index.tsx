import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Button,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { getTransactionById, Transaction } from '../../api/transactionApi';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDateTime } from '../../utils/formatDateTime';
import RNHTMLtoPDF from "react-native-html-to-pdf";
import Share from "react-native-share";

type DetailRouteProp = RouteProp<RootStackParamList, 'TransactionDetail'>;

export default function TransactionDetail() {
  const { params } = useRoute<DetailRouteProp>();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getTransactionById(params.id);
      setTransaction(data || null);
      setLoading(false);
    };
    loadData();
  }, [params.id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!transaction) {
    return (
      <View style={styles.center}>
        <Text>Transaction not found</Text>
      </View>
    );
  }

  const { refId, transferDate, recipientName, transferName, amount } =
    transaction;

  const isNegative = amount < 0;
  const { full: dateTime } = formatDateTime(transferDate);


  const generateAndSharePDF = async () => {
    try {
      const htmlContent = `
        <h1>Transaction Receipt</h1>
        <p><strong>Transfer Name:</strong> ${transferName}</p>
        <p><strong>Recipient:</strong> ${recipientName}</p>
        <p><strong>Reference ID:</strong> ${refId}</p>
        <p><strong>Date & Time:</strong> ${dateTime}</p>
        <p><strong>Amount:</strong> ${isNegative ? "-" : "+"} ${formatCurrency(amount)}</p>
      `;

      const options = {
        html: htmlContent,
        fileName: `Transaction_${refId}`,
        directory: "Documents",
      };

      const file = await RNHTMLtoPDF.convert(options);

      await Share.open({
        title: "Share Transaction PDF",
        url: `file://${file.filePath}`,
        type: "application/pdf",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Transfer Name</Text>
      <Text style={styles.value}>{transferName}</Text>

      <Text style={styles.label}>Recipient</Text>
      <Text style={styles.value}>{recipientName}</Text>

      <Text style={styles.label}>Reference ID</Text>
      <Text style={styles.value}>{refId}</Text>

      <Text style={styles.label}>Date & Time</Text>
      <Text style={styles.value}>{dateTime}</Text>

      <Text style={styles.label}>Amount</Text>
      <Text
        style={[styles.amount, isNegative ? styles.negative : styles.positive]}
      >
        {isNegative ? '-' : '+'} {formatCurrency(amount)}
      </Text>

      <View style={{ marginTop: 24 }}>
        <Button title="Share Transaction" onPress={generateAndSharePDF} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    marginBottom: 8,
  },
  amount: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 4,
  },
  positive: {
    color: 'green',
  },
  negative: {
    color: 'red',
  },
});
