import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'

const stats = [
  { value: '25+', label: 'Years of Practice' },
  { value: '1,400+', label: 'Cases Handled' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12', label: 'Senior Advocates' },
]

const practices = [
  { icon: '⚖', title: 'Corporate & Commercial', desc: 'Company formation, M&A, shareholders agreements, and board advisory under Kenyan company law.' },
  { icon: '🏛', title: 'Civil Litigation', desc: 'Representation before the High Court, Court of Appeal, and Supreme Court of Kenya.' },
  { icon: '🏠', title: 'Conveyancing & Land', desc: 'Land transfers, NLC matters, title disputes, and leasehold under the Land Registration Act.' },
  { icon: '👨‍👩‍👧', title: 'Family & Succession', desc: 'Divorce, child custody, matrimonial property, and estate administration under Kenyan law.' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#c7b089]/30 blur-3xl" />
        </div>

        {/* Left vertical text */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
          <div className="h-24 w-px bg-[#b28a3b]/40" />
          <span
            className="text-[9px] tracking-[0.5em] uppercase text-[#7a7f89]"
            style={{ writingMode: 'vertical-rl' }}
          >
            Advocates of the High Court of Kenya
          </span>
          <div className="h-24 w-px bg-[#b28a3b]/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#9b7630] mb-8">
            Advocates & Solicitors · Nairobi, Kenya
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-[#1f2430]">
            Justice
            <br />
            <span className="text-[#b28a3b]">Pursued</span>
            <br />
            With Precision
          </h1>
          <p className="text-[#5f6270] text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light">
            A premier Nairobi law firm offering expert legal counsel across corporate, civil, family, and land matters under Kenyan law.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-10 py-4 bg-[#b28a3b] text-[#fbf8f2] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#c49b49] transition-all duration-300 w-full sm:w-auto"
            >
              Request a Consultation
            </Link>
            <Link
              to="/practice-areas"
              className="px-10 py-4 border border-[#d7c4a1] text-[#4f5563] text-[11px] tracking-[0.3em] uppercase hover:border-[#b28a3b] hover:text-[#b28a3b] transition-all duration-300 w-full sm:w-auto"
            >
              Our Practice Areas
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#d7c4a1] bg-[#fbf8f2]/90 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#d7c4a1]">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center px-4 py-2">
                <p className="font-serif text-2xl md:text-3xl font-bold text-[#9b7630]">{value}</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#7a7f89] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICE AREAS PREVIEW ────────────── */}
      <section className="py-28 px-6 bg-[#f8f3ea]">
        <SectionDivider />
        <div className="max-w-7xl mx-auto mt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase text-[#9b7630] mb-4">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1f2430] leading-tight">
                Areas of <span className="text-[#b28a3b]">Practice</span>
              </h2>
            </div>
            <Link
              to="/practice-areas"
              className="text-[11px] tracking-[0.3em] uppercase text-[#9b7630] border-b border-[#c7b089] pb-1 hover:border-[#9b7630] transition-all self-end"
            >
              View All Areas →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {practices.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group bg-[#fbf8f2] p-8 hover:bg-[#fffdf8] transition-all duration-300 relative overflow-hidden border border-[#e3d6bd] hover:border-[#c7b089] shadow-sm"
              >
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#b28a3b]/0 group-hover:bg-[#b28a3b]/50 transition-all duration-500" />
                <div className="text-3xl mb-5">{icon}</div>
                <h3 className="font-serif text-xl font-bold text-[#1f2430] mb-3 group-hover:text-[#9b7630] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-[#5f6270] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────── */}
      <section className="py-24 px-6 bg-[#efe7d8]">
        <SectionDivider />
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#9b7630] mb-4">Our Firm</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1f2430] leading-tight mb-6">
              Trusted Advocates<br />
              <span className="text-[#b28a3b]">Across Kenya</span>
            </h2>
            <p className="text-[#5f6270] text-sm leading-relaxed mb-6">
              Lexara Advocates was founded in Nairobi in 1998 with a core conviction: every Kenyan deserves access to the same quality of legal representation once reserved for large corporates and institutions.
            </p>
            <p className="text-[#5f6270] text-sm leading-relaxed mb-10">
              We appear regularly before the Environment & Land Court, Employment & Labour Relations Court, High Court, Court of Appeal, and the Supreme Court of Kenya.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 border border-[#b28a3b] text-[#8a6727] text-[11px] tracking-[0.3em] uppercase hover:bg-[#b28a3b] hover:text-[#fbf8f2] transition-all duration-300"
            >
              About the Firm
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'High Court', sub: 'Advocates & Solicitors' },
              { title: 'Court of Appeal', sub: 'Certified Advocates' },
              { title: 'Supreme Court', sub: 'Represented Cases' },
              { title: 'ELC & ELRC', sub: 'Specialist Courts' },
            ].map(({ title, sub }) => (
              <div
                key={title}
                className="border border-[#d7c4a1] p-6 bg-[#fbf8f2] hover:border-[#b28a3b]/60 transition-colors shadow-sm"
              >
                <div className="w-2 h-2 bg-[#b28a3b] mb-4" />
                <p className="font-serif text-base font-bold text-[#1f2430] mb-1">{title}</p>
                <p className="text-[10px] tracking-[0.15em] text-[#7a7f89] uppercase">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────── */}
      <section className="py-20 px-6 bg-[#f3ecdf] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c7b089]/15" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b28a3b]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b28a3b]/40 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#9b7630] mb-6">Ready to Talk?</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1f2430] mb-6">
            Your First Consultation<br />
            <span className="text-[#b28a3b]">Is Always Free</span>
          </h2>
          <p className="text-[#5f6270] text-sm leading-relaxed max-w-lg mx-auto mb-10">
            Speak directly with one of our advocates. We'll give you an honest, clear assessment of your legal matter — no jargon, no obligation.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-[#b28a3b] text-[#fbf8f2] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#c49b49] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
