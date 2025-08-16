"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from "./src/sanity/schema";

export default defineConfig({
  name: "alienor-ai",
  title: "Aliénor AI Studio",
  basePath: "/studio",
  projectId: "627962ub",
  dataset: "production",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2025-07-10" })],
});
