import { useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#desain', label: 'Desain' },
  { href: '#pengalaman', label: 'Pengalaman' },
  { href: '#sertifikat', label: 'Sertifikat' },
  { href: '#kontak', label: 'Kontak' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Navigasi utama">
        <a href="#" className="font-display text-lg font-extrabold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-[0.95rem] font-medium text-muted transition-colors hover:bg-ink hover:text-sheet"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-full border border-line px-4 py-1.5 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Tutup' : 'Menu'}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-line bg-canvas px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-base font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}