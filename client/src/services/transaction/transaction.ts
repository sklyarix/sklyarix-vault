import { instance } from '../api.ts'

const URL = '/transaction'

export interface CreateDataTransaction {
	type: 'INCOME' | 'EXPENSE'
	amount: number
	date: string
	comment?: string
	categoryId?: number
}

export const transactionCreate = async (
	createDataTransaction: CreateDataTransaction
) => {
	try {
		const { data } = await instance.post(URL, createDataTransaction)
		return data
	} catch (error) {
		console.log('error =', error)
	}
}

export const transactionGetAll = async () => {
	try {
		const { data } = await instance.get(`${URL}?sortBy=date&order=desc`)
		return data
	} catch (error) {
		console.log('error =', error)
	}
}

export const transactionByDateRange = async (month: number, year: number) => {
	try {
		const { data } = await instance.get(
			`${URL}/date?month=${month}&year=${year}`
		)
		return data
	} catch (error) {
		console.log('error =', error)
	}
}
