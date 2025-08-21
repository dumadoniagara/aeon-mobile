import transactions from "../mocks/transactions.json";

export interface Transaction {
  refId: string;
  transferDate: string;
  recipientName: string;
  transferName: string;
  amount: number;
}

export const getTransactions = (): Promise<Transaction[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(transactions.data);
    }, 500);
  });
};

export const getTransactionById = (
  refId: string
): Promise<Transaction | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tx = transactions.data.find((t) => t.refId === refId);
      resolve(tx);
    }, 300);
  });
};
