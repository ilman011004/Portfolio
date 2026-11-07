import { useRef, useState } from 'react'
import { profile } from '../data'

function Cursor({ color, label, className, floatClass }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const origin = useRef({ x: 0, y: 0 })

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    origin.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    setDragging(true)
  }
  const onPointerMove = (e) => {
    if (!dragging) return
    setPos({ x: e.clientX - origin.current.x, y: e.clientY - origin.current.y })
  }
  const onPointerUp = () => setDragging(false)

  return (
    <div className={`absolute z-10 ${className}`} aria-hidden="true">
      <div className={floatClass}>
        <div
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, touchAction: 'none' }}
          className={dragging ? 'cursor-grabbing select-none' : 'cursor-grab select-none'}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill={color} className="drop-shadow">
            <path d="M2 2l7.5 18 2.6-7.4L19.5 10z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span
            className="-mt-1 ml-4 inline-block rounded-full px-3 py-1 text-sm font-semibold"
            style={{ background: color, color: color === '#ffc933' ? '#151826' : '#fff' }}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="canvas-grid overflow-hidden border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="relative mx-auto w-fit max-w-full">
          <div className="relative border-2 border-cobalt px-5 py-6 sm:px-10 sm:py-10">
            {['-left-[7px] -top-[7px]', '-right-[7px] -top-[7px]', '-left-[7px] -bottom-[7px]', '-right-[7px] -bottom-[7px]'].map(
              (pos) => (
                <span key={pos} className={`absolute size-3 border-2 border-cobalt bg-sheet ${pos}`} aria-hidden="true" />
              ),
            )}
            <h1 className="font-display text-[clamp(3.25rem,13vw,9.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
              Ilman
              <br />
              Nafian
            </h1>
          </div>

          <Cursor
            color="#2f4bff"
            label="Fullstack Developer"
            floatClass="float-a"
            className="cursor-dev -right-4 top-1/2 sm:-right-24 sm:top-[18%]"
          />

        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-16">
          <p className="text-lg text-muted sm:text-xl">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#proyek"
              className="rounded-full bg-cobalt px-6 py-3 font-semibold text-white transition-colors hover:bg-cobalt-deep"
            >
              Lihat proyek
            </a>
            <a
              href="#kontak"
              className="rounded-full border-2 border-ink px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-sheet"
            >
              Hubungi saya
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}