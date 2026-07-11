"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from "@/components/ui/ThemeToggle"

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Schools', href: '/schools' },
  { label: 'Colleges', href: '/colleges' },
  { label: 'Corporates', href: '/corporate-financial-wellness' },
  { label: 'Individuals', href: '/individual-learning' },
  { label: 'AI', href: '/ai' },
  { label: 'Founder', href: '/#founder' },
  { label: 'Contact', href: '/#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
          <Link href="/" className="group flex items-center gap-3" aria-label="Rupeevalcore home">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-background font-heading font-black text-base shadow-glow transition-transform duration-200 group-hover:scale-105">
              ₹
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-foreground text-base tracking-tight">Rupeevalcore</span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase font-medium">Finance Education</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-full origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* CTA & Theme */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={process.env.NEXT_PUBLIC_INDIVIDUAL_FORM_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent text-sm py-2 px-5 text-center inline-block"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-3 px-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between px-2 pb-4">
            <span className="text-sm font-medium text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          <div className="border-t border-border pt-4">
            <a
              href={process.env.NEXT_PUBLIC_INDIVIDUAL_FORM_URL || "#"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-accent w-full justify-center text-center inline-flex"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </aside>
    </>
  )
}
