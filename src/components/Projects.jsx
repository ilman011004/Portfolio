import { useState } from 'react'
import Section from './Section'
import { projects } from '../data'

const filters = ['Semua', 'Web', 'Aplikasi']

function Thumb({ project }) {
  const [failed, setFailed] = useState(false)
  if (project.image && !failed) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg bg-canvas">
        <img
          src={project.image}
          alt={`Tampilan proyek ${project.title}`}
          onError={() => setFailed(true)}
          loading="lazy"
          className="size-full object-contain"
        />
      </div>
    )
  }
  return (
    <div
      className="canvas-grid flex aspect-[16/10] w-full items-end rounded-lg border border-line bg-canvas p-3"
      aria-hidden="true"
    >
      <span className="rounded bg-sheet px-2 py-1 text-xs font-semibold text-muted">{project.type}</span>
    </div>
  )
}

function Links({ project, dark = false }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 font-semibold">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full px-5 py-2 transition-colors ${
            dark ? 'bg-marigold text-ink hover:bg-white' : 'bg-cobalt text-white hover:bg-cobalt-deep'
          }`}
        >
          Buka website
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className={`underline decoration-2 underline-offset-4 ${
            dark ? 'hover:text-marigold' : 'hover:text-cobalt'
          }`}
        >
          Lihat di GitHub
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('Semua')
  const list = projects.filter((p) => active === 'Semua' || p.type === active)
  const featured = list.find((p) => p.featured)
  const rest = list.filter((p) => p !== featured)

  return (
    <Section id="proyek" title="Proyek" intro="Beberapa proyek web dan aplikasi yang sudah saya kerjakan. Kode lengkapnya ada di GitHub.">
      <div role="group" aria-label="Filter proyek" className="mb-8 flex gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`rounded-full border-2 px-5 py-1.5 font-semibold transition-colors ${
              active === f ? 'border-ink bg-ink text-sheet' : 'border-line hover:border-ink'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {featured && (
        <article className="mb-6 grid gap-6 rounded-2xl bg-ink p-5 text-sheet md:grid-cols-2 md:p-8">
          <Thumb project={featured} />
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-3xl font-extrabold tracking-tight">{featured.title}</h3>
            <p className="mt-3 text-[#c9cde0]">{featured.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <li key={s} className="rounded-full bg-marigold px-3 py-1 text-sm font-semibold text-ink">
                  {s}
                </li>
              ))}
            </ul>
            <Links project={featured} dark />
          </div>
        </article>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <article key={p.title} className="flex flex-col rounded-xl border border-line bg-sheet p-4">
            <Thumb project={p} />
            <h3 className="mt-4 font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-1 flex-1 text-[0.97rem] text-muted">{p.description}</p>
            {p.stack.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full bg-canvas px-2.5 py-0.5 text-sm font-medium">
                    {s}
                  </li>
                ))}
              </ul>
            )}
            <Links project={p} />
          </article>
        ))}
      </div>
    </Section>
  )
}