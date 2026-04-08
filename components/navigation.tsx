"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Globe } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#journey", label: "Journey" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleTranslate = () => {
    // Open Google Translate for Hindi
    const currentUrl = encodeURIComponent(window.location.href)
    window.open(`https://translate.google.com/translate?sl=en&tl=hi&u=${currentUrl}`, '_blank')
  }

  return (
    <>
      {/* Announcement Bar - Static, not fixed */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm tracking-widest flex items-center justify-center gap-4">
        <span>EXPERIENCE THE SOUL OF INDIAN CLASSICAL MUSIC</span>
        <button
          onClick={handleTranslate}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full text-xs tracking-wide transition-colors"
          aria-label="View in Hindi"
        >
          <Globe size={14} />
          <span>हिंदी में देखें</span>
        </button>
      </div>
      
      {/* Main Navigation - Sticky */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <Link href="/" className="text-xl tracking-[0.2em] text-foreground font-medium font-[family-name:var(--font-cinzel)]">
              DEVESH CHATURVEDI
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
