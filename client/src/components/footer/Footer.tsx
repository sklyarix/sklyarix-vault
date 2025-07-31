import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Footer = () => {
	const location = useLocation()
	//const { alerts, addAlert } = useAlerts()
	//const queryClient = useQueryClient()
	//const { data: categoryList } = useCategoryGetAll()

	const [isShowModal, setShowModal] = useState<boolean>(false)

	const handleClick = () => {
		setShowModal(!isShowModal)
	}

	return (
		<footer className='absolute right-0 bottom-0 left-0 container bg-white'>
			<nav className='flex items-center justify-between'>
				<NavLink
					to='/'
					end
					className={`flex h-10 w-10 items-center justify-center rounded-full ${location.pathname == '/' ? 'bg-purple-100' : ''}`}
				>
					<span className='text-2xl'>🏠</span>
				</NavLink>
				<NavLink
					to='/statistics'
					end
					className={`flex h-10 w-10 items-center justify-center rounded-full ${location.pathname == '/statistics' ? 'bg-purple-100' : ''}`}
				>
					<span className='text-2xl'>📊</span>
				</NavLink>
				<button
					className='bg-purple-main flex h-12 w-12 items-center justify-center rounded-full'
					onClick={handleClick}
				>
					<span className='text-4xl'>🫰</span>
				</button>
				<NavLink
					to='/calendar'
					end
					className={`flex h-10 w-10 items-center justify-center rounded-full ${location.pathname == '/calendar' ? 'bg-purple-100' : ''}`}
				>
					<span className='text-2xl'>🗓️</span>
				</NavLink>
				<NavLink
					to='/settings'
					end
					className={`flex h-10 w-10 items-center justify-center rounded-full ${location.pathname == '/settings' ? 'bg-purple-100' : ''}`}
				>
					<span className='text-2xl'>⚙️</span>
				</NavLink>
			</nav>
		</footer>
	)
}
export default Footer
/*
<div className='fixed top-4 left-1/2 z-50 -translate-x-1/2 transform space-y-2'>
				{alerts.map(alert => (
					<Alert key={alert.id} type={alert.type} />
				))}
			</div>
 */
