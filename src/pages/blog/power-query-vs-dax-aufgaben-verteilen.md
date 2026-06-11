---
layout: ../../layouts/BlogPost.astro
title: "Power Query vs. DAX: Was wohin gehört"
excerpt: "Power Query und DAX sind zwei unterschiedliche Werkzeuge mit unterschiedlichen Aufgaben. Wir zeigen, wo die Grenzen liegen und wie eine klare Aufteilung Zeit spart."
date: 2026-06-11
tag: Modelle & Reports
readTime: 5
---

# Power Query vs. DAX: Was wohin gehört

Es ist eine Frage, die in vielen BI-Projekten auftaucht: Sollte ich diese Logik in Power Query oder in DAX implementieren? Die Antwort ist selten eindeutig, doch eine klare Aufteilung der Verantwortlichkeiten macht den Unterschied zwischen einem wartbaren und einem chaotischen System aus.

Wir sehen häufig, dass diese beiden Werkzeuge vermischt werden – nicht aus böser Absicht, sondern weil ihre Fähigkeiten sich überlappen. Doch wer versteht, wofür jedes Werkzeug gemacht ist, trifft bessere Entscheidungen.

## Die grundsätzliche Aufgabenteilung

Power Query ist der Datenimporteur und Datenreiniger. DAX ist der Analytiker und Rechner. Wenn wir es vereinfacht ausdrücken: Power Query bringt die Daten in Form, DAX beantwortet Fragen mit ihnen.

Power Query arbeitet *vor* dem Datenmodell. Es ist der Ort, an dem Rohdaten ankommen – aus Datenbanken, Excel-Dateien, Webseiten, APIs oder anderen Quellen – und transformiert werden. Power Query sortiert, filtert, teilt Spalten auf, vereint Tabellen zusammen und bereitet alles für die Modellierung vor.

DAX arbeitet *innerhalb* des Datenmodells. Es ist die Sprache der Berechnungen, Aggregationen und Analysen. DAX definiert Beziehungen zwischen Tabellen, erstellt Measures, die Fragen wie "Wie viel Umsatz hatten wir im letzten Quartal?" beantworten, und formiert Ergebnisse in Reports.

## Wann Power Query die richtige Wahl ist

Power Query gehört zum Einsatz, wenn es um Datenqualität und Datenvorbereitung geht. Wenn Daten fehlen, doppelt vorkommen oder in der falschen Form angekommen sind – Power Query ist dafür da.

Ein typisches Beispiel: Eine Kundenliste aus zwei unterschiedlichen Systemen soll zusammengeführt werden. Der eine liefert Daten als Spalten (Vorname, Nachname), der andere als eine einzige Spalte ("Hans Müller"). Power Query vereint diese, bereinigt die Duplikate und erstellt eine saubere Basis.

Oder ein anderes Szenario: Rohdaten aus einem System enthalten Datumsangaben im Format "01.01.2024", im anderen System im Format "01/01/2024". Power Query standardisiert das, bevor die Daten überhaupt in das Modell gelangen.

Auch das Filtern großer Datenmengen gehört hierher. Wenn täglich Millionen von Transaktionen importiert werden, aber für die Analyse nur die letzten zwei Jahre relevant sind, macht es Sinn, diese Filterung in Power Query zu machen – nicht später in DAX. So laden Berichte schneller, und die Modellgröße bleibt überschaubar.

Ein weiterer klarer Fall: Datenverteilung über mehrere Tabellen. Wenn Rechnungsdaten in einer flachen Struktur ankommen, aber in drei logisch getrennte Tabellen gehören (Kunden, Rechnungen, Positionen), ist Power Query der richtige Ort für diese Aufteilung.

## Wann DAX die richtige Wahl ist

DAX ist für Logik zuständig, die analytischer Natur ist – also für Fragen, nicht für Datenbereinigung.

Beispiel: Ein Unternehmen möchte wissen, welche Produkte in diesem Monat besser verkauft haben als im gleichen Monat des Vorjahres. Das ist eine Analyseaufgabe. Man könnte versuchen, diese Berechnung bereits in Power Query vorzunehmen – aber das ist falsch. Power Query kennt den Kontext "dieser Monat" oder "letztes Jahr" zum Zeitpunkt des Imports nicht. DAX dagegen wurde dafür entwickelt, diese zeitbezogenen Vergleiche direkt im Report zu ziehen.

Oder ein anderes Beispiel: Gewinnmarge. Die rohen Daten enthalten Umsatz und Kosten. Power Query könnte technisch auch die Marge in jeder einzelnen Reihe berechnen. Aber dann wird das Modell größer, und wenn die Definition von Marge sich später ändert, muss die ganze Pipeline neugeschrieben werden. Mit DAX bleibt die Definition zentral an einem Ort – und kann schnell angepasst werden.

Auch Aggregationen gehören zu DAX. Wenn Kunden nach Produkt-Kategorie gruppiert und summiert werden sollen, ist das eine DAX-Aufgabe. Power Query *könnte* auch gruppieren, würde dann aber eine neue vorberechnete Tabelle erstellen – unnötig, denn genau dafür gibt es Pivots und Aggregationen in DAX.

Ebenso gehören kontextabhängige Berechnungen zu DAX. Wenn ein Report den durchschnittlichen Verkaufspreis *pro Kundentyp* zeigen soll, muss DAX diesen Durchschnitt basierend auf dem Filter im Report neu berechnen. Power Query kann das nicht dynamisch – es müsste alle möglichen Kombinationen vorab berechnen.

## Die praktische Grenzlinie

Es gibt einen pragmatischen Test: Frage dich, ob die Berechnung oder Transformation den *Kontext* des Reports braucht.

Braucht sie keine Kontext-Information (keine Filter, keine Zeiträume, die der Nutzer auswählt), gehört sie zu Power Query. Das ist Datenvorbereitung.

Braucht sie Kontext – das heißt, das Ergebnis ändert sich je nachdem, wie der Report gefiltert ist – gehört sie zu DAX.

Ein Beispiel verdeutlicht das: Die Umrechnung von Millimetern in Zentimeter ist eine statische Transformation – Power Query. Die Berechnung von "Verkäufe dieses Monats" ist kontextabhängig – DAX.

## Häufige Fehler

Ein Fehler ist, zu viel vorberechnete Information in Power Query zu erstellen. Ein Unternehmen berechnet dort bereits alle erdenklichen Summen, Durchschnitte und Aggregationen. Das Modell wird groß, die Aktualisierung dauert lange, und neue Fragen erfordern neue Vorberechnungen. DAX ist für diese Flexibilität da.

Der andere Fehler ist das Gegenteil: zu viele komplexe Berechnungen in DAX, die besser als Datenpflege in Power Query gehörten. Ein Measure mit 50 Zeilen Code, das Duplikate zählt oder Datumsfehler korrigiert, ist ein Zeichen dafür, dass Power Query die falsche Form zu DAX schickt.

## Der praktische Workflow

In vielen Unternehmen läuft der Prozess so: Power Query importiert die Daten aus verschiedenen Quellen, bereitet sie auf, entfernt Fehler und verbindet sie sinnvoll. Dann wird das Modell in Power BI oder Excel erstellt – mit klaren Beziehungen und sauberen Tabellen. DAX schreitet ein für alles, das Analyse und Darstellung betrifft.

Ist der Power Query-Teil gut durchdacht, wird DAX einfacher. Ist DAX sauberer und fokussierter, wird das Modell wartbarer.

## Fazit

Power Query und DAX sind Partner, nicht Konkurrenten. Wer versteht, dass Power Query den Garten pflegt und DAX die Früchte erntet, baut Systeme, die über Jahre hinweg Sinn ergeben – wartbar, flexibel und schnell.

Falls in deinem Unternehmen aktuell Unklarheit darüber besteht, wo diese Grenzlinie verläuft, oder wenn Reports langsam werden, weil zu viel Logik am falschen Ort sitzt – [wir schreiben gerne auf, wo es sinnvoll ist, umzustrukturieren](https://holocrondatagroup.com/kontakt).