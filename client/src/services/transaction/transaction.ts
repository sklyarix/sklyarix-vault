import type { TransactionModel } from '@models/TransactionModel.ts'

import { instance } from '../api.ts'

const URL = '/transaction'

export const transactionCreate = async (
	createDataTransaction: TransactionModel
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
		const { data } = await instance.get(`${URL}/date?sortBy=date&order=desc`)
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
