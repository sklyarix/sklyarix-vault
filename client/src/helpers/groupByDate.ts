import type { TransactionModel } from '@models/TransactionModel'

export const groupByDate = (transactions: TransactionModel[]) => {
	const grouped: Record<string, TransactionModel[]> = {}

	transactions.forEach(transaction => {
		transaction.date = transaction.date.split('T')[0]

		if (!grouped[transaction.date]) {
			grouped[transaction.date] = []
		}
		grouped[transaction.date].push(transaction)
	})

	return Object.entries(grouped).map(([date, transaction]) => ({
		date,
		transactions: transaction
	}))
}
/*

transaction[]
[

]


	[
		{
			date: string,
			transactions: transaction[]
		},
	]

 */