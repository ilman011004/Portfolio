import Section from './Section'
import { profile } from '../data'

const handles = ['-left-[7px] -top-[7px]', '-right-[7px] -top-[7px]', '-left-[7px] -bottom-[7px]', '-right-[7px] -bottom-[7px]']

function PhotoFrame() {
  return (
    <div className="relative mb-12 w-full max-w-sm justify-self-center md:justify-self-end">
      <img
        src={profile.photo}
        alt={`Foto ${profile.name}`}
        className="aspect-[4/5] w-full border-2 border-cobalt object-cover object-top"
      />
      {handles.map((pos) => (
        <span key={pos} className={`absolute size-3 border-2 border-cobalt bg-sheet ${pos}`} aria-hidden="true" />
      ))}
      <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-cobalt px-2.5 py-1 text-sm font-semibold text-white">
        {profile.name}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <Section id="tentang" title="Tentang saya" tone="sheet">
      <div
        className={`grid items-center gap-10 ${profile.photo ? 'md:grid-cols-[1.3fr_1fr] md:gap-20' : ''}`}
      >
        <div>
          <div className="max-w-prose space-y-5 text-lg">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 max-w-prose divide-y divide-line border-y border-line">
            {profile.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                <dt className="text-muted">{f.label}</dt>
                <dd className="font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>

          {profile.cv && (
            <a
              href={profile.cv}
              download
              className="mt-8 inline-block rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition-colors hover:bg-ink hover:text-sheet"
            >
              Unduh CV
            </a>
          )}
        </div>

        {profile.photo && <PhotoFrame />}
      </div>
    </Section>
  )
}