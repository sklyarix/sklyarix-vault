import type { TransactionModel } from '@models/TransactionModel.ts'

import { useQuery } from 'react-query'
import { transactionByDateRange } from '../services/transaction/transaction.ts'

export const useTransactionByDateRange = (month: number, year: number) => {
	return useQuery<TransactionModel[]>({
		queryKey: ['transactionByDateRange'],
		queryFn: () => transactionByDateRange(month, year)
	})
}
