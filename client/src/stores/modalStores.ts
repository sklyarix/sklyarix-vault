import type { ReactNode } from 'react'
import { create } from 'zustand/react'

interface IModalStore {
	content: null | ReactNode
	isOpen: boolean
	openModal: (content: ReactNode) => void
	closeModal: () => void
}

export const useModalStore = create<IModalStore>(set => ({
	content: null,
	isOpen: false,
	openModal: (content: ReactNode) => set({ content, isOpen: true }),
	closeModal: () => set({ content: null, isOpen: false })
}))
