import { Link } from 'react-router-dom'

const practiceLinks = [
  'Corporate & Commercial',
  'Civil Litigation',
  'Conveyancing & Land',
  'Family & Succession',
  'Employment & Labour',
  'Criminal Defence',
]

const firmLinks = [
  { label: 'About the Firm', to: '/about' },
  { label: 'Our Advocates', to: '/team' },
  { label: 'Practice Areas', to: '/practice-areas' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#e8decd] border-t border-[#d7c4a1]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Link to="/" className="block mb-5">
              <p className="font-serif text-2xl font-bold text-[#9b7630] tracking-widest">
                LEXARA
              </p>
              <p className="text-xs tracking-[0.35em] uppercase text-[#6a6f7b] mt-1">
                Advocates & Solicitors
              </p>
            </Link>

            <p className="text-sm text-[#5f6270] leading-relaxed">
              Advocates of the High Court of Kenya. Registered with the Law Society of Kenya.
              Providing trusted legal counsel since 1998.
            </p>

            <p className="text-xs tracking-[0.25em] uppercase text-[#9b7630]/80 mt-4">
              LSK Reg. No. 0001998
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#9b7630] mb-5 font-medium">
              Practice Areas
            </p>
            <ul className="space-y-3">
              {practiceLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/practice-areas"
                    className="text-sm text-[#5f6270] hover:text-[#b28a3b] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The Firm */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#9b7630] mb-5 font-medium">
              The Firm
            </p>
            <ul className="space-y-3">
              {firmLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-[#5f6270] hover:text-[#b28a3b] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#9b7630] mb-5 font-medium">
              Find Us
            </p>

            <div className="space-y-3 text-sm text-[#5f6270] leading-relaxed">
              <p>
                Anniversary Towers, 14th Floor<br />
                University Way, Nairobi CBD
              </p>
              <p>P.O. Box 00100 – 00200, Nairobi</p>
              <p>+254 700 000 000</p>
              <p>counsel@lexaralaw.co.ke</p>
            </div>

            <div className="mt-6 p-5 border border-[#d7c4a1] bg-[#f7f2e8]">
              <p className="text-xs tracking-[0.25em] uppercase text-[#9b7630] mb-1">
                Urgent Matters
              </p>
              <p className="text-lg font-serif font-bold text-[#1f2430]">
                +254 746 527 253
              </p>
              <p className="text-xs text-[#7a7f89] mt-1">
                24/7 · Existing clients only
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#d7c4a1] flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs tracking-[0.2em] uppercase text-[#7a7f89] text-center md:text-left">
            © {new Date().getFullYear()} Lexara Advocates & Solicitors. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Disclaimer'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-[0.1em] uppercase text-[#7a7f89] hover:text-[#b28a3b] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-xs text-[#7a7f89] text-center md:text-right">
            Designed & Developed by{' '}
            <a
              href="https://glimmerink.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9b7630] hover:underline"
            >
              Glimmer Ink
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}