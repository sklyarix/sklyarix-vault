import type { TransactionModel } from '@models/TransactionModel.ts'
import { useTransactionByDateRange } from '../../hooks/useTransactionByDateRange'

const TransactionSum = () => {
	const currentData = new Date()
	const { data, isSuccess } = useTransactionByDateRange(
		currentData.getMonth() + 1,
		currentData.getFullYear()
	)
	const sumAmount = (data: TransactionModel[]) => {
		return data.reduce((summ, transaction) => summ + transaction.amount, 0)
	}
	return (
		<div>
			<div className='bg-yellow-main px-4 pt-4 pb-10 text-center rounded-2xl'>
				<span className='text-sm font-semibold'>Общие расходы за Сентябрь</span>
			</div>
			<div className='relative bg-purple-main text-white p-4 text-center rounded-2xl -top-8 -mb-8'>
				<span className='text-md font-semibold'>
					{isSuccess ? sumAmount(data) : '...'}
				</span>
			</div>
		</div>
	)
}

export default TransactionSum

/*
	
	[
	{
		"id": 18,
		"createdAt": "2025-06-26T12:06:38.820Z",
		"updatedAt": "2025-06-26T12:06:38.820Z",
		"type": "EXPENSE",
		"amount": 3210,
		"categoryId": 1,
		"date": "2025-06-27T00:00:00.000Z",
		"comment": ""
	},
	{
		"id": 17,
		"createdAt": "2025-06-26T12:06:38.820Z",
		"updatedAt": "2025-06-26T12:06:38.820Z",
		"type": "EXPENSE",
		"amount": 3210,
		"categoryId": 1,
		"date": "2025-06-27T00:00:00.000Z",
		"comment": ""
	}
	]
	* */
