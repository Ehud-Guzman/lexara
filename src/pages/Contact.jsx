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
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Begin Your"
        highlight="Legal Journey"
        subtitle="Your first consultation is free. Speak directly with one of our advocates — no gatekeepers, no obligation."
      />

      <section className="py-20 px-6 bg-[#f8f3ea]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── LEFT — INFO ──────────────────────── */}
          <div className="lg:col-span-2">
            <div className="space-y-8 mb-10">
              {[
                {
                  label: 'Office Address',
                  value: 'Anniversary Towers, 14th Floor\nUniversity Way, Nairobi CBD\nP.O. Box 00100 – 00200',
                },
                { label: 'Phone', value: '+254 700 000 000\n+254 733 000 000' },
                { label: 'Email', value: 'counsel@lexaralaw.co.ke' },
                { label: 'Office Hours', value: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 border border-[#c7b089] flex items-center justify-center flex-shrink-0 bg-[#fbf8f2]">
                    <div className="w-1.5 h-1.5 bg-[#b28a3b]" />
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[#9b7630] mb-1">{label}</p>
                    <p className="text-[#5f6270] text-sm whitespace-pre-line leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgent */}
            <div className="border border-[#d7c4a1] bg-[#fbf8f2] p-6 shadow-sm">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#9b7630] mb-2">Urgent Matters</p>
              <p className="font-serif text-2xl font-bold text-[#1f2430] mb-1">+254 700 111 222</p>
              <p className="text-xs text-[#7a7f89]">Available 24/7 for existing clients only</p>
            </div>

            {/* LSK note */}
            <div className="mt-6 p-4 border border-[#e3d6bd] bg-[#fdfaf4]">
              <p className="text-[9px] text-[#7a7f89] leading-relaxed">
                Lexara Advocates & Solicitors is regulated by the Law Society of Kenya under the Advocates Act (Cap. 16).
                All advocates hold current Practising Certificates.
              </p>
            </div>
          </div>

          {/* ── RIGHT — FORM ─────────────────────── */}
          <div className="lg:col-span-3 border border-[#e3d6bd] bg-[#fbf8f2] p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center gap-5 py-20">
                <div className="w-14 h-14 border border-[#b28a3b] flex items-center justify-center">
                  <span className="text-[#b28a3b] text-xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1f2430]">Message Received</h3>
                <p className="text-[#5f6270] text-sm max-w-xs leading-relaxed">
                  One of our advocates will contact you within one business day to confirm your consultation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-[10px] tracking-[0.3em] uppercase text-[#9b7630] hover:underline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-xl font-bold text-[#1f2430] mb-8">
                  Free Consultation Request
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[9px] tracking-[0.3em] uppercase text-[#7a7f89] mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. John Kamau"
                        className="w-full bg-[#fffdf8] border border-[#d7c4a1] focus:border-[#b28a3b] px-4 py-3 text-sm text-[#1f2430] outline-none transition-colors placeholder:text-[#9aa0a9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-[0.3em] uppercase text-[#7a7f89] mb-2">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full bg-[#fffdf8] border border-[#d7c4a1] focus:border-[#b28a3b] px-4 py-3 text-sm text-[#1f2430] outline-none transition-colors placeholder:text-[#9aa0a9]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[9px] tracking-[0.3em] uppercase text-[#7a7f89] mb-2">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-[#fffdf8] border border-[#d7c4a1] focus:border-[#b28a3b] px-4 py-3 text-sm text-[#1f2430] outline-none transition-colors placeholder:text-[#9aa0a9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-[0.3em] uppercase text-[#7a7f89] mb-2">
                        County / Location
                      </label>
                      <input
                        name="county"
                        value={form.county}
                        onChange={handleChange}
                        placeholder="e.g. Nairobi, Mombasa"
                        className="w-full bg-[#fffdf8] border border-[#d7c4a1] focus:border-[#b28a3b] px-4 py-3 text-sm text-[#1f2430] outline-none transition-colors placeholder:text-[#9aa0a9]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] tracking-[0.3em] uppercase text-[#7a7f89] mb-2">
                      Area of Law
                    </label>
                    <select
                      name="practice"
                      value={form.practice}
                      onChange={handleChange}
                      className="w-full bg-[#fffdf8] border border-[#d7c4a1] focus:border-[#b28a3b] px-4 py-3 text-sm text-[#4f5563] outline-none transition-colors"
                    >
                      <option value="">Select a practice area</option>
                      {practiceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] tracking-[0.3em] uppercase text-[#7a7f89] mb-2">
                      Brief Description of Your Matter *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your legal issue..."
                      className="w-full bg-[#fffdf8] border border-[#d7c4a1] focus:border-[#b28a3b] px-4 py-3 text-sm text-[#1f2430] outline-none transition-colors resize-none placeholder:text-[#9aa0a9]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#b28a3b] text-[#fbf8f2] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#c49b49] transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Request Consultation'}
                  </button>

                  <p className="text-[9px] text-[#7a7f89] text-center leading-relaxed">
                    All information shared is protected by advocate-client privilege under Kenyan law.
                    We do not share your details with third parties.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
