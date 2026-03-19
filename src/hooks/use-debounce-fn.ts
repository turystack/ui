import { useCallback, useEffect, useRef } from 'react'

export function useDebounceFn<T extends (...args: Parameters<T>) => void>(
	callback: T,
	delay = 300,
): T {
	const callbackRef = useRef(callback)
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	useEffect(() => {
		callbackRef.current = callback
	})

	return useCallback(
		((...args: Parameters<T>) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}
			timerRef.current = setTimeout(() => {
				callbackRef.current(...args)
			}, delay)
		}) as T,
		[
			delay,
		],
	)
}
