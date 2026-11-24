import React, { useEffect, useRef } from 'react'

export default function Background() {
  const glow = useRef(null)
  useEffect(() => {
    const move = (e) => {
      if (glow.current) glow.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-[120px] animate-blob" />
      <div className="absolute right-[-10rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-fuchsia-600/10 blur-[120px] animate-blob [animation-delay:-12s]" />
      <div ref={glow} className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full bg-violet-500/[0.06] blur-3xl transition-transform duration-200 ease-out md:block" />
    </div>
  )
}
