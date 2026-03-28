import { useState } from 'react'
import PageHero from '../components/PageHero'

const practiceOptions = [
  'Corporate & Commercial Law',
  'Civil Litigation',
  'Conveyancing & Land Law',
  'Family Law & Succession',
  'Employment & Labour Relations',
  'Criminal Defence',
  'Other / Not Sure',
]

const contactInfo = [
  {
    label: 'Office Address',
    value: 'Anniversary Towers, 14th Floor\nUniversity Way, Nairobi CBD\nP.O. Box 00100 – 00200',
  },
  { label: 'Phone', value: '+254 700 000 000\n+254 733 000 000' },
  { label: 'Email', value: 'counsel@lexaralaw.co.ke' },
  { label: 'Office Hours', value: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM' },
]

const inputClass =
  'w-full bg-[#fffdf8] border border-[#d7c4a1] focus:border-[#b28a3b] px-4 py-3 text-sm text-[#1f2430] outline-none transition-colors duration-200 placeholder:text-[#b8b0a4]'

const labelClass = 'block text-[9px] tracking-[0.35em] uppercase text-[#9b7630] mb-2 font-medium'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', practice: '', county: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Connect to Formspree / EmailJS / your backend here
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 800)
  }

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Begin Your"
        highlight="Legal Journey"
        subtitle="Your first consultation is free. Speak directly with one of our advocates — no gatekeepers, no obligation."
      />

      {/* ── TOP STRIP ─────────────────────────── */}
      <section className="bg-[#f5ede0] border-b border-[#e0cead]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#9b7630]">
            Free first consultation · Response within one business day
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#c9a84c]" />
            <p className="text-[10px] text-[#7a7264] tracking-wide">
              Protected by advocate-client privilege under Kenyan law
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN SECTION ──────────────────────── */}
      <section className="py-20 px-6 bg-[#f8f3ea]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 xl:gap-16">

          {/* ── LEFT — INFO ───────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Contact details */}
            <div className="border border-[#e0cead] bg-[#fdfaf5] p-8 space-y-7">
              {contactInfo.map(({ label, value }) => (
                <div key={label} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 border border-[#c9a84c]/35 bg-[#fdf6e8]
                                  flex items-center justify-center
                                  group-hover:bg-[#c9a84c]/10 group-hover:border-[#c9a84c]/60 transition-all duration-300">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c]" />
                  </div>
                  <div>
                    <p className={labelClass}>{label}</p>
                    <p className="text-[#5a5560] text-sm whitespace-pre-line leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgent line */}
            <div className="border border-[#c9a84c]/40 bg-[#1a1a20] p-7 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg, #c9a84c 0px, #c9a84c 1px,
                    transparent 1px, transparent 40px
                  )`,
                }}
              />
              <div className="relative z-10">
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Urgent Matters</p>
                <p className="font-serif text-3xl font-bold text-[#f0ece0] mb-1">+254 746 527 253</p>
                <p className="text-[10px] text-[#f0ece0]/40 tracking-wide">Available 24 / 7 · Existing clients only</p>
              </div>
            </div>

            {/* LSK note */}
            <div className="border border-[#e0cead] bg-[#fdfaf5] px-6 py-5">
              <p className="text-[9px] text-[#a09080] leading-relaxed">
                Lexara Advocates & Solicitors is regulated by the Law Society of Kenya under the
                Advocates Act (Cap. 16). All advocates hold current Practising Certificates.
                You may verify any advocate at{' '}
                <span className="text-[#9b7630]">www.lsk.or.ke</span>.
              </p>
            </div>
          </div>

          {/* ── RIGHT — FORM ──────────────────── */}
          <div className="lg:col-span-3 border border-[#e0cead] bg-[#fdfaf5] overflow-hidden">

            {/* Form header bar */}
            <div className="bg-[#1a1a20] px-10 py-6 flex items-center justify-between">
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-1">Lexara Advocates</p>
                <h3 className="font-serif text-xl font-bold text-[#f0ece0]">Free Consultation Request</h3>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-[#f0ece0]/30">
                <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                No obligation
              </div>
            </div>

            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center gap-5 py-16">
                  <div className="w-16 h-16 border border-[#b28a3b] bg-[#b28a3b]/8 flex items-center justify-center">
                    <span className="text-[#b28a3b] text-2xl font-light">✓</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#1f2430]">Message Received</h3>
                  <p className="text-[#5a5560] text-sm max-w-xs leading-relaxed">
                    One of our advocates will contact you within one business day to confirm your consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 inline-flex items-center gap-3 group"
                  >
                    <span className="h-px w-5 bg-[#c9a84c] group-hover:w-8 transition-all duration-300" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#9b7630]">Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        name="name" required value={form.name}
                        onChange={handleChange} placeholder="e.g. John Kamau"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        name="phone" value={form.phone}
                        onChange={handleChange} placeholder="+254 7XX XXX XXX"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        name="email" type="email" required value={form.email}
                        onChange={handleChange} placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>County / Location</label>
                      <input
                        name="county" value={form.county}
                        onChange={handleChange} placeholder="e.g. Nairobi, Mombasa"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Practice area */}
                  <div>
                    <label className={labelClass}>Area of Law</label>
                    <select
                      name="practice" value={form.practice}
                      onChange={handleChange}
                      className={`${inputClass} text-[#4f5563]`}
                    >
                      <option value="">Select a practice area</option>
                      {practiceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>Brief Description of Your Matter *</label>
                    <textarea
                      name="message" required rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Briefly describe your legal issue..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#e0cead] to-transparent" />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#1a1a20] text-[#f0ece0] text-[11px] tracking-[0.3em] uppercase font-bold
                               hover:bg-[#b28a3b] transition-all duration-300 disabled:opacity-60 relative overflow-hidden group"
                  >
                    <span className="relative z-10">
                      {loading ? 'Sending...' : 'Request Consultation'}
                    </span>
                    {/* Gold sweep on hover */}
                    <span className="absolute inset-0 bg-[#c9a84c] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-in-out" />
                    <span className="absolute inset-0 flex items-center justify-center text-[#0c0c0f] text-[11px] tracking-[0.3em] uppercase font-bold
                                     opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 z-10">
                      {loading ? 'Sending...' : 'Request Consultation'}
                    </span>
                  </button>

                  <p className="text-[9px] text-[#a09080] text-center leading-relaxed">
                    All information shared is protected by advocate-client privilege under Kenyan law.
                    We do not share your details with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}