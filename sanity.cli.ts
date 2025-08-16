import { defineCliConfig } from "sanity/cli";

const projectId = "627962ub";
const dataset = "production";
const studioHost = "alienor";

export default defineCliConfig({ api: { projectId, dataset }, studioHost });
