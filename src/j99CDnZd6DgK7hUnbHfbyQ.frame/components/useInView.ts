import { useEffect, useRef, useState } from 'react'

/** Flags an element once it enters the viewport (Intersection Observer), then stops observing. */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, visible }
}
