import { copyFileSync } from 'node:fs';
copyFileSync(new URL('../tests/browser-harness.html', import.meta.url), new URL('../public/__qa.html', import.meta.url));
console.log('Local QA harness: /__qa.html. Remove with npm run build before deployment.');
