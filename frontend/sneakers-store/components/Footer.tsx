"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" border-t mt-52">
      <div className=" mx-auto m-10">
        <div className=" grid ml-10 lg:ml-36 grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Über S&S</h3>
            <ul className="space-y-2">
              <li><Link href="/ueber-uns" className="text-sm text-muted-foreground hover:text-primary">Über uns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Kundenservice</h3>
            <ul className="space-y-2">
              <li><Link href="/kontakt" className="text-sm text-muted-foreground hover:text-primary">Kontakt</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/herren" className="text-sm text-muted-foreground hover:text-primary">Herren</Link></li>
              <li><Link href="/damen" className="text-sm text-muted-foreground hover:text-primary">Damen</Link></li>
              <li><Link href="/sale" className="text-sm text-muted-foreground hover:text-primary">Angebote</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} S&S Schuhe. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}