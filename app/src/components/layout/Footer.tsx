import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { EMAIL, WHATSAPP_URL, INSTAGRAM, PHONE_NUMBER, PHONE_DISPLAY } from '@/lib/utils'
import { SectionContainer } from '@/components/ui/SectionContainer'

const financePrograms = [
  { label: 'Financial Literacy Workshops in Chennai', href: '/' },
  { label: 'Financial Literacy Programs for Schools', href: '/schools' },
  { label: 'Financial Literacy Workshops for Colleges', href: '/colleges' },
  { label: 'Corporate Financial Wellness Programs', href: '/corporate-financial-wellness' },
  { label: 'Personal Finance Education', href: '/individual-learning' },
]

const aiPrograms = [
  { label: 'AI Education for Schools', href: '/ai/schools' },
  { label: 'AI Education for Colleges', href: '/ai/colleges' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050B18] pt-24 pb-12 text-sm text-slate-300">
      <SectionContainer>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group flex items-center gap-3 w-fit" aria-label="RupeeValcore home">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-[#050B18] font-heading font-black text-lg shadow-glow transition-transform duration-200 group-hover:scale-105">
                ₹
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-white text-xl tracking-tight">RupeeValcore</span>
                <span className="text-[11px] text-slate-400 tracking-widest uppercase font-semibold mt-1">Financial Education</span>
              </div>
            </Link>
            
            <p className="text-slate-400 max-w-sm text-base leading-relaxed">
              Practical financial literacy platform for schools, colleges, corporates and individuals in Chennai. Education-only. No products sold.
            </p>

            <button
              type="button"
              data-program-selector="true"
              className="btn-accent inline-flex text-center"
            >
              Talk To An Advisor
            </button>
            
            <div className="flex items-center gap-4 pt-2">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all" aria-label="LinkedIn">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all" aria-label="YouTube">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Finance Nav */}
          <div className="space-y-5">
            <h3 className="font-heading font-bold text-white text-base">Finance Programs</h3>
            <ul className="space-y-3">
              {financePrograms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-accent transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Nav */}
          <div className="space-y-5">
            <h3 className="font-heading font-bold text-white text-base">AI Division</h3>
            <ul className="space-y-3">
              {aiPrograms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-accent transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Nav */}
          <div className="space-y-5">
            <h3 className="font-heading font-bold text-white text-base">Contact & Trust</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors font-medium">
                  <Phone className="h-5 w-5 text-slate-500" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-[#25D366] transition-colors font-medium">
                  <FaWhatsapp className="h-5 w-5 text-slate-500" />
                  <span>WhatsApp Support</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors font-medium">
                  <Mail className="h-5 w-5 text-slate-500" />
                  <span>Email Us</span>
                </a>
              </li>
              <li className="pt-4 mt-4 border-t border-white/10 space-y-2">
                <div className="text-white font-medium">Chennai, Tamil Nadu</div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> MSME Registered
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> NISM Certified Faculty
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} RupeeValcore. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
