type HeaderProps = {
	user: WebAppUser
}

const Header = ({ user }: HeaderProps) => {
	return (
		<header className='top-0 absolute pb-4 border-b border-gray-300 left-0 right-0 container'>
			<div className='flex items-center justify-start gap-2 '>
				<div className='w-12 h-12 rounded-md bg-purple-main relative overflow-hidden'>
					<img
						src={user.photo_url}
						alt=''
						className='absolute left-0 top-0 w-full h-full'
					/>
				</div>
				<div>
					<div className='font-semibold text-sm'>{user.first_name}</div>
					<div className='font-light text-xs'>@{user.username}</div>
				</div>
			</div>
		</header>
	)
}
export default Header

/*
pt-4 pb-2
 */
