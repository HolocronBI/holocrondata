# Pearl / Silver / Glass

Grundlage: Corporate-Identity-Pearl-Glass-v0.2.pdf, überarbeitete Fassung vom 06.11.2026 ohne Baum- oder Naturmotiv.

| Rolle | Farbe |
|---|---|
| Pearl / Hintergrund | `#F5F6F8` |
| White / Inhaltsflächen | `#FFFFFF` |
| Silver / Material und Kanten | `#CBD0D8` |
| Carbon / Text, Kontrastabschnitt | `#181A20` |
| Slate / Sekundärtext | `#5E6573` |
| Iris / Aktionen, Fokus | `#6750CF` |
| Lilac / helle Akzentfläche | `#EAE5FA` |

Manrope: 400 Text, 500 UI, 600 Überschriften, 700 sparsam. IBM Plex Mono 400 für kurze Labels. Lokal bereitgestellte WOFF2-Dateien, lateinische Zeichensätze einschließlich deutscher Umlaute. Lizenzen in `public/fonts/`. Hero bis 64 px / mobil 40 px, Abschnitte 36 / 28 px, Fließtext 18 / 16 px. Headlines leicht negativ gesperrt; Zahlen tabellarisch.

Materialstudie: vorhandenes, eigenständig generiertes Motiv übernommen, als WebP in 800 und 1600 px sowie als Social-JPEG optimiert. Transparente Navigation und eine kleine Bildbeschriftung; deckende Inhalts- und Formularflächen. Maximal 1200 px Inhaltsbreite, mobil 20 px Seitenraum. Karten 16 px, Buttons 10 px. Keine Natur-, Fahrzeug-, Sponsor- oder Schachmotive.

Bewegung: UI 200 ms, Materialbewegung 9 s. `prefers-reduced-motion` setzt Bewegung und weiches Scrollen aus. Keine versteckten Scroll-Reveal-Inhalte oder Canvas-Dauerschleifen. Silber erscheint als Material, nicht als niedrig kontrastierende Textfarbe.

`brand.ts` zentralisiert die Identität; `name` bleibt bis zur Namensentscheidung leer. `brandLabel` verwendet zwischenzeitlich „BI & AI Consulting“ für Titel und Metadaten. Kontaktadresse und bestehende Domain bleiben erhalten.

Das eigenständige SVG-Signet in `public/brand/mark.svg` abstrahiert die Materialstudie: eine aufsteigende, gefaltete Silberfläche mit einer transparent wirkenden Innenfläche, dunkler Unterkante und schmaler Iris-Kante. Kein Bildausschnitt, keine Wortmarke. Header und Footer verwenden dasselbe Signet (112 × 48 px, mobil 84 × 36 px, auf sehr schmalen Ansichten 70 × 30 px). Der Startseitenlink erhält einen zugänglichen Textnamen.

`public/favicon.svg` ist eine kontrastreichere, vereinfachte Variante auf Carbon für kleine Tab-Symbole. Logo und Favicon sind getrennt zentral konfiguriert; beide SVGs haben transparente bzw. definierte Hintergründe, keine Fremdressourcen und keine zusätzliche Laufzeit. Social-Motiv und Seitenstruktur bleiben namenunabhängig.

Schriftquellen:
- https://github.com/google/fonts/tree/main/ofl/manrope
- https://github.com/IBM/plex
