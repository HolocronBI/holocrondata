import { rmSync } from 'node:fs';
rmSync(new URL('../public/__qa.html', import.meta.url), { force: true });
