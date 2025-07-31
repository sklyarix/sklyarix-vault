import type { TransactionModelUpdate } from '@models/TransactionModel.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useTransactionUpdate = async (
	transaction: TransactionModelUpdate
) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (data: TransactionModelUpdate) => {}
	})
}
