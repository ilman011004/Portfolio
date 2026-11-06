import { profile } from '../data'

const items = [
  { label: 'WhatsApp', value: profile.phone, href: `https://wa.me/${profile.whatsapp}` },
  { label: 'LinkedIn', value: 'nafianilman', href: profile.linkedin },
  { label: 'Instagram', value: `@${profile.instagramHandle}`, href: profile.instagram },
  { label: 'GitHub', value: 'ilman011004', href: profile.github },
]

export default function Contact() {
  return (
    <section id="kontak" className="bg-ink py-16 text-sheet md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Punya proyek atau lowongan untuk saya?
        </h2>
        <p className="mt-4 max-w-xl text-lg text-[#c9cde0]">
          Kirim pesan lewat salah satu kontak di bawah. Saya biasanya membalas dalam satu hari.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all rounded-full bg-marigold px-6 py-3 text-lg font-bold text-ink transition-colors hover:bg-white"
        >
          {profile.email}
        </a>

        <ul className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <li key={i.label}>
              <a href={i.href} target="_blank" rel="noreferrer" className="group block border-t border-[#3a3f57] pt-3">
                <span className="block text-sm text-[#9aa0ba]">{i.label}</span>
                <span className="font-semibold group-hover:text-marigold">{i.value}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-sm text-[#9aa0ba]">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </section>
  )
}