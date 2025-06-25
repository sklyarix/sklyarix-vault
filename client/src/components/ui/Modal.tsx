import type { ReactNode } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
				>
					✕
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
