import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'node:path'
import url from 'node:url'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { User } from '@/cms/collections'
import { env } from '@/env'

const dirname = path.dirname(url.fileURLToPath(import.meta.url))

/**
 * @see https://payloadcms.com/docs/configuration/overview
 */
export const config = buildConfig({
  admin: {
    importMap: {
      importMapFile: path.resolve(dirname, '..', 'app', '(cms)', 'admin', 'importmap.js'),
    },
    user: User.slug,
  },
  collections: [User],
  db: postgresAdapter({
    migrationDir: path.resolve(dirname, 'migrations'),
    pool: {
      connectionString: env.CMS_DATABASE_URL,
    },
  }),
  editor: lexicalEditor(),
  graphQL: {
    disable: true,
  },
  secret: env.CMS_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload.types.ts'),
  },
})

export default config
