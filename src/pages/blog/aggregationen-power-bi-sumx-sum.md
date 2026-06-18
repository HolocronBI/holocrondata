---
layout: ../../layouts/BlogPost.astro
title: "Aggregationen in Power BI richtig einsetzen: Was SUMX von SUM unterscheidet"
excerpt: "SUM und SUMX liefern oft unterschiedliche Ergebnisse – obwohl beide Summen berechnen. Wir zeigen, wann welche Funktion die richtige Wahl ist und wie man typische Fehler vermeidet."
date: 2026-06-18
tag: Modelle & Reports
readTime: 5
---

## Das Problem mit der Auswahl der richtigen Aggregation

In vielen BI-Projekten entstehen Fehler nicht durch fehlende Funktionen, sondern durch die Wahl der falschen. Das zeigt sich besonders bei Aggregationsfunktionen in Power BI. SUM und SUMX sind sich auf den ersten Blick sehr ähnlich – beide addieren Werte. Doch in der Praxis führen sie zu völlig unterschiedlichen Ergebnissen, wenn die Datenstruktur komplex wird.

Wir sehen häufig, dass Entscheider auf Berichte schauen und sich fragen, warum die Gesamtsumme nicht stimmt. Die Ursache liegt oft darin, dass die falsche Aggregationsfunktion verwendet wurde. Das Problem verschärft sich, wenn Daten aus mehreren Tabellen kombiniert werden oder wenn auf granularer Ebene Berechnungen stattfinden müssen.

## Wie SUM funktioniert – und wo seine Grenzen liegen

SUM ist die klassische Aggregationsfunktion. Sie fasst alle Werte einer Spalte zusammen. Das funktioniert wunderbar, solange es um einfache Addition geht: Alle Verkaufszahlen addieren, alle Kosten aufsummieren, alle Mengen zusammentragen.

Doch SUM hat eine Besonderheit: Die Funktion arbeitet auf der Ebene, auf der sie aufgerufen wird. Wenn wir SUM in einem visuellen Element verwenden, das nach Kunde und Monat gefiltert ist, berechnet SUM die Summe nur über die bereits gefilterten und aggregierten Zeilen.

Ein Beispiel: Ein Unternehmen hat eine Tabelle mit Verkäufen. Jede Zeile enthält einen Verkauf mit Betrag, Kunde und Produkt. Wenn wir einen Report erstellen, der Umsätze pro Kunde zeigt, funktioniert SUM perfekt. Aber sobald wir Zwischenberechnungen auf Zeilenbasis durchführen müssen – also zum Beispiel einen Rabatt berechnen, der sich auf die Menge bezieht, bevor wir summieren – wird SUM schnell zum Problem.

## SUMX: Summe mit Kontext und Berechnung

SUMX ist anders. Diese Funktion ist eine "zeilenweise Aggregation". Sie iteriert über eine Tabelle, führt für jede Zeile eine Berechnung durch und summiert das Ergebnis. Das ist der entscheidende Unterschied.

Wo SUM eine bereits berechnete oder vorhandene Spalte aufsummiert, berechnet SUMX erst für jede Zeile, dann summiert. Das ermöglicht Berechnungen, die SUM nicht leisten kann.

Ein realistisches Szenario: Ein Einzelhandelsunternehmen möchte den Gesamtumsatz mit Rabatten berechnen. Für jede Transaktion gibt es eine Basismenge und einen Rabattsatz. Der tatsächliche Umsatz ist nicht einfach die Summe der Basismenge, sondern: Basismenge abzüglich Rabatt, dann summiert über alle Transaktionen. Mit SUM würde man zuerst eine Hilfsspalte erstellen müssen, die Menge minus Rabatt für jede Zeile berechnet. Mit SUMX wird das elegant in einer Zeile gelöst.

## Wann führt das zu unterschiedlichen Ergebnissen?

Der kritische Fall tritt auf, wenn zwischen den Daten eine Viele-zu-Viele-Beziehung oder eine mehrstufige Hierarchie existiert. Stellen wir uns vor: Ein Unternehmen hat Produkte und Kategorien. Ein Produkt kann in mehreren Kategorien liegen (weil die Datenbasis nicht normalisiert ist). Wenn wir mit SUM arbeiten und versehentlich über diese denormalisierte Struktur summieren, wird jeder Wert mehrfach gezählt.

Mit SUMX können wir präziser arbeiten. Wir können die Summe auf Basis einer spezifischen Tabelle und Beziehung berechnen, ohne dass versehentliche Duplikate entstehen.

Ein weiterer Fall: Wir möchten einen Durchschnittspreis pro Kategorie berechnen. Das ist nicht einfach die Summe aller Preise geteilt durch die Anzahl der Produkte – das wäre falsch, wenn Produkte unterschiedliche Verkaufsmengen haben. Mit SUMX können wir sagen: "Für jede Kategorie: Summe (Verkaufsmenge mal Preis) geteilt durch Summe (Verkaufsmenge)". Das liefert den echten gewichteten Durchschnitt.

## Perormance: Ein wichtiger Aspekt

Wir müssen auch ehrlich über Perormance sprechen. SUMX ist mächtiger, aber auch rechenintensiver. Die Funktion iteriert über Zeilen – das kann bei großen Datenmengen zum Leistungsproblem werden.

SUM ist schneller, weil Power BI diese Aggregation auf Basis des Datenmodells direkt durchführt. Wenn also SUM das gewünschte Ergebnis liefert, ist es die bessere Wahl.

Es geht um das richtige Werkzeug für das richtige Problem. Eine komplexe SUMX-Berechnung ist wertvoll, wenn sie nötig ist. Sie als Standard zu verwenden – nur um sicherzustellen, dass alles korrekt ist – führt zu unnötigen Perfomanzproblemen.

## Praktische Faustregeln

Wir empfehlen diese Überlegung: Nutzt SUM, wenn ihr über bereits granulare Daten summiert und keine Zwischenberechnungen nötig sind. Das ist der Standard-Fall und der schnellste Weg.

Greift zu SUMX, wenn ihr für jede Zeile erst etwas berechnen müsst, bevor ihr summiert. Oder wenn ihr über eine Tabelle iterieren müsst, die nicht direkt in euer Filter-Kontext passt.

Und prüft euer Datenmodell kritisch. Viele Probleme entstehen, weil die Beziehungen zwischen Tabellen nicht sauber definiert sind. Ein klares, normalisiertes Modell macht sowohl SUM als auch SUMX zuverlässiger.

## Zusammenfassung

Der Unterschied zwischen SUM und SUMX ist nicht akademisch – er hat reale Auswirkungen auf die Korrektheit eurer Reports. SUM ist die Standard-Aggregation und funktioniert schnell. SUMX bietet mehr Kontrolle und ermöglicht zeilenweise Berechnungen, kostet aber Rechenleistung.

Die Wahl hängt davon ab, was ihr berechnen müsst und wie eure Daten strukturiert sind. Im Zweifelsfall empfehlen wir, die Anforderung genau zu analysieren: Kann ich das mit SUM erreichen und bleibst dabei performant? Dann macht das. Braucht ihr Zwischenberechnungen oder komplexere Logik pro Zeile? Dann ist SUMX der Weg.

Wenn ihr unsicher seid, welche Aggregation für euren konkreten Report die richtige ist – oder wenn eure Berichte aktuell zu langsam laufen – [kontaktiert uns](/kontakt). Wir helfen euch, das richtige Aggregations-Setup für euer Datenmodell zu finden.