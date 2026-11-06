import {
  SiLaravel,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiFigma,
} from 'react-icons/si'
import { skills } from '../data'

// Ikon Canva sederhana (lingkaran gradasi dengan huruf C), dibuat sendiri
function CanvaIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="canva-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="12" fill="url(#canva-grad)" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fill="#fff"
      >
        C
      </text>
    </svg>
  )
}

const icons = {
  Laravel: { Icon: SiLaravel, color: '#FF2D20' },
  PHP: { Icon: SiPhp, color: '#777BB4' },
  React: { Icon: SiReact, color: '#087EA4' },
  'Next.js': { Icon: SiNextdotjs, color: '#151826' },
  'Express.js': { Icon: SiExpress, color: '#151826' },
  JavaScript: { Icon: SiJavascript, color: '#D4B106' },
  Bootstrap: { Icon: SiBootstrap, color: '#7952B3' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06B6D4' },
  Figma: { Icon: SiFigma, color: '#F24E1E' },
  Canva: { Icon: CanvaIcon },
}

function Track({ items, hidden }) {
  return (
    <ul className="flex shrink-0 items-center gap-4 pr-4" aria-hidden={hidden || undefined}>
      {items.map((name) => {
        const entry = icons[name]
        return (
          <li
            key={name}
            className="flex items-center gap-3 rounded-full border border-line bg-sheet px-5 py-2.5 font-semibold"
          >
            {entry && <entry.Icon size={24} color={entry.color} aria-hidden="true" />}
            <span className="whitespace-nowrap">{name}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default function Skills() {
  const items = skills.flatMap((g) => g.items)

  return (
    <section aria-labelledby="judul-skill" className="overflow-hidden border-b border-line py-8">
      <h2 id="judul-skill" className="sr-only">
        Skill
      </h2>
      <div className="marquee-wrap">
        <div className="marquee flex w-max">
          <Track items={items} />
          <Track items={items} hidden />
          <Track items={items} hidden />
          <Track items={items} hidden />
        </div>
      </div>
    </section>
  )
}