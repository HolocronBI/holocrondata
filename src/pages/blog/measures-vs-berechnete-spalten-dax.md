---
layout: ../../layouts/BlogPost.astro
title: "Measures vs. berechnete Spalten in DAX: Wann was sinnvoll ist"
excerpt: "Measures und berechnete Spalten lösen unterschiedliche Probleme. Wir zeigen, wann welcher Ansatz die richtige Wahl ist und wie man häufige Fehler vermeidet."
date: 2026-09-13
tag: Modelle & Reports
readTime: 5
---

## Die Unterscheidung ist fundamentaler als sie scheint

In Power BI und Excel führt die Entscheidung zwischen Measures und berechneten Spalten immer wieder zu Diskussionen — manchmal auch zu unnötigen Umbauten von Reports, die bereits in Produktion sind. Wir sehen regelmäßig, dass diese beiden Konzepte verwechselt oder als austauschbar behandelt werden. Das ist der Punkt, an dem Modelle anfangen, ineffizient zu werden oder sogar Performance-Probleme entstehen.

Die Unterscheidung ist eigentlich klar, aber ihre praktischen Konsequenzen werden oft unterschätzt. Wer versteht, warum und wann welcher Ansatz Sinn macht, baut robustere Modelle und hat weniger Ärger mit der Wartung.

## Was berechnete Spalten wirklich sind

Berechnete Spalten entstehen zur Designzeit — sie werden berechnet, wenn das Modell geladen wird oder ein Refresh stattfindet. Das Ergebnis wird wie eine normale Spalte in der Tabelle gespeichert. Jede Zeile enthält einen vorberechneten Wert, der sich nicht mehr ändert, bis der nächste Refresh kommt.

Das hat unmittelbare Konsequenzen: Berechnete Spalten brauchen Speicherplatz. Je länger die Tabelle, desto mehr Speicher. Ein Unternehmen mit einer Verkaufstabelle mit fünf Millionen Zeilen merkt das schnell. Wenn man dann noch fünf oder zehn berechnete Spalten hinzufügt, kann das Modell erheblich schwerer werden.

Aberechnete Spalten glänzen da, wo Kontext wichtig ist — speziell Zeilenkontext. Wenn man beispielsweise in einer Verkaufstabelle für jede Zeile den Umsatz mit Margin berechnen möchte, greift man zu einer berechneten Spalte. Die Berechnung erfolgt Zeile für Zeile und hat Zugriff auf die Werte in dieser spezifischen Zeile.

Ein praktisches Beispiel: Man möchte aus dem Kundennamen und der Bestellnummer eine eindeutige ID erzeugen, indem man beide Werte kombiniert. Das funktioniert in einer berechneten Spalte elegant — man hat die Werte der aktuellen Zeile direkt zur Hand.

## Was Measures anders machen

Measures sind Formeln, die zur Laufzeit berechnet werden. Sie existieren nicht als echte Spalten im Modell. Wenn man einen Report öffnet oder Filter setzt, werden Measures neu berechnet — basierend auf dem aktuellen Kontext des Reports oder des visuellen Elements.

Das bedeutet: Measures sind flexibel und dynamisch. Sie reagieren auf Filter, auf die Auswahl einer Dimension, auf Zeiträume. Wenn man einen Measure definiert, der den Gesamtumsatz summiert, und man filtert dann den Report auf ein spezifisches Jahr oder eine Region, passt sich der Measure automatisch an.

Measures sind außerdem speichereffizient. Sie belegen keinen zusätzlichen Platz in der Datenbank — egal wie komplex die Formel ist. Das macht sie ideal für Szenarien mit großen Tabellen und vielen verschiedenen Analysen.

Der Preis dafür ist, dass Measures in einem anderen Kontext arbeiten als Zeilen: Sie haben Zugriff auf aggregierte Werte und Filterkontext, aber nicht auf Zeilenkontext. Sie können nicht direkt auf "die aktuelle Zeile" zugreifen wie eine berechnete Spalte.

## Wann berechnete Spalten sinnvoll sind

Berechnete Spalten braucht man überall dort, wo man mit Zeilenkontext arbeiten muss — also mit Werten aus der aktuellen Zeile. Das typische Szenario ist die Erstellung von Klassifizierungen, Kombinationen oder Transformationen auf Zeilenebene.

Ein häufiger Fall ist die Kategorisierung: Man hat ein Feld mit numerischen Werten und möchte es in Kategorien einteilen. Beispiel: Alter in Altersgruppen, Umsatzwerte in Größenklassen. Dafür braucht man den konkreten Wert der Zeile, also eine berechnete Spalte.

Auch wenn man aus mehreren Feldern einer Zeile einen Schlüssel oder einen lesbar gemachten Namen erstellen möchte, ist die berechnete Spalte das richtige Werkzeug. Die Kombination aus Standort und Filialennummer in eine einzelne Kennung umzuwandeln, funktioniert nur mit Zeilenkontext.

Wichtig: Berechnete Spalten sind auch das Mittel der Wahl, wenn die Calculation Engine von Power BI ein Problem hat — etwa weil man sehr komplexe Logik braucht, die sich besser in Zeile-für-Zeile-Logik ausdrücken lässt.

## Wann Measures die bessere Wahl sind

Measures sind überlegen, wenn es um Aggregationen und Analysen geht. Jede Art von Summe, Durchschnitt, Maximum, Anzahl oder Prozentsatz sollte ein Measure sein. Das ist nicht nur effizienter, sondern auch konzeptionell sauberer.

Measures glänzen auch bei Vergleichsberechnungen: Der Umsatz dieses Jahres versus letztes Jahr, die Abweichung vom Plan, der prozentuale Anteil am Gesamtumsatz — all das funktioniert elegant mit Measures, weil sie den Filterkontext verstehen und reagieren.

Ein großer Vorteil: Measures lassen sich einfacher pflegen. Wenn man die Logik einer Aggregation ändern muss, ändert man ein Measure ein Mal — und alle Berichte, die diesen Measure verwenden, sind sofort aktualisiert. Bei berechneten Spalten müssen hingegen alle Zeilen neuberechnet werden, was Zeit kostet.

Auch Performanz spricht oft für Measures. Wenn man zum Beispiel verschiedene Szenarien durchspielen möchte oder viele unterschiedliche Berechnungen braucht, sind Measures deutlich speicherschonender.

## Die praktische Faustregel

Wir empfehlen, nach dieser Regel zu denken: Brauche ich den Wert aus der aktuellen Zeile? Falls ja, berechnete Spalte. Muss ich Werte aggregieren oder aufsummieren? Falls ja, Measure. Arbeite ich mit Filterkontext und möchte, dass meine Berechnung dynamisch auf Filter reagiert? Measure.

Eine zweite Regel betrifft den Speicher: Je größer die Tabelle, desto wichtiger ist es, Measures statt berechneter Spalten zu nutzen. In einem Modell mit Millionen von Zeilen macht sich jede unnötige berechnete Spalte bemerkbar.

## Häufige Fehler vermeiden

Ein klassischer Fehler ist die berechnete Spalte für Aggregationen. Manche Entwickler erstellen eine berechnete Spalte, die für jede Zeile die Summe aller Verkäufe des Kunden ermittelt. Das funktioniert zwar, belastet aber das Modell massiv und reagiert nicht auf Filter im Report — Measures würden hier dynamisch reagieren.

Ein anderer Fehler ist das Verkennen von Zeilenkontext. Man versucht zum Beispiel, in einem Measure auf die aktuelle Zeile einer Dimension zuzugreifen, ohne zu verstehen, dass das nicht funktioniert. Das führt zu überraschenden Ergebnissen oder sogar zu Fehlermeldungen.

Auch die Vermischung ist problematisch: Wenn man berechnete Spalten und Measures vermischt, ohne klare Grenzen zu ziehen, wird das Modell schwer nachvollziehbar. Es sollte klar sein, welche Teile des Modells statisch sind und welche dynamisch reagieren.

## Zusammengefasst

Berechnete Spalten und Measures sind nicht austauschbar — sie lösen unterschiedliche Probleme. Die Entscheidung zwischen ihnen hat Konsequenzen für Speicher, Performance und Wartbarkeit des Modells. Wer diese Unterschiede versteht, baut Modelle, die nicht nur funktionieren, sondern auch effizient und wartbar bleiben.

Wenn ihr euch unsicher seid, ob euer Modell die richtige Balance zwischen beiden Ansätzen hat, oder wenn Speicher- oder Performance-Probleme entstehen, lohnt sich ein genauerer Blick. Wir helfen gerne dabei, eure Modelle zu durchleuchten und zu optimieren.

[Kontaktiert uns](/kontakt), wenn ihr Fragen zu eurer Power-BI-oder Excel-Modellierung habt.