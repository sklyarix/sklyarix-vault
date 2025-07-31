import type { TransactionModel } from '@models/TransactionModel.ts'
import { useForm } from 'react-hook-form'
import { useCategoryGetAll } from '../../hooks/useCategoryGetAll.ts'

const TransactionForm = (props: any) => {
	
	const { data: categoryList } = useCategoryGetAll()
	
	const optionsTypeTransaction = [
		{ value: 'income', label: 'Доход' },
		{ value: 'expense', label: 'Расход' }
	]

	const optionsCategoryTransaction =
		categoryList?.map(({ id, name }: CategoryModel) => ({
			value: id,
			label: name
		})) || []
	
	
	const { control, register, handleSubmit, reset } = useForm<TransactionModel>()

	const sendForm = async (formData: FormValues) => {
		try {
			const queryClient = useQueryClient()
			const transaction = await transactionCreate(formData)

			if (transaction) {
				setShowModal(false)
				reset()
				await queryClient.invalidateQueries({ queryKey: ['transactions'] })
				const currentData = new Date()
				await queryClient.invalidateQueries({
					queryKey: [
						'transactions-by-month',
						currentData.getMonth() + 1,
						currentData.getFullYear()
					]
				})
			} else {
				addAlert('error')
			}
		} catch (error) {
			console.error('Ошибка:', error)
			addAlert('error')
		}
	}

	return (
		<form onSubmit={handleSubmit(sendForm)}>
			<div className='mb-4'>
				<label
					htmlFor='type'
					className='block text-sm font-medium text-gray-700'
				>
					Тип
				</label>
				<Controller
					name='type'
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							isSearchable={false}
							options={optionsTypeTransaction}
							placeholder='Выберите тип'
							aria-label='Тип транзакции'
							value={optionsTypeTransaction.find(
								opt => opt.value === field.value
							)}
							onChange={selectedOption => field.onChange(selectedOption?.value)}
						/>
					)}
				/>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='categoryId'
					className='block text-sm font-medium text-gray-700'
				>
					Тип
				</label>
				<Controller
					name='categoryId'
					control={control}
					render={({ field }) => (
						<Select
							{...field}
							isSearchable={false}
							options={optionsCategoryTransaction}
							placeholder='Выберите категорию'
							aria-label='Категория'
							value={optionsCategoryTransaction.find(
								opt => opt.value === field.value
							)}
							onChange={selectedOption => field.onChange(selectedOption?.value)}
						/>
					)}
				/>
			</div>

			<div className='mb-4'>
				<label htmlFor='amount' className='block text-sm font-medium'>
					Количество
				</label>
				<input
					type='number'
					id='amount'
					{...register('amount', { valueAsNumber: true })}
					className='mt-1 w-full rounded-md border border-gray-300 p-1 text-xl text-gray-700'
				/>
			</div>

			<div className='mb-4'>
				<label htmlFor='date' className='block text-sm font-medium'>
					Дата расхода
				</label>
				<input
					type='date'
					id='date'
					{...register('date')}
					className='mt-1 w-full rounded-md border border-gray-300 p-1 text-xl text-gray-700'
				/>
			</div>

			<div className='mb-4'>
				<label
					htmlFor='comment'
					className='block text-sm font-medium text-gray-700'
				>
					Комментарий
				</label>
				<textarea
					id='comment'
					{...register('comment')}
					rows={4}
					className='mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
					placeholder='Введите комментарий...'
				></textarea>
			</div>

			<button
				type='submit'
				className='rounded bg-blue-600 px-4 py-2 text-white'
			>
				Отправить
			</button>
		</form>
	)
}
export default TransactionForm
