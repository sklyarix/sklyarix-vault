import { groupByDate } from '../../helpers/groupByDate.ts'
import { useTransactionList } from '../../hooks/useTransactionList'
import TransactionDayBlock from './TransactionDayBlock.tsx'

const TransactionList = () => {
	const { isLoading, isError, data } = useTransactionList()

	if (isLoading) {
		return <div className='text-center py-4 text-gray-500'>Загрузка...</div>
	}
	if (isError) {
		return (
			<div className='text-center py-4 text-red-500'>
				Ошибка загрузки данных.
			</div>
		)
	}
	if (!data || data.length === 0) {
		return <div className='text-center py-4 text-gray-500'>Нет транзакций</div>
	}

	return (
		<div>
			{data
				? groupByDate(data).map((block, id) => (
						<TransactionDayBlock
							key={id}
							date={block.date}
							transactions={block.transactions}
						/>
					))
				: null}
		</div>
	)
}
export default TransactionList
