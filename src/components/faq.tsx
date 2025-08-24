"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {[
        {
          question: "Où sont hébergées mes données ?",
          answer: (
            <>
              Toutes vos données, fichiers PDF, contenus extraits, base
              vectorielle, base de données, cache, sont hébergées exclusivement
              en France, dans des centres de données, certifiés{" "}
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="text-primary hover:underline"
              >
                SecNumCloud
              </button>{" "}
              et localisés à Paris.
              <br />
              <br />
              L'infrastructure est conforme au RGPD, et aucune donnée ne
              transite en dehors de l'Union Européenne.
              <br />
              <br />
              L'ensemble du traitement est effectué sur des serveurs privés,
              sécurisés, et 100% français.
            </>
          ),
        },
        {
          question:
            "Mes données sont-elles utilisées pour entraîner une intelligence artificielle ?",
          answer:
            "Non.\n\nVos données ne sont jamais utilisées pour entraîner ou améliorer un modèle d'IA, que ce soit en interne ou par un fournisseur tiers.\n\nLes modèles utilisés dans notre solution (Mistral AI ou OpenAI) sont configurés pour ne conserver aucune trace des échanges et ne pas exploiter les données transmises.",
        },
        {
          question:
            "Le modèle d'intelligence artificielle peut-il voir l'intégralité de mes documents ?",
          answer:
            "Non.\n\nLorsqu'un utilisateur pose une question, seule une sélection ciblée de passages pertinents est transmise au modèle pour générer une réponse.\n\nCela limite fortement l'exposition de vos documents, tout en garantissant la pertinence des réponses.",
        },
        {
          question: "Qui a accès à mes documents ?",
          answer:
            "Seuls les utilisateurs de votre entreprise autorisés via une authentification sécurisée ont accès à l'interface et aux documents.\n\nAucun tiers, aucun prestataire technique, ni même notre équipe, n'accède aux contenus sans votre accord explicite.",
        },
        {
          question: "Peut-on supprimer toutes les données si l'on arrête ?",
          answer:
            "Oui.\n\nVous pouvez supprimer l'ensemble de vos données à tout moment : documents, textes extraits, index vectoriels, historiques de recherche, etc.\n\nUne procédure complète d'effacement est disponible sur demande, avec confirmation écrite.",
        },
        {
          question:
            "Existe-t-il une solution sans communication avec des services externes ?",
          answer:
            "Oui.\n\nAvec notre offre Business, toutes les données sont traitées sur un serveur privé dédié en France, sans faire appel aux API externes d'OpenAI ou Mistral.\n\nCela garantit un haut niveau de confidentialité, conforme aux exigences des secteurs sensibles et réglementés.",
        },
        {
          question: "Quels modèles sont utilisés pour répondre aux questions ?",
          answer: (
            <>
              <ul className="list-disc pl-5">
                <li>
                  OpenAI avec notre politique{" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="text-primary hover:underline"
                  >
                    Empreinte Zéro
                  </button>{" "}
                  : vos données ne sont jamais stockées ni utilisées pour
                  entraîner les modèles. Suppression immédiate après traitement
                  et hébergement exclusivement en France.
                </li>
                <li>
                  Mistral AI, modèle français performant, exécuté soit via API,
                  soit en local sur GPU (offre Business).
                </li>
              </ul>
            </>
          ),
        },
        {
          question: "La solution est-elle conforme au RGPD ?",
          answer: (
            <>
              Oui, la solution est conçue pour être 100% conforme au RGPD :
              <ul className="list-disc pl-5">
                <li>Hébergement en France</li>
                <li>
                  Aucune utilisation des données à des fins commerciales ou
                  d'entraînement
                </li>
                <li>Droit à l'effacement</li>
                <li>Pas de profilage utilisateur</li>
                <li>Journalisation et supervision sur demande</li>
              </ul>
            </>
          ),
        },
      ].map((faq, i) => (
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
