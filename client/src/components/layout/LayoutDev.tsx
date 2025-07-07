import { Outlet } from 'react-router-dom'

import Footer from '../footer/Footer.tsx'
import Header from '../header/Header.tsx'

const LayoutDev = () => {
	const isTg = true
	const webApp = true
	const user = {
		id: 123456789,
		first_name: 'Имя',
		last_name: 'Фамилия',
		username: 'nickname',
		language_code: 'ru'
	}
	console.log(import.meta.env.VITE_API_URL)
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
				</>
			) : (
				<div>Это приложение работает только в TG 😢</div>
			)}
		</div>
	)
}

export default LayoutDev
