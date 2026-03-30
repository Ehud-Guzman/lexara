import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'

const stats = [
  { value: '25+', label: 'Years of Practice' },
  { value: '1,400+', label: 'Cases Handled' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12', label: 'Senior Advocates' },
]

const practices = [
  {
    title: 'Corporate & Commercial',
    desc: 'Company formation, M&A, shareholders agreements, and board advisory under Kenyan company law.',
    image: '/images/practice-corporate.jpg',
  },
  {
    title: 'Civil Litigation',
    desc: 'Representation before the High Court, Court of Appeal, and Supreme Court of Kenya.',
    image: '/images/practice-litigation.jpg',
  },
  {
    title: 'Conveyancing & Land',
    desc: 'Land transfers, NLC matters, title disputes, and leasehold under the Land Registration Act.',
    image: '/images/practice-land.jpg',
  },
  {
    title: 'Family & Succession',
    desc: 'Divorce, child custody, matrimonial property, and estate administration under Kenyan law.',
    image: '/images/practice-family.jpeg',
  },
]

export default function Home() {
  return (
    <>
{/* ── HERO ─────────────────────────────── */}
{/* Drop your image at /public/images/hero-bg.jpg */}
<section className="relative min-h-screen flex items-center overflow-hidden">

  {/* Background layers */}
  <div className="absolute inset-0">
    <img
      src="/images/hero-bg.jpg"
      alt=""
      className="w-full h-full object-cover object-center"
      onError={(e) => { e.target.style.display = 'none' }}
    />
    {/* Fallback shown when no image — your existing bg */}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c7b089]/30 blur-3xl" />
    </div>
    {/* Cream overlay over real image — preserves your palette */}
    <div className="absolute inset-0 bg-[#f3ecdf]/75" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#f3ecdf]/90 via-[#f3ecdf]/60 to-[#f3ecdf]/15" />
  </div>

  {/* Left vertical text */}
  <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
    <div className="h-20 w-px bg-[#b28a3b]/40" />
    <span
      className="text-[9px] tracking-[0.5em] uppercase text-[#7a7f89]"
      style={{ writingMode: 'vertical-rl' }}
    >
      Advocates of the High Court of Kenya
    </span>
    <div className="h-20 w-px bg-[#b28a3b]/40" />
  </div>

  {/* Main content — left-aligned, not centered */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-36">
    <div className="max-w-2xl">

      {/* Eyebrow */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px w-8 bg-[#b28a3b]" />
        <p className="text-[10px] tracking-[0.55em] uppercase text-[#9b7630]">
          Advocates & Solicitors · Nairobi, Kenya
        </p>
      </div>

      {/* Headline — reduced from md:text-8xl */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-7 text-[#1f2430]">
        Trusted Legal Counsel<br />
        <span className="text-[#b28a3b]">Built on Kenyan Law</span>
      </h1>

      <p className="text-[#5f6270] text-base max-w-lg mb-10 leading-relaxed font-light">
        A premier Nairobi firm offering expert legal counsel across corporate, civil, family,
        and land matters. Advocates of the High Court, admitted to the Roll since 1998.
      </p>

      {/* CTAs — your existing styles, unchanged */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/contact"
          className="px-10 py-4 bg-[#b28a3b] text-[#fbf8f2] text-[11px] tracking-[0.3em] uppercase font-bold
                     hover:bg-[#c49b49] transition-all duration-300 w-full sm:w-auto text-center"
        >
          Request a Consultation
        </Link>
        <Link
          to="/practice-areas"
          className="px-10 py-4 border border-[#d7c4a1] text-[#4f5563] text-[11px] tracking-[0.3em] uppercase
                     hover:border-[#b28a3b] hover:text-[#b28a3b] transition-all duration-300 w-full sm:w-auto text-center"
        >
          Our Practice Areas
        </Link>
      </div>

      {/* LSK credential line */}
      <div className="mt-10 flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-[#b28a3b] rounded-full" />
        <p className="text-[9px] tracking-[0.3em] uppercase text-[#7a7f89]">
          Regulated by the Law Society of Kenya · LSK Reg. No. 0001998
        </p>
      </div>
    </div>
  </div>

  {/* Stats bar — your existing, unchanged */}
  <div className="absolute bottom-0 left-0 right-0 border-t border-[#d7c4a1] bg-[#fbf8f2]/90 backdrop-blur-md z-10">
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
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
  {practices.map(({ title, desc, image }) => (
    <div
      key={title}
      className="group relative overflow-hidden border border-[#e3d6bd] bg-[#fbf8f2] h-[260px]"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f]/70 via-[#0c0c0f]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#e0ba5a] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#e5e0d6]/80 leading-relaxed">
          {desc}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#b28a3b]/0 group-hover:bg-[#b28a3b]/60 transition-all duration-500" />
    </div>
  ))}
</div>

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
