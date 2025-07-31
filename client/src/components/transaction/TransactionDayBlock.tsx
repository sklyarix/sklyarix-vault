import type { CategoryModel } from '@models/CategoryModel.ts'
import type { TransactionModel } from '@models/TransactionModel.ts'

import { formatCurrency } from '../../helpers/formatCurrency.ts'
import { useCategoryGetAll } from '../../hooks/useCategoryGetAll.ts'
import { useTransactionDelete } from '../../hooks/useTransactionDelete.ts'
import { useModalStore } from '../../stores/modalStores.ts'

export type TransactionDayBlockProps = {
	date: string
	transactions: TransactionModel[]
}

// выводит дату и список
const TransactionDayBlock = ({
	date,
	transactions
}: TransactionDayBlockProps) => {
	const { mutate: deleteTransaction } = useTransactionDelete()

	const { data: categories } = useCategoryGetAll()

	const categoryMap = new Map<number, string>()

	const { openModal, closeModal } = useModalStore()

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

	const handleClick = (id: number) => {
		if (id !== null) {
			openModal(
				<div className='relative flex flex-col justify-center'>
					<button className='cursor-pointer p-2 text-left'>Изменить</button>
					<button
						className='cursor-pointer p-2 text-left'
						onClick={() => {
							deleteTransaction(id, {
								onSuccess: () => {
									console.log('Удаление прошло успешно')
									closeModal()
								},
								onError: err => {
									console.error('Ошибка', err)
								}
							})
						}}
					>
						Удалить
					</button>
				</div>
			)
		}
	}

	return (
		<div className='border-b border-gray-200 py-3'>
			<div className='mb-2 flex justify-between'>
				<span className='text-base font-semibold text-black'>
					{formatDate(date)}
				</span>
				<span className='text-base font-medium text-gray-300'>
					{formatCurrency(summAmount(transactions))}
				</span>
			</div>

			<ul className='space-y-2'>
				{transactions.map((transaction: TransactionModel) => (
					<li
						className='bg-soft-white flex cursor-pointer justify-between px-2 py-1 text-base text-black hover:brightness-96'
						key={transaction.id}
						onClick={() => {
							handleClick(transaction.id)
						}}
					>
						<span>
							{transaction.categoryId
								? categoryMap.get(transaction.categoryId)
								: 'без категории'}
						</span>
						<span className='text-right font-medium'>
							{formatCurrency(transaction.amount)}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}
export default TransactionDayBlock
