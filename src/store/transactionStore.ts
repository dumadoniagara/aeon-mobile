import { create } from "zustand";
import { Transaction } from "../api/transactionApi";

interface TransactionState {
  transactions: Transaction[];
  setTransactions: (tx: Transaction[]) => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  setTransactions: (tx) => set({ transactions: tx }),
}));
