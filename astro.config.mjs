import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";
import yaml from '@rollup/plugin-yaml';
import dsv from '@rollup/plugin-dsv'

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), mdx()],
  vite: {
    plugins: [yaml(), dsv()]
  }
});