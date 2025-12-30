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
import type { Dictionary } from "@/i18n/dictionaries";

export function FeedBackModal({
  open,
  onClose,
  copy,
}: {
  open: boolean;
  onClose: (open: boolean) => void;
  copy: Dictionary["feedback"];
}) {
  return (
    <Dialog size={"xl"} open={open} onClose={onClose}>
      <DialogTitle>{copy.title}</DialogTitle>
      <DialogDescription>{copy.description}</DialogDescription>
      <DialogBody>
        <FieldGroup>
          <Field>
            <Label>{copy.subjectLabel}</Label>
            <Input name="subject" placeholder={copy.subjectPlaceholder} autoFocus />
          </Field>
          <Field>
            <Label>{copy.categoryLabel}</Label>
            <Combobox
              name="type"
              options={copy.categories}
              displayValue={(type) => type as string}
              placeholder={copy.categoryPlaceholder}
            >
              {(type) => (
                <ComboboxOption value={type}>
                  <ComboboxLabel>{type}</ComboboxLabel>
                </ComboboxOption>
              )}
            </Combobox>
          </Field>
          <Field>
            <Label>{copy.questionLabel}</Label>
            <Textarea
              rows={4}
              name="feedback"
              placeholder={copy.questionPlaceholder}
            />
          </Field>
        </FieldGroup>
      </DialogBody>
      <DialogActions>
        <Button plain onClick={() => onClose(false)}>
          {copy.close}
        </Button>
        <Button tabIndex={0} onClick={() => onClose(false)}>
          <PaperAirplaneIcon />
          {copy.submit}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function Feedback({ copy }: { copy: Dictionary["feedback"] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <li>
        <Headless.Button
          type="button"
          onClick={() => setOpen(true)}
          className="cursor-pointer font-medium text-gray-950 transition-colors hover:text-gray-950/75 data-hover:text-gray-950/75"
        >
          {copy.trigger}
        </Headless.Button>
      </li>

      <FeedBackModal open={open} onClose={setOpen} copy={copy} />
    </>
  );
}
