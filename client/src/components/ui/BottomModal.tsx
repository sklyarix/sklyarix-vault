import { useModalStore } from '../../stores/modalStores.ts'

const BottomModal = () => {
	const { content, isOpen, closeModal } = useModalStore()

	return (
		<div>
			<div
				className={`${isOpen ? '' : 'hidden'} absolute inset-0 bg-black/50`}
			></div>
			<div
				className={`
          absolute w-full z-50 bg-black text-white p-4 pt-5 rounded-t-2xl shadow-xl
          transition-all duration-300 ease-in-out ${isOpen ? 'bottom-0' : '-bottom-[100%]'}
        `}
			>
				<div className='relative flex justify-between items-center mb-3'>
					<button
						className=' text-2xl hover:text-gray-300 w-[30px] h-[30px] '
						aria-label='Закрыть'
					>
						⬅️
					</button>
					<div className='text-lg font-semibold text-center w-[calc(100% - 60px)]'>
						Title
					</div>
					<button
						onClick={closeModal}
						className='w-[30px] text-white text-2xl'
						aria-label='Закрыть'
					>
						✕
					</button>
				</div>
				<div>{content}</div>
			</div>
		</div>
	)
}
export default BottomModal
