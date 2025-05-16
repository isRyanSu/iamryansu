/* -------------------- Environment Variables Validation -------------------- */
import './src/env.js'
/* -------------------------------------------------------------------------- */

import { withPayload } from '@payloadcms/next/withPayload'

/**
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js
 * @type {import('next').NextConfig}
 */
const config = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default withPayload(config, { devBundleServerPackages: false })
