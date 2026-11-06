# Umsetzung und Prüfstand — 06.11.2026

## Ergebnis

Der Nutzer hat den aktuellen Designstand einschließlich des reduzierten Logos am 06.11.2026 bestätigt. Header, Footer und Favicon sind bereits entsprechend umgesetzt und in der Branch-Vorschau bereitgestellt. Die Designfreigabe ändert den weiterhin offenen Produktions-Livegang und die unten dokumentierten fehlenden Anbieterangaben nicht.

Startseite auf BI- und AI-Beratung für Mittelstand, Finance und Controlling ausgerichtet; neue Pearl/Silver/Glass-CI, lokale Schriftdateien, optimiertes Materialmotiv, eigene DE-/EN-Seiten, gemeinsame Komponenten, klarer Kontaktweg und ein neues SVG-Signet ohne Wortmarke. Der Name bleibt austauschbar. Die alte ungenutzte Root-HTML-Datei wurde nach Prüfung des Astro-Builds entfernt.

Auf anschließenden Nutzerwunsch wurden Blogübersicht, 127 Artikel, Layout, Generator und täglicher Workflow aus dem Feature-Branch entfernt. Alte Blog-URLs werden in Vercel zur Startseite weitergeleitet; im lokalen Build existiert nur die Weiterleitung der Übersicht. Alte `/kontakt`-Links führen weiterhin zum Kontaktbereich. Der Workflow auf `main` bleibt bis zur Übernahme der Änderung bestehen.

## Logo vereinfacht nach Nutzerfeedback

Die bildnahe Silberform wurde durch ein abstraktes, kompaktes Zeichen aus zwei versetzten Flächen in Carbon und Slate ersetzt. Die diagonale Negativfuge deutet eine Faltung an. Header/Footer: 40 px, mobil 36 px; Klickfläche mindestens 44 px. Favicon verwendet dasselbe Zeichen.

Produktionsbuild und Sitecheck (7 HTML-Dateien, 110 interne Links/Assets/Anker) erfolgreich. Desktop und 320-px-Ansicht im Browser geprüft: kein horizontaler Überlauf, Bilder und Schrift geladen. Kein Formularcode verändert; keine zusätzlichen Transporttests erforderlich. Aktueller Screenshot: `docs/images/subtle-logo-preview-20261106.jpg`.

## Vorherige Prüfung nach Logo-/Blogänderung

- Produktionsbuild: 7 HTML-Dateien (5 Inhaltsseiten, 2 statische Weiterleitungen).
- `npm test`: 10 Tests erfolgreich.
- `npm run check:site`: 110 interne Links/Assets/Anker; keine Blognavigation oder Artikel, Weiterleitungsregeln geprüft, neuer Favicon-Pfad, kein alter Markenname in den Startseiten. QA-Harness und Mock-Transport fehlen im Produktionsbuild.
- Browserprüfung des neuen Headers und Signets bei 1440, 768, 390 (EN) und 320 px: keine horizontalen Überläufe, keine kaputten geladenen Bilder, lokale Schrift geladen. Mobiles Menü enthält keinen Bloglink; Escape schließt es und gibt den Fokus zurück.
- Impressum und Datenschutz über Footerlinks im Browser erfolgreich geöffnet; Datenschutzdarstellung mit neuem Header visuell geprüft. Der frühere Browserblock trat bei dieser Prüfung nicht mehr auf.
- Der damalige Screenshot wurde durch die aktuelle Logoansicht oben ersetzt.
- Vercel meldet für Commit `4da6844` einen erfolgreichen Preview-Build. Die gehostete Vorschau verlangte im Testbrowser einen Vercel-Login; die visuelle Prüfung erfolgte lokal, keine Anmeldung oder Änderung des Zugriffsschutzes.

## Prüfungen der ursprünglichen Überarbeitung (vor Blogentfernung)

- Abhängigkeiten reproduzierbar mit `npm ci` über den Installationshelfer installiert; Lockfile eingecheckt.
- Produktionsbuild mit Astro 7.4.7 / Node 24 erfolgreich: 134 HTML-Seiten einschließlich der Kontakt-Weiterleitung.
- `npm test`: 10 Tests erfolgreich. POST-Payload, beide bekannten Erfolgsantworten, HTTP 400/422/429/500, fehlerhafte Antwort, Netzausfall und Timeout. Ausschließlich Mock-Transporte.
- `npm run check:site`: 127 Blog-URLs und 3.036 interne Links/Assets/Anker, genau eine H1 je Inhaltsseite, Sprachangaben, Metadaten, lokale Schriften, vorhandenes Formularziel. QA-Harness und Mock-Transport fehlen im Produktionsbuild.
- `npm audit --omit=dev`: 0 bekannte Schwachstellen nach dem Astro-Update (vorher 6 Findings).
- Tatsächliche Browser-Renderings im lokalen Entwicklungsserver: 1440, 768, 390 und 320 px Inhaltsbreite über QA-Iframes. Kein horizontaler Überlauf; lokale Schriften geladen. Die äußere QA-Ansicht kann skaliert sein. Kein Test auf physischer Mobil-Hardware.
- Visuell geprüft: Desktop-Hero, mobiles und Tablet-Hero, Tablet-Dashboard samt geladenem Bild, mobile Preisdarstellung, Desktop-Blogliste und Artikel. Der Materialrand wurde nach der ersten Sichtprüfung weicher in die Hintergrundfläche eingebunden.
- Interaktionen im Browser: mobiles Menü öffnen, per Escape schließen und Fokus zum Menüknopf zurückgeben; Preisanker auswählen und Menü automatisch schließen; Formular-Pflichtfelder; simulierte deutsche Erfolgsmeldung; englische Fehlermeldung mit Erhalt der Eingaben und erneut aktivem Button; Paket-Vorauswahl Build per URL; Blogsuche (Treffer und keine Treffer), Pagination zu Seite 2 und Artikelöffnung.
- Blog bei 390 px zusätzlich per gerenderter Layoutmessung auf Überlauf, Bilder und Schriften geprüft.
- Bewegungsreduktion ist im CSS für Animationen, Übergänge und Scrollen implementiert. Keine separate Betriebssystem-Emulation in diesem Browser verfügbar.
- Rechtstext-Dateien und Linkziele im Build geprüft. Die abschließende Browser-Klickprüfung wurde durch die URL-Sicherheitsrichtlinie des Testbrowsers blockiert. Kein vollständiger Browser-Audit der Rechtsseiten behauptet.

## Bewusst offen vor Veröffentlichung

Der Nutzer hat ausdrücklich **„Zunächst ohne Veröffentlichung“** gewählt. Dieser Stand darf daher aktuell nicht nach `main` übernommen werden. Kein Produktions-Deployment wurde beauftragt oder durchgeführt, seit diese Entscheidung gefallen ist.

1. Anbietername, ladungsfähige Anschrift und weitere tatsächlich einschlägige Impressumsangaben ergänzen.
2. Datenschutzentwurf auf tatsächliche Vercel-/Formspree-/Outlook-Konfiguration abstimmen; Auftragsverarbeitung, Übermittlungsgrundlagen und Aufbewahrungsfristen bestätigen. Die Entwürfe enthalten keine erfundene Vertragsbestätigung.
3. Formspree-Freischaltung, Spam-/CAPTCHA-Einstellungen, Quoten und echte E-Mail-Zustellung prüfen. Es wurden keine echten Nachrichten versendet.
4. Nach Prüfung `brand.legal.reviewed` setzen und `npm run check:release` erfolgreich ausführen. Der Check meldet gegenwärtig die drei erwarteten offenen Anbieter-/Prüfpunkte. Die Seiten bleiben bis dahin `noindex, nofollow`.
5. Vercel-Projekteinstellungen und kanonische Domain beim späteren Livegang bestätigen. Ein Vercel-Preview kann beim Branch-Push automatisch entstehen; das ist keine Freigabe für die Produktion.

Keine Lighthouse-Messung, kein vollständiges WCAG-Audit und keine Live-Zustellprüfung durchgeführt. Diese Einschränkungen ändern nichts am geprüften statischen Build und den oben konkret aufgeführten Funktionstests.
