"use client";

import React, { useState } from "react";
import * as Headless from "@headlessui/react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";
import { Button } from "@/components/button";

export function TermsModal() {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <Headless.Button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer font-medium text-gray-950 transition-colors hover:text-gray-950/75 data-hover:text-gray-950/75"
      >
        Conditions d’utilisation
      </Headless.Button>

      <Dialog size="3xl" open={open} onClose={setOpen}>
        <DialogTitle>Conditions d’utilisation</DialogTitle>
        <DialogDescription>
          Utilisation du service en toute transparence, responsabilités
          mutuelles et bonnes pratiques.
        </DialogDescription>
        <DialogBody>
          <div className="space-y-4 text-sm/6">
            <p>
              Ces conditions encadrent l’accès et l’utilisation
              d’Aliénor&nbsp;AI. En utilisant nos services, vous acceptez d’agir
              de manière responsable et conforme à la loi.
            </p>
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                Principes clés
              </h4>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Utilisation équitable, non abusive et conforme à la
                  réglementation.
                </li>
                <li>
                  Respect de la propriété intellectuelle et des droits des
                  tiers.
                </li>
                <li>
                  Interdiction des contenus illégaux, malveillants,
                  discriminatoires ou obscènes.
                </li>
                <li>
                  Disponibilité “best effort”&nbsp;: nous mettons tout en œuvre
                  pour garantir la qualité du service.
                </li>
                <li>
                  Résiliation possible en cas de non‑respect répété des règles
                  d’utilisation.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                Assistance
              </h4>
              <p>
                Pour toute question ou litige, contactez notre équipe support.
                Nous répondons rapidement et cherchons des solutions
                pragmatiques.
              </p>
            </div>
          </div>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setOpen(false)}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
}

export function PrivacyModal() {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <Headless.Button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer font-medium text-gray-950 transition-colors hover:text-gray-950/75 data-hover:text-gray-950/75"
      >
        Politique de confidentialité
      </Headless.Button>

      <Dialog size="3xl" open={open} onClose={setOpen}>
        <DialogTitle>Politique de confidentialité</DialogTitle>
        <DialogDescription>
          Nous accordons la plus haute importance à la confidentialité, à la
          sécurité et au contrôle de vos données.
        </DialogDescription>
        <DialogBody>
          <div className="space-y-4 text-sm/6">
            <p>
              Vos données vous appartiennent. Nous les traitons dans l’unique
              but de fournir et d’améliorer le service, en conformité avec le
              RGPD.
            </p>
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                Engagements clés
              </h4>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Minimisation des données&nbsp;: nous collectons uniquement ce
                  qui est nécessaire.
                </li>
                <li>
                  Chiffrement des données en transit et au repos lorsque
                  applicable.
                </li>
                <li>
                  Contrôle et transparence&nbsp;: accès, rectification et
                  suppression à votre demande.
                </li>
                <li>
                  Aucune vente de données&nbsp;; partage limité aux
                  sous‑traitants essentiels, contractuellement encadrés.
                </li>
                <li>
                  Rétention limitée&nbsp;: suppression ou anonymisation selon
                  des durées clairement définies.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                Contact confidentialité
              </h4>
              <p>
                Pour exercer vos droits ou poser une question, contactez notre
                équipe. Nous répondons dans les meilleurs délais.
              </p>
            </div>
          </div>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setOpen(false)}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
}
