// Reusable page hero banner for inner pages (About, Team, etc.)
export default function PageHero({ label, title, highlight, subtitle }) {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f3ecdf]">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg, #b28a3b 0px, #b28a3b 1px,
              transparent 1px, transparent 60px
            )`,
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] rounded-full bg-[#c7b089]/25 blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {label && (
          <p className="text-[10px] tracking-[0.55em] uppercase text-[#9b7630] mb-5">{label}</p>
        )}
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1f2430] leading-tight mb-6">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-[#b28a3b]">{highlight}</span>
            </>
          )}
        </h1>
        {subtitle && (
          <p className="text-[#5f6270] text-base md:text-lg max-w-2xl leading-relaxed font-light">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c7b089]/80 to-transparent" />
    </section>
  )
}
