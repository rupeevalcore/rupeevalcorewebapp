import Link from 'next/link'
import { Mail } from 'lucide-react'
import { EMAIL, WHATSAPP_URL, INSTAGRAM } from '../../lib/utils'

const financePrograms = [
  { label: 'Financial Literacy', href: '/financial-literacy' },
  { label: 'For Schools', href: '/schools' },
  { label: 'For Colleges', href: '/colleges' },
  { label: 'Corporate Wellness', href: '/corporate-financial-wellness' },
  { label: 'Individual Learning', href: '/individual-learning' },
]

const aiPrograms = [
  { label: 'AI for Schools', href: '/ai/schools' },
  { label: 'AI for Colleges', href: '/ai/colleges' },
  { label: 'AI Learning Resources', href: '/ai/resources' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-8 text-sm">
      <div className="container-rv">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="group flex items-center gap-3 w-fit" aria-label="Rupeevalcore home">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-background font-heading font-black text-base shadow-glow transition-transform duration-200 group-hover:scale-105">
                ₹
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-foreground text-base tracking-tight">Rupeevalcore</span>
                <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-medium">Finance Education</span>
              </div>
            </Link>
            
            <p className="text-muted-foreground max-w-sm">
              India&apos;s premium financial literacy platform. Practical education focused on awareness, trust, and real-world application.
            </p>
            
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all border border-transparent hover:border-border"
                aria-label="Email us"
              >
                <Mail size={16} />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all border border-transparent hover:border-border"
                aria-label="Follow on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Finance Nav */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Finance Programs</h3>
            <ul className="space-y-2">
              {financePrograms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Nav */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">AI Division</h3>
            <ul className="space-y-2">
              {aiPrograms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Nav */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Chennai, Tamil Nadu</li>
              <li>India</li>
              <li className="pt-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
          <p>© {new Date().getFullYear()} Rupeevalcore. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
