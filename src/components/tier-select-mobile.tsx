"use client";

import React from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/16/solid";
import { Link } from "@/components/link";

type Option = { name: string; slug: string };

export function TierSelectMobile({
  options,
  selectedSlug,
}: {
  options: Option[];
  selectedSlug: string;
}) {
  // Debug logs to validate client rendering and selection during development
  console.debug("[TierSelectMobile] selectedSlug:", selectedSlug);
  console.debug(
    "[TierSelectMobile] options:",
    options.map((o) => o.slug).join(","),
  );

  const selected = options.find((o) => o.slug === selectedSlug) ?? options[0];

  return (
    <div className="relative inline-block">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {selected.name}
          <ChevronUpDownIcon className="size-4 fill-gray-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          {options.map((tier) => (
            <MenuItem
              key={tier.slug}
              as={Link}
              scroll={false}
              href={`/pricing?tier=${tier.slug}`}
              data-selected={tier.slug === selectedSlug ? true : undefined}
              className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
            >
              {tier.name}
              <CheckIcon className="hidden size-4 group-data-selected:block" />
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
        <ChevronUpDownIcon className="size-4 fill-gray-900" />
      </div>
    </div>
  );
}