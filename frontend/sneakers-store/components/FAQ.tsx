"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Häufig gestellte Fragen</h1>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Wie lange dauert die Lieferung?</AccordionTrigger>
          <AccordionContent>
            Die Standardlieferzeit beträgt 3-5 Werktage. Für Express-Lieferungen, die am nächsten Tag eintreffen, wird ein Aufpreis erhoben.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Kann ich meine Bestellung zurückgeben?</AccordionTrigger>
          <AccordionContent>
            Ja, Sie können Ihre Bestellung innerhalb von 30 Tagen nach Erhalt zurückgeben. Die Schuhe müssen ungetragen und in der Originalverpackung sein.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Bieten Sie Größenberatung an?</AccordionTrigger>
          <AccordionContent>
            Ja, auf jeder Produktseite finden Sie einen Größenführer. Bei weiteren Fragen können Sie sich gerne an unseren Kundenservice wenden.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Wie kann ich den Status meiner Bestellung verfolgen?</AccordionTrigger>
          <AccordionContent>
            Sobald Ihre Bestellung versandt wurde, erhalten Sie eine E-Mail mit einer Sendungsverfolgungsnummer. Mit dieser können Sie den aktuellen Status Ihrer Lieferung online verfolgen.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Bieten Sie Rabatte für Stammkunden an?</AccordionTrigger>
          <AccordionContent>
            Ja, wir haben ein Treueprogramm für unsere Stammkunden. Melden Sie sich für unseren Newsletter an, um über aktuelle Angebote und exklusive Rabatte informiert zu werden.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}