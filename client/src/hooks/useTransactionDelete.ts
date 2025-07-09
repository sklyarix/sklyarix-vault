import { useMutation, useQueryClient } from '@tanstack/react-query'
import { transactionDelete } from '../services/transaction/transaction.ts'

export const useTransactionDelete = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number) => transactionDelete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] })
		}
	})
}
