import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import env from '@next/env';
import algosearch from 'algoliasearch';
import { sync } from 'fumadocs-core/search-algolia/server';
import type { SearchIndex } from 'fumadocs-mdx';

// Load environment variables
env.loadEnvConfig(process.cwd());

const indexes = JSON.parse(
  readFileSync(
    resolve('./.next/server/chunks/fumadocs_search.json'),
  ).toString(),
) as SearchIndex[];

const client = algosearch('5IL5IC6HIH', '3722c7291eb2de44b057a9c9f66a5bcb');

const runSync = async () => {
  try {
    await sync(client, {
      document: 'newdocs',
      documents: indexes.map((docs) => ({
        _id: docs.id,
        title: docs.title,
        url: docs.url,
        structured: docs.structuredData,
      })),
    });
    console.log('Sync completed successfully');
  } catch (error) {
    console.error('Error during sync:', error);
  }
};

runSync();
