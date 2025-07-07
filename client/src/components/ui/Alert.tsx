interface AlertProps {
	title?: string
	type: 'success' | 'error'
	autoClose?: boolean
	duration?: number // в миллисекундах
}

const Alert = ({ title = '', type }: AlertProps) => {
	const styles = {
		success: 'bg-green-100 text-green-800',
		error: 'bg-red-100 text-red-800'
	}

	return (
		<div
			className={`rounded px-4 py-3 text-sm font-medium transition-opacity  ${styles[type]}`}
		>
			<div className='font-medium'>{title ? title : type}</div>
		</div>
	)
}
export default Alert
