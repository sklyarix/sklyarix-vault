import type { TransactionModel } from '@models/TransactionModel'
import { useQuery } from 'react-query'
import { transactionGetAll } from '../services/transaction/transaction'

export const useTransactionList = () => {
	return useQuery<TransactionModel[]>({
		queryKey: ['transactions'],
		queryFn: () => transactionGetAll()
	})
}
