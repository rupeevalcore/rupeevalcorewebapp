"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Schools', href: '/schools' },
  { label: 'Colleges', href: '/colleges' },
  { label: 'Corporates', href: '/corporate-financial-wellness' },
  { label: 'Individuals', href: '/individual-learning' },
  { label: 'AI', href: '/ai' },
]

const prefetchRoutes = [
  '/',
  '/schools',
  '/colleges',
  '/corporate-financial-wellness',
  '/individual-learning',
  '/ai',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  useEffect(() => {
    prefetchRoutes.forEach((route) => {
      if (route !== pathname) router.prefetch(route)
    })
  }, [pathname, router])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border bg-background/80 backdrop-blur-2xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-rv flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="Rupeevalcore home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-background font-heading font-black text-base shadow-glow transition-transform duration-200 group-hover:scale-105">
              ₹
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-heading font-bold text-foreground text-base tracking-tight">Rupeevalcore</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-medium">Finance Education</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch={!link.href.includes('#')}
                onClick={handleNavClick}
                className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-1 font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-full origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Theme */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-3 mr-2">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={16} />
                {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
            
            <ThemeToggle />
            
            <Link
              href="/#programs"
              prefetch={false}
              data-program-selector
              className="btn-accent text-sm py-2 px-5 text-center inline-block ml-1"
            >
              Request Proposal
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={`tel:${PHONE_NUMBER}`} aria-label="Call Us" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
              <Phone size={16} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Us" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle size={16} />
            </a>
            
            <div className="scale-90 origin-right">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 ml-1 rounded-lg text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[min(88vw,360px)] border-l border-border bg-background/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-heading font-bold text-foreground">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={!link.href.includes('#')}
              onClick={handleNavClick}
              className="py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border mt-4 pt-6">
            <Link
              href="/#programs"
              prefetch={false}
              data-program-selector
              onClick={() => setMobileOpen(false)}
              className="btn-accent w-full justify-center text-center inline-flex py-3"
            >
              Request Proposal
            </Link>
          </div>
        </nav>
      </aside>
    </>
  )
}
