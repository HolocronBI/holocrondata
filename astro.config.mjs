import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://holocrondata.net",
  redirects: { "/kontakt": "/#contact" },
  vite: { server: { allowedHosts: ["terminal.local"] } },
});
