import { instance } from '../api.ts'

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
		console.log('data all', data)
		return data
	} catch (e) {
		console.log(e)
	}
}
