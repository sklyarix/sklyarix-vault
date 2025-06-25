import type { CategoryModel } from '@models/CategoryModel.ts'
import type { TransactionModel } from '@models/TransactionModel.ts'
import { useQuery } from 'react-query'
import { categoryGetAll } from '../../services/category/category.ts'

export type TransactionDayBlockProps = {
	date: string
	transactions: TransactionModel[]
}

// выводит дату и список
const TransactionDayBlock = ({
	date,
	transactions
}: TransactionDayBlockProps) => {
	const { data: categories } = useQuery('categories', categoryGetAll)

	const categoryMap = new Map<number, string>()

	categories?.forEach(({ id, name }: CategoryModel) => {
		categoryMap.set(id, name)
	})

	const formatDate = (date: string) => {
		return new Date(date).toLocaleDateString('ru-RU', {
			day: 'numeric',
			month: 'long'
		})
	}

	const summAmount = (transactions: TransactionModel[]) => {
		return transactions.reduce((sum, transaction) => {
			return sum + transaction.amount
		}, 0)
	}

	const formatCurrency = (value: number): string => {
		return new Intl.NumberFormat('ru-RU', {
			style: 'currency',
			currency: 'RUB',
			maximumFractionDigits: 0
		}).format(value)
	}

	return (
		<div className=" border-b border-gray-200 py-3">
			<div className="flex justify-between mb-2">
				<span className="text-base text-black font-semibold ">
					{formatDate(date)}
				</span>
				<span className="text-base text-gray-300 font-medium">
					{formatCurrency(summAmount(transactions))}
				</span>
			</div>

			<ul className="space-y-2">
				{transactions.map((transaction: TransactionModel, id) => (
					<li className="flex justify-between text-black text-base" key={id}>
						<span className="">
							{transaction.categoryId
								? categoryMap.get(transaction.categoryId)
								: 'без категории'}
						</span>
						<span className="font-medium text-right">
							{formatCurrency(transaction.amount)}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}
export default TransactionDayBlock
