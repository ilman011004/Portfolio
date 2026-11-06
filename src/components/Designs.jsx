import { useState } from 'react'
import Section from './Section'
import { designs } from '../data'

const ratios = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  landscape: 'aspect-[16/10]',
}

function Frame({ d }) {
  const [failed, setFailed] = useState(false)
  const ok = d.image && !failed
  return (
    <figure className="mb-5 break-inside-avoid">
      <div className={`${ratios[d.ratio] ?? ratios.square} overflow-hidden rounded-lg border border-line bg-canvas`}>
        {ok ? (
          <img
            src={d.image}
            alt={d.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className="size-full object-cover"
          />
        ) : (
          <div className="canvas-grid flex size-full items-center justify-center p-4 text-center text-sm text-muted">
            Tambahkan gambar di public/designs
          </div>
        )}
      </div>
      <figcaption className="mt-2">
        <span className="block font-semibold leading-snug">{d.title}</span>
        <span className="text-sm text-muted">{d.client}</span>
      </figcaption>
    </figure>
  )
}

export default function Designs() {
  return (
    <Section
      id="desain"
      title="Desain grafis"
      intro="Poster dan konten visual untuk event, edukasi, dan media sosial, dengan branding, warna, dan tipografi yang konsisten."
      tone="sheet"
    >
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {designs.map((d) => (
          <Frame key={d.title} d={d} />
        ))}
      </div>
    </Section>
  )
}