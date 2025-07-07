import type { CategoryModel } from '@models/CategoryModel.ts'
import { useQuery } from '@tanstack/react-query'
import { categoryGetAll } from '../services/category/category.ts'

export const useCategoryGetAll = () => {
	return useQuery<CategoryModel[]>({
		queryKey: ['categories'],
		queryFn: () => categoryGetAll()
	})
}
/*
import { useQuery } from '@tanstack/react-query'

const { data: categories } = useQuery(
		queryKey: ['categories'],
		queryFn: categoryGetAll
 */
