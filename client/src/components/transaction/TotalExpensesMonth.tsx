import { MONTHS_RU } from '@const/Months.ts'
import { useTransactionsByMonth } from '../../hooks/useTransactionByDateRange'

const TotalExpensesMonth = () => {
	const now = new Date()
	const month = now.getMonth()
	const year = now.getFullYear()

	const { data, isSuccess } = useTransactionsByMonth(month + 1, year)

	const total =
		isSuccess && data
			? data.reduce((summ, transaction) => summ + transaction.amount, 0)
			: null

	return (
		<div>
			<div className='bg-yellow-main px-4 pt-4 pb-10 text-center rounded-2xl'>
				<span className='text-sm font-semibold'>
					Общие расходы за {MONTHS_RU[month]}
				</span>
			</div>
			<div className='relative bg-purple-main text-white p-4 text-center rounded-2xl -top-8 -mb-8'>
				<span className='text-md font-semibold'>
					{total != null ? total : '...'}
				</span>
			</div>
		</div>
	)
}

export default TotalExpensesMonth
