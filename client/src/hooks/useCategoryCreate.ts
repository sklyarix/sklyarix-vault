import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
	categoryCreate,
	type CreateDataCategory
} from '../services/category/category.ts'

export const useCategoryCreate = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (data: CreateDataCategory) => categoryCreate(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['categories'] })
		}
	})
}
