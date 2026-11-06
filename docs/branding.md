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

`brand.ts` zentralisiert die vorläufige Identität. Das einfache Plus-Zeichen führt die bestehende neutrale Markierung fort; es ist kein fertig entwickeltes neues Logo. Ein späterer Name benötigt keine neue Seitenstruktur. Logo und Favicon verwenden denselben zentralen Pfad; Social-Motiv ist namenunabhängig.

Schriftquellen:
- https://github.com/google/fonts/tree/main/ofl/manrope
- https://github.com/IBM/plex
