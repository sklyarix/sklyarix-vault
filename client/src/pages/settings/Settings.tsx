import { useState } from 'react'
import { useCategoryCreate } from '../../hooks/useCategoryCreate.ts'
import { useCategoryGetAll } from '../../hooks/useCategoryGetAll.ts'

const SettingsPage = () => {
	const [input, setInput] = useState('')
	const { mutate: createCategory } = useCategoryCreate()
	const { data: categoryList, isSuccess, isLoading } = useCategoryGetAll()
	const addCategory = () => {
		createCategory({ name: input })
		setInput('')
	}

	return (
		<div>
			<div className='mt-6'>
				<p className='text-lg font-semibold text-gray-800 mb-2'>
					Ваши категории:
				</p>

				{isSuccess ? (
					<ul className='space-y-1 text-base text-gray-700 list-disc list-inside'>
						{categoryList.length > 0 ? (
							categoryList.map(category => (
								<li key={category.id} className='pl-1'>
									{category.name}
								</li>
							))
						) : (
							<li className='text-gray-500 italic'>Нет категорий</li>
						)}
					</ul>
				) : (
					isLoading && (
						<p className='text-sm text-gray-500 italic'>Загрузка...</p>
					)
				)}
			</div>

			<div className='flex items-center gap-2 mt-4'>
				<input
					type='text'
					value={input}
					onChange={e => setInput(e.target.value)}
					placeholder='Новая категория'
					className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full text-base'
				/>
				<button
					onClick={addCategory}
					className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200'
				>
					Добавить
				</button>
			</div>
		</div>
	)
}
export default SettingsPage
