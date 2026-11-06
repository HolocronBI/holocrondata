# Umsetzung und Prüfstand — 06.11.2026

## Ergebnis

Startseite auf BI- und AI-Beratung für Mittelstand, Finance und Controlling ausgerichtet; neue Pearl/Silver/Glass-CI, lokale Schriftdateien, optimiertes Materialmotiv, eigene DE-/EN-Seiten, gemeinsame Komponenten, klarer Kontaktweg und gepflegte Blogdarstellung. Der Name bleibt austauschbar. Die alte ungenutzte Root-HTML-Datei wurde nach Prüfung des Astro-Builds entfernt.

Alle 127 Artikel und ihre URLs bleiben erhalten. In 13 Artikeln wurde ausschließlich die mit dem Layout-Titel identische, doppelte H1 entfernt. Alte `/kontakt`-Links bekommen eine Weiterleitung zum Kontaktbereich. Die bestehende tägliche Blog-Automation bleibt unverändert.

## Durchgeführte Prüfungen

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

Keine Lighthouse-Messung, kein vollständiges WCAG-Audit, keine Live-Zustellprüfung und keine vollständige redaktionelle Faktenprüfung der 127 älteren Blogartikel durchgeführt. Diese Einschränkungen ändern nichts am geprüften statischen Build und den oben konkret aufgeführten Funktionstests.
