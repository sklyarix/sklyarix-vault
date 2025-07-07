import { useState } from 'react'

export type AlertType = 'success' | 'error'

export interface AlertItem {
	id: number
	type: AlertType
}

export const useAlerts = () => {
	const [alerts, setAlerts] = useState<AlertItem[]>([])

	const addAlert = (type: AlertType, duration = 3000) => {
		const id = Date.now()

		setAlerts(prev => [...prev, { id, type }])

		setTimeout(() => {
			setAlerts(prev => prev.filter(alert => alert.id !== id))
		}, duration)
	}

	return { alerts, addAlert }
}
