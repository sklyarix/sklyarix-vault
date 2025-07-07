import type { TransactionModel } from '@models/TransactionModel.ts'
import { useQuery } from '@tanstack/react-query'

import { transactionByDateRange } from '../services/transaction/transaction.ts'

export const useTransactionsByMonth = (month: number, year: number) => {
	return useQuery<TransactionModel[]>({
		queryKey: ['transactions-by-month', month, year],
		queryFn: () => transactionByDateRange(month, year)
	})
}
