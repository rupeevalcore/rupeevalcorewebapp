"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { PHONE_NUMBER, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Schools', href: '/schools' },
  { label: 'Colleges', href: '/colleges' },
  { label: 'Corporates', href: '/corporate-financial-wellness' },
  { label: 'Individuals', href: '/individual-learning' },
  { label: 'AI Division', href: '/ai' },
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
  const [scrollProgress, setScrollProgress] = useState(0)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
    }
    
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
          scrolled || mobileOpen
            ? 'border-b border-border bg-background/80 backdrop-blur-2xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="absolute top-0 left-0 h-[2px] bg-accent z-50 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="w-full px-5 sm:px-6 lg:px-8 xl:px-10 mx-auto max-w-[1440px] flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0" aria-label="RupeeValcore home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-[#050B18] font-heading font-black text-base shadow-glow group-hover:shadow-glow-lg transition-shadow">
              ₹
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-heading font-bold text-foreground text-base tracking-tight">RupeeValcore</span>
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
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>
            
            <ThemeToggle />
            
            <button
              type="button"
              data-program-selector="true"
              className="btn-accent text-sm py-2 px-5 h-10 rounded-xl text-center inline-flex items-center ml-1 focus:outline-none"
            >
              Request Proposal
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Us" className="flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors">
              <FaWhatsapp className="h-5 w-5" />
            </a>
            
            <div className="scale-90 origin-right min-h-[44px] min-w-[44px] flex items-center justify-center">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 ml-1 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col pt-20 pb-24 px-6 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col gap-6 mt-8 flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              prefetch={!link.href.includes('#')}
              onClick={handleNavClick}
              className="text-2xl font-heading font-bold text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="mt-auto space-y-6 pt-8 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-accent transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted text-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                Call Us
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg font-medium text-foreground hover:text-[#25D366] transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
                  <FaWhatsapp className="h-6 w-6" />
                </div>
                WhatsApp Support
              </a>
            </div>
            
            <button
              type="button"
              data-program-selector="true"
              onClick={() => setMobileOpen(false)}
              className="btn-accent w-full justify-center text-center inline-flex py-4 h-14 text-lg focus:outline-none"
            >
              Request Proposal
            </button>
          </div>
        </nav>
      </div>
    </>
  )
}
