import type { TransactionModel } from '@models/TransactionModel.ts'
import { formatCurrency } from './formatCurrency.ts'

export const transformTransactionText = (data: TransactionModel) => {
	const { type, amount } = data
	const formattedAmount = formatCurrency(amount)

	return type === 'INCOME'
		? `Доход на сумму ${formattedAmount} успешно добавлен`
		: `Расход на сумму ${formattedAmount} успешно добавлен`
}
