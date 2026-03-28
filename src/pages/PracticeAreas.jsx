import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

// Drop your images in /public/images/ with these exact filenames
// e.g. /public/images/practice-corporate.jpg
const areas = [
  {
    id: 'corporate',
    icon: '⚖',
    title: 'Corporate & Commercial Law',
    tagline: 'Business formation to board advisory',
    image: '/images/practice-corporate.jpg',
    points: [
      'Company incorporation under the Companies Act 2015',
      'Shareholders agreements & joint ventures',
      'Mergers, acquisitions & due diligence',
      'Regulatory compliance & corporate governance',
      'Commercial contracts & negotiations',
    ],
  },
  {
    id: 'litigation',
    icon: '🏛',
    title: 'Civil Litigation',
    tagline: 'Representation at every court level',
    image: '/images/practice-litigation.jpg',
    points: [
      'High Court civil and commercial suits',
      'Court of Appeal & Supreme Court petitions',
      'Judicial review & constitutional matters',
      'Debt recovery & enforcement of judgments',
      'Arbitration & alternative dispute resolution',
    ],
  },
  {
    id: 'land',
    icon: '🏠',
    title: 'Conveyancing & Land Law',
    tagline: 'From transfers to title disputes',
    image: '/images/practice-land.jpg',
    points: [
      'Land transfers & title registration',
      'Leasehold & freehold conveyancing',
      'Adverse possession & NLC matters',
      'Land disputes before the Environment & Land Court',
      'Stamp duty & land rates advisory',
    ],
  },
  {
    id: 'family',
    icon: '👨‍👩‍👧',
    title: 'Family Law & Succession',
    tagline: 'Handled with care and discretion',
    image: '/images/practice-family.jpeg',
    points: [
      'Divorce & separation under the Marriage Act 2014',
      'Matrimonial property & asset division',
      'Child custody, guardianship & maintenance',
      'Grant of probate & letters of administration',
      'Estate planning & wills under the Law of Succession Act',
    ],
  },
  {
    id: 'employment',
    icon: '💼',
    title: 'Employment & Labour Relations',
    tagline: 'Rights at work — for employers and employees',
    image: '/images/practice-employment.jpg',
    points: [
      'Employment contracts & HR policy drafting',
      'Unfair dismissal & redundancy claims',
      'ELRC representation for employers & employees',
      'Collective bargaining & trade union matters',
      'Workplace discrimination & sexual harassment claims',
    ],
  },
  {
    id: 'criminal',
    icon: '🛡',
    title: 'Criminal Defence',
    tagline: 'Protecting your rights from arrest to acquittal',
    image: '/images/practice-criminal.jpg',
    points: [
      'Police bail applications & representation at ODPP',
      'Bail hearings before magistrates and High Court',
      'Criminal trial defence in all Kenyan courts',
      'Anti-corruption & economic crimes (EACC matters)',
      'Appeals against conviction or sentence',
    ],
  },
]

export default function PracticeAreas() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Comprehensive Legal"
        highlight="Expertise"
        subtitle="Strategic, results-driven legal solutions across corporate, litigation, property, family, employment, and criminal matters — delivered with precision and a client-first approach."
      />

      {/* Intro strip */}
      <section className="bg-[#f5ede0] border-b border-[#e0cead]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#9b7630]">
            Six practice areas · All courts of record in Kenya
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#c9a84c]" />
            <p className="text-[10px] text-[#7a7264] tracking-wide">
              Regulated by the Law Society of Kenya · Advocates Act Cap. 16
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-[#f8f3ea] py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-5">
          {areas.map(({ id, icon, title, tagline, image, points }, index) => {
            const isEven = index % 2 === 0
            return (
              <article
                key={id}
                className="group grid grid-cols-1 lg:grid-cols-2 border border-[#e0cead] bg-[#fdfaf5] overflow-hidden
                           hover:shadow-2xl hover:shadow-[#c9a84c]/10 hover:-translate-y-0.5 transition-all duration-500"
              >
                {/* Image panel */}
                <div className={`relative overflow-hidden min-h-[280px] lg:min-h-[380px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Placeholder — disappears once real image loads */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ede3d0] to-[#ddd0b8] flex flex-col items-center justify-center gap-3">
                    <span className="text-5xl opacity-20">{icon}</span>
                    <p className="text-[9px] tracking-[0.5em] uppercase text-[#b0a090]">
                      /images/practice-{id}.jpg
                    </p>
                  </div>

                  {/* Real image */}
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f]/55 via-[#0c0c0f]/10 to-transparent" />

                  {/* Decorative index */}
                  <div
                    className="absolute top-5 left-6 font-serif text-7xl font-bold leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(201,168,76,0.18)' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Tagline chip over image */}
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-block text-[9px] tracking-[0.35em] uppercase text-[#f0ece0]/70
                                     border border-[#f0ece0]/20 px-3 py-1.5 bg-[#0c0c0f]/30 backdrop-blur-sm">
                      {tagline}
                    </span>
                  </div>
                </div>

                {/* Content panel */}
                <div className={`flex flex-col justify-between p-10 lg:p-12 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    {/* Title */}
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-11 h-11 border border-[#c9a84c]/35 flex items-center justify-center flex-shrink-0
                                      bg-[#fdf6e8] group-hover:bg-[#c9a84c]/12 group-hover:border-[#c9a84c]/60 transition-all duration-300">
                        <span className="text-lg leading-none">{icon}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a20]
                                     group-hover:text-[#9b7630] transition-colors duration-300 leading-tight pt-1">
                        {title}
                      </h3>
                    </div>

                    {/* Points */}
                    <ul className="space-y-3.5 mb-10">
                      {points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3.5">
                          <div className="flex-shrink-0 w-5 h-5 border border-[#c9a84c]/30 flex items-center justify-center mt-0.5
                                          group-hover:border-[#c9a84c]/60 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                          </div>
                          <span className="text-sm text-[#5a5560] leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#e0cead]">
                    <Link to="/contact" className="inline-flex items-center gap-3 group/cta">
                      <span className="h-px w-6 bg-[#c9a84c] group-hover/cta:w-10 transition-all duration-300" />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#9b7630] font-semibold
                                       group-hover/cta:text-[#c9a84c] transition-colors duration-300">
                        Consult an Advocate
                      </span>
                    </Link>
                    <span className="font-serif text-sm text-[#c9a84c]/35 font-bold tracking-widest select-none">
                      {String(index + 1).padStart(2, '0')} / {String(areas.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#0c0c0f] py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg, #c9a84c 0px, #c9a84c 1px,
              transparent 1px, transparent 60px
            )`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.55em] uppercase text-[#c9a84c] mb-6">Not Sure Where to Start?</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#f0ece0] mb-6 leading-tight">
            Speak to an Advocate —{' '}
            <span className="text-[#c9a84c]">Free of Charge</span>
          </h2>
          <p className="text-[#f0ece0]/40 text-sm leading-relaxed mb-10">
            We will assess your matter honestly and point you in the right direction — even if it turns out we are not the right fit for your case.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-[#c9a84c] text-[#0c0c0f] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#e0ba5a] transition-all duration-300"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-6 bg-[#f5ede0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] text-[#a09080] leading-relaxed">
            The information on this page is provided for general guidance only and does not constitute legal advice.
            For advice specific to your situation, please consult one of our advocates directly. Lexara Advocates &amp; Solicitors
            is regulated by the Law Society of Kenya under the Advocates Act (Cap. 16, Laws of Kenya).
          </p>
        </div>
      </section>
    </>
  )
}