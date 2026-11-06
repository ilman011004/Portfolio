import Section from './Section'
import { experiences } from '../data'

const kindColor = {
  Desain: 'bg-marigold text-ink',
  Pengembangan: 'bg-cobalt text-white',
  Administrasi: 'bg-ink text-sheet',
}

export default function Experience() {
  return (
    <Section id="pengalaman" title="Pengalaman" intro="Dari yang terbaru ke yang paling awal.">
      <ol className="relative space-y-10 border-l-2 border-ink pl-6 md:pl-10">
        {experiences.map((e) => (
          <li key={e.role + e.period} className="relative">
            <span className="absolute -left-[33px] top-2 size-4 rounded-full border-2 border-ink bg-sheet md:-left-[49px]" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="font-semibold">{e.period}</p>
              <span className="text-muted">{e.duration}</span>
              <span className={`rounded-full px-3 py-0.5 text-sm font-semibold ${kindColor[e.kind]}`}>{e.kind}</span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight">{e.role}</h3>
            <p className="mt-1 text-muted">
              {e.org}, {e.place}
            </p>
            <ul className="mt-4 max-w-2xl list-disc space-y-1.5 pl-5 marker:text-cobalt">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}