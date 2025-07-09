import { instance } from '../api.ts'

export interface CreateDataCategory {
	name: string
}

export const categoryGetOne = async (categoryId: string) => {
	try {
		const { data } = await instance.get(`/category/${categoryId}`)
		return data
	} catch (e) {
		console.log(e)
	}
}
export const categoryGetAll = async () => {
	try {
		const { data } = await instance.get(`/category/`)
		return data
	} catch (e) {
		console.log(e)
	}
}
export const categoryCreate = async (
	createDataCategory: CreateDataCategory
) => {
	try {
		const { data } = await instance.post(`/category`, createDataCategory)
		return data
	} catch (error) {
		console.log('error =', error)
	}
}
