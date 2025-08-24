"use client";

import { Button } from "@/components/button";
import { Combobox, ComboboxLabel, ComboboxOption } from "@/components/combobox";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";
import { Field, FieldGroup, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import * as Headless from "@headlessui/react";

export function FeedBackModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (open: boolean) => void;
}) {
  const helpTopics = [
    "Tarification",
    "Produit",
    "Fonctionnalités",
    "Facturation",
    "Compte et sécurité",
    "Intégrations",
    "Données et confidentialité",
    "Autre",
  ];
  return (
    <Dialog size={"xl"} open={open} onClose={onClose}>
      <DialogTitle>Centre d’aide</DialogTitle>
      <DialogDescription>
        Vous avez une question sur le produit ? Choisissez une catégorie,
        indiquez un sujet et décrivez votre demande. Notre équipe vous répondra
        rapidement.
      </DialogDescription>
      <DialogBody>
        <FieldGroup>
          <Field>
            <Label>Sujet de votre question</Label>
            <Input
              name="subject"
              placeholder="Titre de votre question"
              autoFocus
            />
          </Field>
          <Field>
            <Label>Catégorie</Label>
            <Combobox
              name="type"
              options={helpTopics}
              displayValue={(type) => type as string}
              placeholder="Sélectionnez une catégorie"
            >
              {(type) => (
                <ComboboxOption value={type}>
                  <ComboboxLabel>{type}</ComboboxLabel>
                </ComboboxOption>
              )}
            </Combobox>
          </Field>
          <Field>
            <Label>Votre question</Label>
            <Textarea
              rows={4}
              name="feedback"
              placeholder="Décrivez votre question en détail (contexte, étapes, captures, suggestions, etc.)"
            />
          </Field>
        </FieldGroup>
      </DialogBody>
      <DialogActions>
        <Button plain onClick={() => onClose(false)}>
          Fermer
        </Button>
        <Button tabIndex={0} onClick={() => onClose(false)}>
          <PaperAirplaneIcon />
          Envoyer la demande
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Feedback() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li>
        <Headless.Button
          type="button"
          onClick={() => setOpen(true)}
          className="cursor-pointer font-medium text-gray-950 transition-colors hover:text-gray-950/75 data-hover:text-gray-950/75"
        >
          Centre d’aide
        </Headless.Button>
      </li>

      <FeedBackModal open={open} onClose={setOpen} />
    </>
  );
}
