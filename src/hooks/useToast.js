import { useCallback, useRef, useState } from 'react'

export function useToast() {
    const [toast, setToast] = useState('')
    const timerRef = useRef(null)

    const notify = useCallback((message) => {
        setToast(message)
        if (timerRef.current) window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => setToast(''), 3000)
    }, [])

    return { toast, notify }
}
