"use client";

import * as Headless from "@headlessui/react";
import NextLink, { type LinkProps } from "next/link";
import React, { forwardRef } from "react";
import { phTrackClick, type AnalyticsProps } from "@/lib/analytics";

export const Link = forwardRef(function Link(
  {
    phEvent,
    phProps,
    onClick,
    ...props
  }: LinkProps &
    React.ComponentPropsWithoutRef<"a"> &
    AnalyticsProps & {
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    },
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    try {
      onClick?.(e);
    } catch {
      // noop
    }
    if (phEvent) {
      try {
        phTrackClick(phEvent, phProps)(e);
      } catch {
        // noop
      }
    }
  }

  return (
    <Headless.DataInteractive
      {...props}
      ref={ref}
      as={NextLink}
      onClick={handleClick}
    />
  );
});
