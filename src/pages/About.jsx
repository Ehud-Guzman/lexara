import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionDivider from '../components/SectionDivider'

const values = [
  {
    label: 'Integrity',
    desc: 'We hold ourselves to the professional conduct standards set by the Advocates Act and the Law Society of Kenya. Our ethics are non-negotiable.',
  },
  {
    label: 'Accountability',
    desc: 'We give you honest counsel — even when it is not what you hoped to hear. A client who understands their position makes better decisions.',
  },
  {
    label: 'Excellence',
    desc: 'Thorough preparation and sharp legal strategy define every brief, pleading, and submission we file on your behalf.',
  },
  {
    label: 'Discretion',
    desc: 'Confidentiality is not a policy here — it is a foundational obligation. What you share with us stays within the firm.',
  },
]

const milestones = [
  { year: '1998', event: 'Firm founded by Senior Advocate James Ochieng — admitted to the Kenya Bar in 1991.' },
  { year: '2005', event: 'Expanded to a full corporate & commercial practice. Registered with the Registrar of Companies.' },
  { year: '2010', event: 'Established a dedicated Conveyancing & Land department. NLC-accredited advocates joined the firm.' },
  { year: '2017', event: 'First Supreme Court appearance, representing a client in a landmark constitutional petition.' },
  { year: '2023', event: 'Ranked among top boutique law firms in East Africa by East Africa Legal Awards.' },
]

export default function About() {
  return (
    <>
      <PageHero
        label="Our Firm"
        title="A Legacy Built on"
        highlight="Kenyan Law"
        subtitle="Since 1998, Lexara Advocates has delivered high-quality legal services to individuals, businesses, and institutions across Kenya — with integrity, precision, and accountability."
      />

      {/* ── MISSION & VALUES ─────────────────── */}
      <section className="py-24 px-6 bg-[#f8f3ea]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#9b7630] mb-4">Our Mission</p>
            <h2 className="font-serif text-4xl font-bold text-[#1f2430] leading-tight mb-6">
              Every Kenyan Deserves<br />
              <span className="text-[#b28a3b]">Proper Legal Representation</span>
            </h2>
            <p className="text-[#5f6270] text-sm leading-relaxed mb-4">
              We were founded on a simple but powerful belief: access to quality legal counsel should not depend on the size of your company or the weight of your wallet. Whether you are an individual with a land dispute, a startup negotiating its first shareholders agreement, or a family navigating a succession matter — you deserve an advocate who will fight for your interests.
            </p>
            <p className="text-[#5f6270] text-sm leading-relaxed mb-10">
              We practise under the Advocates Act (Cap. 16), and our advocates are admitted to the Roll of Advocates maintained by the Chief Justice of the Republic of Kenya. We appear across all courts of record in Kenya.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {['High Court', 'Court of Appeal', 'Supreme Court', 'Environment & Land Court', 'Employment & Labour Relations Court', 'Magistrates Courts'].map((court) => (
                <div key={court} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#b28a3b] flex-shrink-0" />
                  <span className="text-xs text-[#5f6270]">{court}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6">
            {values.map(({ label, desc }) => (
              <div key={label} className="flex gap-5 group border border-[#e3d6bd] bg-[#fbf8f2] p-6 hover:border-[#c7b089] transition-colors shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 border border-[#c7b089] flex items-center justify-center group-hover:bg-[#efe7d8] transition-colors">
                  <div className="w-2 h-2 bg-[#b28a3b]" />
                </div>
                <div>
                  <p className="font-serif text-base font-bold text-[#1f2430] mb-1">{label}</p>
                  <p className="text-[#5f6270] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ───────────────────────── */}
      <section className="py-24 px-6 bg-[#efe7d8]">
        <SectionDivider />
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#9b7630] mb-4">Our Journey</p>
            <h2 className="font-serif text-4xl font-bold text-[#1f2430]">
              25 Years in <span className="text-[#b28a3b]">Practice</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#c7b089]" />

            <div className="space-y-10">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-8 items-start">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="font-serif text-sm font-bold text-[#9b7630]">{year}</span>
                  </div>
                  {/* Dot */}
                  <div className="flex-shrink-0 w-3 h-3 border border-[#b28a3b] bg-[#efe7d8] rounded-full mt-0.5 relative z-10" />
                  <p className="text-[#5f6270] text-sm leading-relaxed pt-0">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f3ecdf] text-center">
        <SectionDivider />
        <div className="max-w-xl mx-auto mt-16">
          <h2 className="font-serif text-3xl font-bold text-[#1f2430] mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-[#5f6270] text-sm leading-relaxed mb-8">
            Your first consultation is free. Speak directly with an advocate about your matter.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#b28a3b] text-[#fbf8f2] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#c49b49] transition-all duration-300"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
