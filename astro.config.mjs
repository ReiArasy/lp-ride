// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
  integrations: [{
    name: 'publishable-content-guard',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        async function inspect(folder) {
          for (const entry of await readdir(folder, { withFileTypes: true })) {
            const file = path.join(folder, entry.name);
            if (entry.isDirectory()) await inspect(file);
            else if (/\.html$/i.test(entry.name) && /\bTODO\b/i.test(await readFile(file, 'utf8'))) {
              throw new Error(`Unpublished TODO content in ${file}. Hide the section or resolve its content before publishing.`);
            }
          }
        }
        await inspect(fileURLToPath(dir));
      },
    },
  }],
  vite: {
    plugins: [tailwindcss()],
  },
});
