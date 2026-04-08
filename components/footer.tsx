import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/deveshchaturvedi99", label: "Facebook", highlight: true },
  { icon: Instagram, href: "https://www.instagram.com/deveshchaturvedii/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/deveshchaturvedi14", label: "YouTube" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-4">
              Devesh Chaturvedi
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Indian Classical Music Singer, Performer, and Cultural Ambassador. 
              Spreading the legacy of Indian music around the world.
            </p>
            {/* Swar Saptak Badge */}
            <a 
              href="mailto:deveshchaturvedi14@gmail.com?subject=Enquiry%20about%20Swar%20Saptak"
              className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary transition-colors group"
            >
              <span className="text-primary text-sm font-medium group-hover:text-primary/80">Swar Saptak</span>
              <span className="text-muted-foreground text-xs">Music Team</span>
            </a>
            <p className="text-muted-foreground text-xs mt-3">
              Click above to enquire about Swar Saptak for performances and collaborations
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-foreground text-sm tracking-widest mb-6">QUICK LINKS</h4>
            <div className="space-y-3">
              <Link href="#home" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link href="#journey" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Journey
              </Link>
              <Link href="#music" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Music
              </Link>
              <Link href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-foreground text-sm tracking-widest mb-6">GET CONNECTED</h4>
            <p className="text-muted-foreground text-sm mb-6">
              Follow on social media for updates on upcoming performances and events.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                      social.highlight 
                        ? "border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground" 
                        : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                    }`}
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                )
              })}
            </div>
            
            {/* Email */}
            <a 
              href="mailto:deveshchaturvedi14@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              deveshchaturvedi14@gmail.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Devesh Chaturvedi. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Crafted with love for Indian Classical Music
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
