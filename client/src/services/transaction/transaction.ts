import type {
	CreateDataTransaction,
	TransactionModelUpdate
} from '@models/TransactionModel.ts'
import { instance } from '../api.ts'

const URL = '/transactions'

export const transactionCreate = async (
	createDataTransaction: CreateDataTransaction
) => {
	try {
		console.log(createDataTransaction)
		const { data } = await instance.post(URL, createDataTransaction)
		return data
	} catch (error) {
		console.log('error =', error)
	}
}

export const transactionDelete = async (id: number) => {
	try {
		const { data } = await instance.delete(`${URL}/${id}`)
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

export const transactionUpdate = async (data: TransactionModelUpdate) => {}
