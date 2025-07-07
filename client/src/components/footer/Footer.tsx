import type { TransactionModel } from '@models/TransactionModel.ts'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select from 'react-select'
import { useAlerts } from '../../hooks/useAlerts.ts'
import { transactionCreate } from '../../services/transaction/transaction.ts'
import Alert from '../ui/Alert.tsx'
import Modal from '../ui/Modal.tsx'

type FormValues = {
	amount: number
	date: string
	type: 'INCOME' | 'EXPENSE'
	comment?: string
	categoryId?: number
}

const Footer = () => {
	const { alerts, addAlert } = useAlerts()
	const queryClient = useQueryClient()

	const [isShowModal, setShowModal] = useState<boolean>(false)

	const handleClick = () => {
		setShowModal(!isShowModal)
	}

	const { control, register, handleSubmit, reset } = useForm<TransactionModel>()

	const optionsTypeTransaction = [
		{ value: 'INCOME', label: 'Доход' },
		{ value: 'EXPENSE', label: 'Расход' }
	]

	const optionsCategoryTransaction = [
		{ value: 1, label: 'Продукты' },
		{ value: 2, label: 'Транспорт' }
	]
	const sendForm = async (formData: FormValues) => {
		try {
			const transaction = await transactionCreate(formData)

			if (transaction) {
				addAlert('success')
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
		<div>
			<footer className='absolute right-0 left-0 container bottom-0 bg-white'>
				<nav className='flex justify-between items-center'>
					<div className='h-10 w-10 bg-purple-100 flex items-center justify-center rounded-full'>
						<span className='text-2xl'>🏠</span>
					</div>
					<div className='h-10 w-10  flex items-center justify-center rounded-full'>
						<span className='text-2xl'>📊</span>
					</div>
					<button
						className='h-12 w-12 bg-purple-main flex items-center justify-center rounded-full'
						onClick={handleClick}
					>
						<span className='text-4xl'>🫰</span>
					</button>
					<div className='h-10 w-10 flex items-center justify-center rounded-full'>
						<span className='text-2xl'>🗓️</span>
					</div>
					<div className='h-10 w-10 flex items-center justify-center rounded-full'>
						<span className='text-2xl'>⚙️</span>
					</div>
				</nav>
			</footer>
			<Modal isOpen={isShowModal} onClose={handleClick}>
				<div className='content'>
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
										onChange={selectedOption =>
											field.onChange(selectedOption?.value)
										}
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
										onChange={selectedOption =>
											field.onChange(selectedOption?.value)
										}
									/>
								)}
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='amount' className='block text-sm font-medium '>
								Количество
							</label>
							<input
								type='number'
								id='amount'
								{...register('amount', { valueAsNumber: true })}
								className='mt-1 w-full text-gray-700 rounded-md border border-gray-300 p-1 text-xl'
							/>
						</div>

						<div className='mb-4'>
							<label htmlFor='date' className='block text-sm font-medium '>
								Дата расхода
							</label>
							<input
								type='date'
								id='date'
								{...register('date')}
								className='mt-1 w-full text-gray-700 rounded-md border border-gray-300 p-1 text-xl'
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
							className='px-4 py-2 bg-blue-600 text-white rounded'
						>
							Отправить
						</button>
					</form>
				</div>
			</Modal>
			<div className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50 space-y-2'>
				{alerts.map(alert => (
					<Alert key={alert.id} type={alert.type} />
				))}
			</div>
		</div>
	)
}
export default Footer
