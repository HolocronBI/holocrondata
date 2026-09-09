---
layout: ../../layouts/BlogPost.astro
title: "Faktentabellen und Dimensionstabellen: Der Kern eines guten Datenmodells"
excerpt: "Ein gut strukturiertes Datenmodell trennt Fakten von Kontextinformationen. Wir zeigen, warum diese Aufteilung für zuverlässige Reports entscheidend ist."
date: 2026-09-09
tag: Modelle & Reports
readTime: 5
---

## Das Problem mit ungeordneten Datenstrukturen

Wenn Daten zum ersten Mal aus verschiedenen Quellen zusammenkommen, liegen sie selten in einer Form vor, die direkt für Analysen nutzbar ist. Häufig finden wir eine Vermischung aus Messwerten, Kontext-Informationen und historischen Änderungen in denselben Tabellen vor. Das führt dazu, dass Berichte schwer zu warten sind, Abfragen unnötig komplex werden und die Zahlen im Laufe der Zeit immer weniger verlässlich wirken.

Das zentrale Problem: Wenn alles durcheinander liegt, weiß niemand mehr genau, wo eine bestimmte Information herkommt oder warum sich ein Wert gestern anders angefühlt hat als heute. Diese Unsicherheit führt zu Diskussionen zwischen Abteilungen, zu Verzögerungen bei Reports und letztendlich zu Entscheidungen, die auf unsicheren Grundlagen treffen.

## Was sind Faktentabellen?

Wir verstehen unter Faktentabellen die Tabellen, die die eigentlichen Geschäftsereignisse und Messwerte speichern. Das sind typischerweise die Dinge, die Ihr Unternehmen tatsächlich tut und messen kann: Verkäufe, Bestellungen, Rechnungen, Pageviews, Supportfälle oder Produktionsvorgänge.

Eine Faktentabelle für Verkäufe könnte beispielsweise für jeden Verkaufsvorgang eine Zeile enthalten. Diese Zeile würde die Menge des verkauften Produkts, den Verkaufspreis, das Verkaufsdatum und eventuell Kosten enthalten. Das Wesentliche: Faktentabellen speichern die reinen Zahlen und Metriken, nicht die erklärenden Informationen.

Der entscheidende Vorteil liegt in der Konsistenz. Wenn eine Faktentabelle so gestaltet ist, dass jede Zeile genau ein Ereignis darstellt und die numerischen Werte immer in derselben Granularität vorliegen, lassen sich Reports deutlich schneller schreiben und vor allem verlässlicher gestalten. Summen und Aggregationen funktionieren richtig, weil niemand versehentlich doppelt gezählt hat.

## Was sind Dimensionstabellen?

Dimensionstabellen sind die Nachschlagetabellen, die den Kontext liefern. Sie enthalten alle beschreibenden Informationen, die wir benötigen, um die Fakten zu verstehen und zu analysieren.

Zum Beispiel würde eine Kundendimension alle Informationen über jeden Kunden speichern: den Namen, die Adresse, die Branche, die Kundenkategorie oder das Akquisitionsdatum. Eine Produktdimension würde Produktname, Kategorie, Lagerbestand und Lieferant enthalten. Eine Zeitdimension würde für jedes Datum Jahr, Monat, Wochentag und Quartal angeben.

Dimensionstabellen sind normalerweise viel kleiner als Faktentabellen und ändern sich langsamer. Das ist gewollte. Ein Produkt ändert seinen Namen vielleicht zwei- oder dreimal im Jahr, aber es werden täglich tausend Verkäufe dieses Produkts erfasst.

## Warum diese Aufteilung funktioniert

Wir sehen in diesem Ansatz drei praktische Vorteile, die sich sofort zeigen:

Zum einen wird die Datenverwaltung überschaubar. Wenn sich der Name oder die Kategorie eines Produkts ändert, müssen wir diese Information nur an einer Stelle anpassen – in der Produktdimension. Wir müssen nicht durch tausende Verkaufsdatensätze gehen und jeden einzeln korrigieren.

Zum anderen werden Reports schneller und verständlicher. Jeder Report kann einfach die Dimensionswerte nutzen, um die Fakten zu beschreiben. Statt in einem großen Datensalat herumschiffen, arbeiten wir mit klaren Strukturen, die genau widerspiegeln, wie das Unternehmen wirklich funktioniert.

Drittens wird die Fehlerrate gesenkt. Wenn Dimensionen zentral verwaltet werden, gibt es weniger Schreibfehler, weniger Inkonsistenzen und weniger Fragen, warum ein Wert in verschiedenen Reports anders aussieht.

## Das Zusammenspiel in der Praxis

In einem typischen Reportingszenario verbinden wir die Faktentabelle mit den Dimensionstabellen über sogenannte Schlüssel. Die Faktentabelle enthält beispielsweise eine Kundennummer, die genau auf die Kundendimension verweist. Sie enthält eine Produktnummer für die Produktdimension und ein Datum für die Zeitdimension.

Ein Report, der "Umsatz pro Kundenbranche im letzten Quartal" zeigen soll, funktioniert dann so: Wir nehmen die Faktentabelle, filtern auf das fragliche Quartal (über die Zeitdimension), summieren die Umsatzwerte und gruppieren nach Kundenbranche (aus der Kundendimension). Das ist übersichtlich, schnell und wiederholbar.

Wäre alles in einer ungeordneten Tabelle durcheinander, müssten wir entweder mit komplexen Transformationen arbeiten oder Risiken eingehen, dass historische Daten bei späteren Änderungen verloren gehen.

## Die Häufigsten Anfängerfehler

Der häufigste Fehler besteht darin, zu viele Dimensionsinformationen direkt in die Faktentabelle zu schreiben. Das führt zu Redundanz und Wartungsproblemen. Ein anderer ist, die Dimensionen nicht richtig zu granulieren – das heißt, die Ebenen der Details nicht klar zu trennen.

Ein drittes Problem ist das Ignorieren von zeitlichen Änderungen in Dimensionen. Wenn ein Kunde die Branche wechselt oder ein Produkt neu kategorisiert wird, müssen wir das irgendwie abbilden, ohne historische Fakten zu verfälschen. Das erfordert ein wenig Planung von vornherein.

## Fazit

Ein gutes Datenmodell trennt Fakten von Dimensionen. Diese Struktur macht Datenarbeit nicht komplizierter, sondern einfacher – für diejenigen, die die Daten verwalten, und für diejenigen, die damit arbeiten. Reports werden zuverlässig, Änderungen werden überschaubar und die Kommunikation über Zahlen wird ehrlicher.

Wenn Sie sich unsicher sind, wie Ihre eigenen Daten strukturiert sind oder ob es Sinn macht, ein Modell in dieser Weise zu überarbeiten, helfen wir gerne weiter. [Schreiben Sie uns auf /kontakt](https://holocron.data/kontakt) – wir schauen uns Ihre Situation an und sagen ehrlich, wo es sinnvoll ist anzufangen.