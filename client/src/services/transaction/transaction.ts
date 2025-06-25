import type { TransactionModel } from '@models/TransactionModel.ts'
import { instance } from '../api.ts'

export const transactionCreate = async (
	createDataTransaction: TransactionModel
) => {
	try {
		const { data } = await instance.post('/transaction/', createDataTransaction)
		return data
	} catch (error) {
		console.log('error =', error)
	}
}

export const transactionGetAll = async () => {
	try {
		const { data } = await instance.get('/transaction/')
		return data
	} catch (error) {
		console.log('error =', error)
	}
}
