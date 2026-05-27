---
layout: ../../layouts/BlogPost.astro
title: "Warum Excel kein Datenmodell ist — und was das für Ihr Reporting bedeutet"
excerpt: "Viele mittelständische Unternehmen führen ihr Reporting noch in Excel. Das funktioniert — bis es nicht mehr funktioniert. Was die Alternative ist und warum der Umstieg einfacher ist als gedacht."
date: 2025-01-15
tag: Datenmodellierung
readTime: 5
---

Wenn ich mit Unternehmen spreche, die ihr Reporting modernisieren möchten, sieht die Ausgangslage oft ähnlich aus: Eine Haupt-Excel-Datei, die über Jahre gewachsen ist. Mehrere Sheets, komplexe SVERWEIS-Formeln, ein paar Makros und die stille Vereinbarung, dass nur eine Person gleichzeitig darin arbeiten darf.

Das ist kein Vorwurf — Excel ist ein mächtiges Werkzeug. Aber es ist kein Datenmodell.

## Was ist der Unterschied?

Ein **Datenmodell** trennt konsequent drei Dinge:

1. **Rohdaten** — so wie sie aus dem Quellsystem kommen, unverändert
2. **Transformationslogik** — Bereinigung, Aggregation, Berechnung
3. **Darstellung** — der Report, das Dashboard, die Präsentation

In einer gewachsenen Excel-Datei sind alle drei Ebenen vermischt. Die Verkaufszahlen stehen in Spalte B, die Formel in Spalte C berechnet die Marge und gleichzeitig bestimmt eine bedingte Formatierung die Farbe der Zelle. Wenn sich an den Rohdaten etwas ändert, kann das unbeabsichtigt Formeln und Darstellung kaputtmachen.

## Warum wird das zum Problem?

Solange ein Unternehmen klein ist und eine Person alle Zusammenhänge im Kopf hat, funktioniert das System. Das Problem entsteht, wenn:

- **Datenvolumen wächst** — Excel hat Grenzen, und selbst darunter wird es langsam
- **Mehrere Personen** auf die Daten zugreifen müssen
- **Quellen sich ändern** — ein neues ERP, ein neuer Standort, eine neue Produktlinie
- **Jemand krank ist** — und niemand sonst die Datei versteht

Das Risiko liegt nicht im täglichen Betrieb, sondern im Ausnahmefall.

## Was ist die Alternative?

Für die meisten mittelständischen Unternehmen ist der pragmatische Weg ein **Stern-Schema in Power BI** mit einer strukturierten Datenquelle (Excel, SQL, CSV — je nachdem was vorhanden ist).

Das bedeutet konkret:

- Eine **Faktentabelle** mit den transaktionalen Daten (Verkäufe, Buchungen, Ereignisse)
- Mehrere **Dimensionstabellen** (Kunden, Produkte, Zeit, Regionen)
- Klare Beziehungen zwischen diesen Tabellen

Power BI übernimmt dann die Darstellung — und die Berechnungslogik (DAX) ist sauber vom Report getrennt.

## Ist das aufwendig?

Der initiale Aufwand ist real. Eine solche Migration dauert typischerweise zwei bis vier Wochen, je nach Komplexität der Ausgangsdaten.

Aber danach:

- Neue Reports entstehen in Stunden statt Tagen
- Datenaktualisierungen laufen automatisch
- Jede Person im Unternehmen kann den Report öffnen — ohne Angst, etwas kaputtzumachen

Das ist der Punkt, an dem Reporting aufhört, Arbeit zu sein, und anfängt, Wert zu schaffen.

---

Wenn Sie sich fragen, ob Ihr aktuelles Reporting an diese Grenzen stößt: Ein kurzes Gespräch reicht meist, um das einzuschätzen. [Kontaktieren Sie mich](/# kontakt) — kein Pitch, kein Angebot, nur eine ehrliche Einschätzung.
