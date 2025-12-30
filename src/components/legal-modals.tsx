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
import type { Dictionary } from "@/i18n/dictionaries";

export function TermsModal({ copy }: { copy: Dictionary["legal"]["terms"] }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <Headless.Button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer font-medium text-gray-950 transition-colors hover:text-gray-950/75 data-hover:text-gray-950/75"
      >
        {copy.trigger}
      </Headless.Button>

      <Dialog size="3xl" open={open} onClose={setOpen}>
        <DialogTitle>{copy.title}</DialogTitle>
        <DialogDescription>{copy.description}</DialogDescription>
        <DialogBody>
          <div className="space-y-4 text-sm/6">
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                {copy.principlesTitle}
              </h4>
              <ul className="list-disc space-y-2 pl-5">
                {copy.principles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                {copy.assistanceTitle}
              </h4>
              <p>{copy.assistance}</p>
            </div>
          </div>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setOpen(false)}>
            {copy.close}
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
}

export function PrivacyModal({
  copy,
}: {
  copy: Dictionary["legal"]["privacy"];
}) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <Headless.Button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer font-medium text-gray-950 transition-colors hover:text-gray-950/75 data-hover:text-gray-950/75"
      >
        {copy.trigger}
      </Headless.Button>

      <Dialog size="3xl" open={open} onClose={setOpen}>
        <DialogTitle>{copy.title}</DialogTitle>
        <DialogDescription>{copy.description}</DialogDescription>
        <DialogBody>
          <div className="space-y-4 text-sm/6">
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                {copy.commitmentsTitle}
              </h4>
              <ul className="list-disc space-y-2 pl-5">
                {copy.commitments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base/6 font-semibold text-gray-950">
                {copy.contactTitle}
              </h4>
              <p>{copy.contact}</p>
            </div>
          </div>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setOpen(false)}>
            {copy.close}
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
}
