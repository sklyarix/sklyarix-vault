import { Outlet } from 'react-router-dom'
import { useTg } from '../../hooks/useTg.ts'
import Footer from '../footer/Footer.tsx'
import Header from '../header/Header.tsx'
import BottomModal from '../ui/BottomModal.tsx'

const Layout = () => {
	const { isTg, webApp, user } = useTg()

	console.log('isTg =', isTg)
	console.log('webApp =', webApp)
	console.log('user =', user)
	return (
		<div
			className='flex flex-col
		min-h-screen overflow-hidden max-w-lg relative m-auto relative bg-soft-white'
		>
			{isTg && webApp && user ? (
				<>
					<Header user={user} />
					<main className='container overflow-y-auto absolute left-0 right-0 top-20 h-[calc(100vh-200px)] scrollbar-hidden '>
						<Outlet />
					</main>
					<Footer />

					<BottomModal />
				</>
			) : (
				<div>Это приложение работает только в TG 😢</div>
			)}
		</div>
	)
}

export default Layout
