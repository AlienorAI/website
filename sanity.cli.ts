import { defineCliConfig } from 'sanity/cli'

const projectId = "627962ub"
const dataset = "production"

export default defineCliConfig({ api: { projectId, dataset } })
