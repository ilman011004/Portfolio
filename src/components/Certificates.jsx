import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import { certificates } from '../data'

function Chevron({ dir }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M12.5 4L6.5 10l6 6' : 'M7.5 4l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowButton({ dir, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'left' ? 'Sertifikat sebelumnya' : 'Sertifikat berikutnya'}
      className="grid size-11 place-items-center rounded-full border-2 border-ink transition-colors hover:bg-ink hover:text-sheet disabled:cursor-not-allowed disabled:border-line disabled:text-line disabled:hover:bg-transparent disabled:hover:text-line"
    >
      <Chevron dir={dir} />
    </button>
  )
}

export default function Certificates() {
  const trackRef = useRef(null)
  const dialogRef = useRef(null)
  const [active, setActive] = useState(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const updateEdge = () => {
    const el = trackRef.current
    if (!el) return
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    })
  }

  useEffect(() => {
    updateEdge()
    window.addEventListener('resize', updateEdge)
    return () => window.removeEventListener('resize', updateEdge)
  }, [])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 16 : 320
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' })
  }

  const open = (c) => {
    setActive(c)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()

  return (
    <Section id="sertifikat" title="Sertifikat" tone="sheet">
      <div className="mb-4 flex justify-end gap-2">
        <ArrowButton dir="left" onClick={() => scrollByCard(-1)} disabled={edge.start} />
        <ArrowButton dir="right" onClick={() => scrollByCard(1)} disabled={edge.end} />
      </div>

      <ul
        ref={trackRef}
        onScroll={updateEdge}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {certificates.map((c) => (
          <li
            key={c.title}
            className="flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-line bg-canvas sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            {c.image && (
              <button
                type="button"
                onClick={() => open(c)}
                aria-label={`Perbesar gambar ${c.title}`}
                className="block w-full cursor-zoom-in border-b border-line bg-sheet"
              >
                <img
                  src={c.image}
                  alt={`Sertifikat: ${c.title}`}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-contain"
                />
              </button>
            )}
            <div className="flex flex-1 items-start justify-between gap-3 p-4">
              <div>
                <h3 className="line-clamp-2 font-display text-base font-bold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">{c.issuer}</p>
              </div>
              <span className="rounded-full bg-ink px-3 py-1 text-sm font-semibold text-sheet">{c.year}</span>
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
        onClose={() => setActive(null)}
        className="m-auto max-h-[92vh] w-[min(92vw,64rem)] rounded-xl bg-sheet p-3 backdrop:bg-ink/70"
      >
        {active && (
          <>
            <img
              src={active.image}
              alt={`Sertifikat: ${active.title}`}
              className="max-h-[78vh] w-full object-contain"
            />
            <div className="flex items-center justify-between gap-4 px-2 pt-3">
              <p className="font-semibold">{active.title}</p>
              <button
                type="button"
                onClick={close}
                className="rounded-full border-2 border-ink px-4 py-1.5 font-semibold transition-colors hover:bg-ink hover:text-sheet"
              >
                Tutup
              </button>
            </div>
          </>
        )}
      </dialog>
    </Section>
  )
}