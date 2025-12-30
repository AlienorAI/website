"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import type { FaqItem } from "@/i18n/dictionaries";

export default function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border-border/40 border-b py-2"
        >
          <AccordionTrigger className="text-left font-medium hover:no-underline dark:text-gray-200">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground whitespace-pre-line dark:text-gray-300">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
