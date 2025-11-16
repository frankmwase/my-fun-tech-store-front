import sharp from "sharp"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { buildConfig } from "payload"
import { Users } from "./collections/Users.ts"
import { Products } from "./collections/Products.ts"
import { Media } from "./collections/Media.ts"


export default buildConfig({
  editor: lexicalEditor(),
  admin: {
    importMap: {
      baseDir: "src/app/(payload)/(payload)/admin",
      importMapFile: "src/app/(payload)/(payload)/admin/importMap.js",
    },
  },
  collections: [
    Users,
    Products,
    Media,

],

  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_DATABASE_URL || "",
    },
  }),
  sharp,
})