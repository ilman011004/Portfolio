export default function Section({ id, title, intro, children, tone = 'plain' }) {
  return (
    <section
      id={id}
      className={`border-b border-line py-16 md:py-24 ${tone === 'sheet' ? 'bg-sheet' : ''}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}