import { useCallback, useRef } from 'react'

type UseLongPressOptions = {
	delay?: number // default: 800ms
}

export const useLongPress = (
	onLongPress: () => void,
	{ delay = 800 }: UseLongPressOptions = {}
) => {
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const start = useCallback(() => {
		timerRef.current = setTimeout(() => {
			onLongPress()
		}, delay)
	}, [onLongPress, delay])

	const clear = useCallback(() => {
		if (timerRef.current) {
			console.log('ewe')
			clearTimeout(timerRef.current)
			timerRef.current = null
		}
	}, [])

	return {
		onMouseDown: start,
		onTouchStart: start,
		onMouseUp: clear,
		onMouseLeave: clear,
		onTouchEnd: clear
	}
}
