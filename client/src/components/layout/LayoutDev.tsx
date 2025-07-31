import { Outlet } from 'react-router-dom'
import { dataTg } from '../../dev.ts'

import Footer from '../footer/Footer.tsx'
import Header from '../header/Header.tsx'
import BottomModal from '../ui/BottomModal.tsx'

const LayoutDev = () => {
	const { user, isTg, webApp } = dataTg

	console.log(import.meta.env.VITE_API_URL)

	return (
		<div className='bg-soft-white relative m-auto flex min-h-screen max-w-lg flex-col overflow-hidden'>
			{isTg && webApp && user ? (
				<>
					<Header user={user} />
					<main className='scrollbar-hidden absolute top-20 right-0 left-0 container h-[calc(100vh-200px)] overflow-y-auto'>
						<Outlet />
					</main>
					<Footer />
					<BottomModal />
					
					<Modal isOpen={isShowModal} onClose={handleClick}>
						<div className='content'></div>
					</Modal>
				</>
			) : (
				<div>Это приложение работает только в TG 😢</div>
			)}
		</div>
	)
}

export default LayoutDev
