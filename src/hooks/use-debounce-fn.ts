import { useCallback, useRef } from 'react'

export function useDebounceFn<T extends (...args: Parameters<T>) => void>(
	callback: T,
	delay = 300,
): T {
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	return useCallback(
		((...args: Parameters<T>) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}
			timerRef.current = setTimeout(() => {
				callback(...args)
			}, delay)
		}) as T,
		[callback, delay],
	)
}
