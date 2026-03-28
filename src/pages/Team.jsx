import PageHero from '../components/PageHero'
import SectionDivider from '../components/SectionDivider'
import { Link } from 'react-router-dom'

const advocates = [
  {
    initials: 'JO',
    name: 'James Ochieng',
    title: 'Senior Counsel & Founding Partner',
    image: '/team/james.jpg',
    admitted: 'Admitted to the Roll, 1991',
    lsk: 'LSK No. 0001991',
    speciality: 'Corporate & Commercial Law, Civil Litigation',
    courts: ['Supreme Court', 'Court of Appeal', 'High Court'],
    bio: 'James founded Lexara in 1998 after seven years at a leading Nairobi commercial firm. He has appeared in several landmark cases before the Supreme Court and is regularly instructed by major Kenyan corporations and banks.',
  },
  {
    initials: 'FK',
    name: 'Fatuma Kimani',
    title: 'Managing Partner',
    image: '/team/fatuma.jpg',
    admitted: 'Admitted to the Roll, 2001',
    lsk: 'LSK No. 0012001',
    speciality: 'Civil Litigation & Arbitration',
    courts: ['Court of Appeal', 'High Court', 'ELRC'],
    bio: 'Fatuma heads the firm\'s litigation department and has over two decades of experience in commercial disputes, judicial review, and employment law. She is a trained arbitrator accredited by the Chartered Institute of Arbitrators (Kenya Branch).',
  },
  {
    initials: 'DM',
    name: 'David Mutua',
    title: 'Partner',
    image: '/team/david.jpg',
    admitted: 'Admitted to the Roll, 2005',
    lsk: 'LSK No. 0052005',
    speciality: 'Conveyancing, Land & Real Property',
    courts: ['High Court', 'Environment & Land Court'],
    bio: 'David leads the Conveyancing & Land department. He has handled over 800 property transactions across Kenya and regularly appears before the Environment and Land Court on title disputes and NLC matters.',
  },
  {
    initials: 'WN',
    name: 'Wanjiru Njoroge',
    title: 'Senior Associate',
    image: '/team/wanjiru.jpg',
    admitted: 'Admitted to the Roll, 2012',
    lsk: 'LSK No. 0032012',
    speciality: 'Family Law, Succession & Probate',
    courts: ['High Court', 'Magistrates Courts'],
    bio: 'Wanjiru specialises in family matters and estate administration. She advises clients on wills, grants of probate, letters of administration, and represents clients in divorce and custody proceedings with notable discretion and sensitivity.',
  },
  {
    initials: 'KO',
    name: 'Kevin Otieno',
    title: 'Associate',
    image: '/team/kevin.jpg',
    admitted: 'Admitted to the Roll, 2018',
    lsk: 'LSK No. 0072018',
    speciality: 'Employment & Labour Relations',
    courts: ['ELRC', 'High Court', 'Magistrates Courts'],
    bio: 'Kevin handles employment matters for both employers and employees. He appears regularly before the Employment and Labour Relations Court and advises on HR policy compliance under Kenyan labour laws.',
  },
  {
    initials: 'AN',
    name: 'Amina Njeri',
    title: 'Associate',
    image: '/team/amina.jpg',
    admitted: 'Admitted to the Roll, 2020',
    lsk: 'LSK No. 0042020',
    speciality: 'Criminal Defence & Anti-Corruption',
    courts: ['High Court', 'Magistrates Courts'],
    bio: 'Amina focuses on criminal defence matters including bail applications, trial defence, and representation at the ODPP. She also advises on anti-corruption compliance and EACC-related matters.',
  },
]

export default function Team() {
  return (
    <>
      <PageHero
        label="Our Advocates"
        title="Meet the Minds Behind"
        highlight="Lexara"
        subtitle="A multidisciplinary team of advocates committed to delivering strategic, results-driven legal solutions across Kenya."
      />

      <section className="py-24 px-6 bg-[#f8f3ea]">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {advocates.map((adv) => (
              <div
                key={adv.name}
                className="group border border-[#e3d6bd] bg-[#fbf8f2] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >

                {/* Top Section */}
                <div className="flex gap-6 p-8 border-b border-[#e3d6bd] items-center">

                  {/* Image */}
                  <div className="w-20 h-20 rounded-sm overflow-hidden border border-[#c7b089] bg-[#f3ecdf] flex-shrink-0">
                    {adv.image ? (
                      <img
                        src={adv.image}
                        alt={adv.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-serif text-lg font-bold text-[#9b7630]">
                          {adv.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Identity */}
                  <div>
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[#9b7630] mb-1">
                      {adv.title}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-[#1f2430]">
                      {adv.name}
                    </h3>
                    <p className="text-sm text-[#7a7f89] mt-1">
                      {adv.speciality}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">

                  {/* Bio */}
                  <p className="text-sm text-[#5f6270] leading-relaxed mb-6">
                    {adv.bio}
                  </p>

                  {/* Courts */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {adv.courts.map((c) => (
                      <span
                        key={c}
                        className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 border border-[#d7c4a1] text-[#8a6727]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Credentials + CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-[#e3d6bd]">

                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#7a7f89]">
                        {adv.admitted}
                      </p>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#8e9199] mt-1">
                        {adv.lsk}
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      className="text-xs tracking-[0.2em] uppercase text-[#9b7630] font-medium hover:underline"
                    >
                      Consult →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-14 px-6 bg-[#efe7d8]">
        <SectionDivider />
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-sm text-[#7a7f89] leading-relaxed">
            All advocates at Lexara hold valid Annual Practising Certificates issued by the Law Society of Kenya.
            You may verify any advocate on the LSK Roll at{' '}
            <span className="text-[#9b7630] font-medium">www.lsk.or.ke</span>.
          </p>
        </div>
      </section>
    </>
  )
}