# Holocron — BI & AI Consulting

Astro-Website für BI- und AI-Beratung. Neue CI: Pearl / Silver / Glass. Der Markenname ist vorläufig und zentral konfiguriert.

**Stand: geprüfter Entwurf im Feature-Branch. Nicht nach `main` übernehmen, bevor die offenen Anbieterangaben und Rechtstexte vervollständigt sind.** Die bestehende Produktivseite wird dadurch nicht geändert.

## Lokal starten

Node.js 24 (siehe `.nvmrc`), npm:

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run check:site
npm run preview
```

`npm ci` verwendet den eingecheckten Lockfile. Astro bleibt das einzige direkte Framework-Paket; der Build erzeugt statische HTML-Dateien in `dist/`.

## Inhalte und Marke ändern

- `src/config/brand.ts`: Name, Kurzbeschreibung, Kontakt, Domain, Logopfad, Formularziel und Anbieterangaben.
- `src/content/home.ts`: konsistente deutsche und englische Startseitentexte.
- `src/components/Home.astro`: gemeinsame Struktur für `/` und `/en/`.
- `src/styles/global.css`: Farben, Typografie, Abstände, Materialien und responsive Darstellung.
- `src/components/Header.astro`, `Footer.astro`, `ContactForm.astro`: gemeinsam genutzte Bausteine.
- `src/pages/blog/*.md`: bestehende Beiträge und URLs; `src/layouts/BlogPost.astro` gestaltet alle Beiträge.
- `public/fonts/`: lokal ausgelieferte Schriftdateien und SIL-OFL-Lizenzen.
- `public/images/`: optimierte Materialstudie und vorhandene Dashboard-Ansicht.

Mehr dazu: [Branding](docs/branding.md), [Review](docs/review.md), [Prüfung und Veröffentlichung](docs/release-notes.md).

## Kontaktformular

Das vorhandene Formspree-Ziel `https://formspree.io/f/mbdqjadp` und `holocrondata@outlook.de` bleiben bestehen. Im Browser wird per `fetch` gesendet; ohne JavaScript funktioniert der normale POST zu Formspree. Native Pflichtfeld- und E-Mail-Prüfung, Erfolg, Fehler, Timeout und Wiederholungsversuche sind berücksichtigt. Nutzereingaben bleiben bei Fehlern erhalten.

Es wurden **keine echten Anfragen versendet**. Formspree-Freischaltung, Spam-/CAPTCHA-Konfiguration, Domainbeschränkungen, Quoten und tatsächliche E-Mail-Zustellung müssen vor dem Livegang vom Betreiber geprüft werden. Bei einer CAPTCHA-Anforderung des Dienstes zeigt die Website derzeit eine Fehlermeldung und verweist auf E-Mail; es wird kein CAPTCHA-Skript vorsorglich geladen.

### Kontrollierte Browser-Prüfung

```sh
npm run qa:prepare
npm run dev
```

`/__qa.html` zeigt die Website in Iframes mit echten Inhaltsbreiten von 1440, 768, 390 und 320 px. Die äußere Vorschau kann skaliert sein. Der Harness prüft Überlauf, Bilder und Schriften. Formular-Tests `success`/`error` verwenden ausschließlich im Astro-Entwicklungsmodus lokale Mock-Antworten, keine Netzwerkübermittlung. `npm test` prüft weitere Transportfehler mit injizierten Antworten.

`prebuild` entfernt die lokale QA-Seite. Der Produktionsbuild enthält weder Harness noch Mock-Transport. Ohne JavaScript bleiben alle Blogeinträge und Kerninhalte erreichbar; Suche und Pagination werden erst durch JavaScript eingeblendet.

## Vercel und Livegang

`vercel.json` verwendet `npm ci`, `npm run build` und `dist/`. Node 24 ist in `package.json` festgelegt. Laut bestehendem Setup veröffentlicht Vercel Pushes auf `main`. Ein Branch kann je nach Vercel-Projekteinstellung automatisch einen Preview-Build auslösen; das ist kein Produktions-Deployment.

Vor dem späteren Livegang:

1. Tatsächliche Anbieterangaben in `brand.ts` ergänzen, Impressum und Datenschutzhinweise einschließlich Dienstleisterverträgen und Löschfristen vervollständigen.
2. Nach inhaltlicher Prüfung `brand.legal.reviewed` auf `true` setzen. Bis dahin enthalten alle Seiten `noindex, nofollow` (kein Zugriffsschutz).
3. Formularzustellung, Domain und Vercel-Einstellungen prüfen; danach `npm run check:release` ausführen.
4. Produktionsbuild und Checks ausführen, geprüften Branch übernehmen. Kein Force-Push.

Die alte, von Astro nicht verwendete Root-`index.html` wurde entfernt. Der tatsächliche Einstieg bleibt `src/pages/index.astro`. Alte `.html`-Rechtslinks werden in Vercel auf die neuen Seiten weitergeleitet.

## Bestehende tägliche Blog-Automation

`.github/workflows/daily-blog-post.yml` bleibt unverändert. Der Workflow läuft um **07:00 UTC** (09:00 MESZ / 08:00 MEZ), führt `scripts/generate-post.mjs` mit dem bestehenden `ANTHROPIC_API_KEY`-Secret aus und **committet direkt auf `main`**. Entgegen der alten README wird dabei kein Review-PR erstellt. Manuell lässt er sich unter GitHub Actions auslösen; diese Überarbeitung hat ihn weder ausgeführt noch seine Einstellungen geändert.

Die bisher vorhandenen 127 Artikel bleiben erhalten. Ihre vollständige redaktionelle Prüfung ist nicht Bestandteil der Startseitenüberarbeitung. Vorhandene fachliche Aussagen in älteren Artikeln sollten vor einer Weiterverwendung geprüft werden.
