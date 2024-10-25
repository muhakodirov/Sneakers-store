
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-bold mb-14 text-center">Kontaktieren Sie uns</h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:gap-32">
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input id="name" placeholder="Ihr Name" className="w-[90%]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail</label>
              <Input id="email" type="email" placeholder="ihre.email@beispiel.de" className="w-[90%]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht</label>
              <Textarea id="message" placeholder="Ihre Nachricht" rows={4} className="w-[90%]" />
            </div>
            <Button type="submit" className="w-[95%] rounded-lg h-9 bg-green-500 hover:bg-green-600 text-white">
              Nachricht senden
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold lg:mt-4 mt-16">Kontaktinformationen</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">E-Mail</h3>
                <p className="text-muted-foreground">info@s-und-s-schuhe.de</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Telefon</h3>
                <p className="text-muted-foreground">+49 (0) 123 456789</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Adresse</h3>
                <p className="text-muted-foreground">Mustermannstraße, 12345 Berlin, Deutschland</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-medium mb-2 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Öffnungszeiten
            </h3>
            <p className="text-muted-foreground">Montag - Freitag: 9:00 - 18:00 Uhr</p>
            <p className="text-muted-foreground">Samstag: 10:00 - 16:00 Uhr</p>
            <p className="text-muted-foreground">Sonntag: Geschlossen</p>
          </div>
        </div>
      </div>
    </div>
  )
}