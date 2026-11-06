import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://holocrondata.net",
  redirects: { "/kontakt": "/#contact", "/blog": "/" },
  vite: { server: { allowedHosts: ["terminal.local"] } },
});
