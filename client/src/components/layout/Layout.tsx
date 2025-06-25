import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer.tsx'
import Header from '../header/Header.tsx'

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden max-w-lg relative m-auto relative bg-soft-white">
			<Header />

			<main className="container overflow-y-auto absolute left-0 right-0 top-20 h-[calc(100vh-200px)] scrollbar-hidden ">
				<Outlet />
			</main>

			<Footer />
		</div>
	)
}

export default Layout
