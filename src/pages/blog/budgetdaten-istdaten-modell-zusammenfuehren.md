---
layout: ../../layouts/BlogPost.astro
title: "Wie man Budgetdaten und Ist-Daten in einem Modell sauber zusammenfuehrt"
excerpt: "Budget und Realität in einem Datenmodell zu vereinigen ist eine häufige Herausforderung. Wir zeigen, wie man Strukturfehler vermeidet und verlässliche Vergleiche schafft."
date: 2026-06-15
tag: Modelle & Reports
readTime: 5
---

## Das Problem mit separaten Welten

In vielen Unternehmen leben Budgetdaten und Ist-Daten ein Leben nebeneinander. Die einen kommen aus dem Controlling-System, die anderen aus der Finanzbuchhaltung oder dem ERP. Jede Quelle hat ihre eigene Logik, ihre eigenen Perioden, manchmal sogar ihre eigenen Kontenrahmen. Wenn man diese dann einfach in einem Bericht nebeneinander stellt, entstehen Verwirrung und Fehlersuche statt echter Einsicht.

Wir wissen, dass es besser geht — aber nur, wenn man von Anfang an durchdacht vorgeht. Die größten Probleme entstehen nämlich nicht in der Visualisierung, sondern in der Vorbereitung der Daten.

## Schritt 1: Klärung der Dimensionen

Bevor eine einzige Zeile zusammengeführt wird, müssen wir verstehen, wie sich Budget und Ist-Daten dimensionieren. Das klingt abstrakt, ist aber praktisch ganz konkret: Haben beide Datenquellen dieselben Kostenstellen? Dieselben Konten? Dieselben Perioden?

Ein häufiges Szenario sieht so aus: Das Budget wurde für Geschäftsbereiche geplant, die Ist-Daten kommen aber nach Kostenstellen. Oder das Budget ist in Monaten erfasst, die Ist-Daten in Wochen oder nur in Quartalen verdichtet. Das Problem: Man kann sie nicht einfach matchen.

Wir empfehlen, vor dem Zusammenführen eine Dimensionsmatrix zu erstellen. Darin dokumentieren wir explizit, auf welcher Ebene Budget und Ist verfügbar sind. Wenn die Ebenen nicht identisch sind, müssen wir Mappings und Aggregationsregeln definieren — und das tun wir bewusst und dokumentiert, nicht implizit in irgendwelchen Formeln.

## Schritt 2: Die Quelle eindeutig markieren

Im finalen Modell muss jede Zahl ihre Herkunft zeigen. Das ist nicht nur für Nachvollziehbarkeit wichtig, sondern auch für Berechnung von Abweichungen und für Formatierung.

Wir empfehlen, eine zusätzliche Spalte oder ein Feld einzuführen, das die Datenart angibt — etwa "Budget", "Ist" oder später auch "Forecast". Nicht als Text in einer Tabelle nebenbei, sondern als echte Dimension im Modell. Das erlaubt uns später, Logiken zu schreiben wie: "Zeige Ist minus Budget", und diese Logik funktioniert dann über alle Berichte hinweg konsistent.

In einem typschen Tabellenmodell könnte das etwa so strukturiert sein: Eine zentrale Fact-Tabelle mit den Beträgen, eine Dimensions-Tabelle für Konten, eine für Kostenstellen, eine für Perioden — und eine zusätzliche Dimension für den Datentyp. Alles verknüpft über eindeutige Schlüssel.

## Schritt 3: Mit Datumsproblemen umgehen

Budgetdaten sind oft historisch. Ein Budget aus dem März gilt für das ganze Geschäftsjahr. Ist-Daten hingegen sind aktuell und ändern sich täglich. Wenn man diese einfach auf die gleiche Zeitachse wirft, entsteht Chaos.

Wir sehen hier zwei saubere Ansätze: Entweder wir führen für das Budget ein "Gültig-ab"-Datum ein, das festlegt, ab wann diese Budgetversion gilt. Oder wir erstellen für jede Periode eine separate Budgetversion und speichern sie redundant ab — nicht elegant, aber manchmal praktisch.

Bei Ist-Daten hilft es, immer mit Buchungstagen zu arbeiten, nicht mit Wertstellungstagen. Damit vermeiden wir Verwirrung durch zeitliche Unterschiede zwischen verschiedenen Systemen.

## Schritt 4: Abstimmung und Validierung

Nachdem das Modell zusammengefügt ist, muss es gegen beide Quellen validiert werden. Das ist nicht paranoid, sondern Standard.

Wir empfehlen, Totalsummen zu rechnen: Die Summe aller Ist-Posten muss exakt mit der Summe in der Buchhaltung übereinstimmen. Die Summe aller Budgetposten muss mit dem eingeplanten Gesamtbudget übereinstimmen. Wenn das nicht passt, ist nicht das Modell das Problem — sondern wir haben etwas nicht verstanden.

Ofter liegt es an Rundungen. Ein Budget von 100.000 Euro wird auf fünf Kostenstellen aufgeteilt — und wenn man mit Dezimalstellen in den Quellen nicht sauber umgegangen ist, verliert man überall ein paar Cent. Im Bericht sieht es dann aus, als wären 99.997 Euro eingeplant, nicht 100.000. Das ist klein, aber es verunsichert.

## Schritt 5: Die Formellogik transparent halten

Abweichungen sind der Sinn dieser Zusammenführung. Wir wollen wissen: Warum ist das Ergebnis anders als geplant?

Wir empfehlen, Abweichungen nicht als "Ist minus Budget" zu berechnen, sondern das sehr explizit zu dokumentieren. Im Bericht sollte sichtbar sein, wie die Zahl entstanden ist. Ist sie ein reiner Ist-Wert? Ein reiner Budget-Wert? Eine Differenz? Wenn es eine Differenz ist — ist sie absolut oder prozentual?

In einem gut gebauten Modell schreiben wir diese Logiken zentral auf. Das bedeutet: Eine einzige Definition, wo Abweichung berechnet wird. Nicht in jedem Bericht neu. Das macht Fehler vermeidbar und Änderungen möglich, ohne überall anfassen zu müssen.

## Das Ergebnis: Ein Modell, dem man vertraut

Wenn diese Schritte sauber durchlaufen sind, entsteht etwas Seltenes: Ein Modell, das Budget und Ist so zusammenführt, dass es keine Fragen mehr aufwirft. Die Geschäftsführung kann einen Bericht lesen und sicher sein, dass die Zahlen stimmen. Das Controlling kann das Modell wartbar halten, weil die Logik transparent ist. Und analytische Fragen wie "Warum weichen die Personalkosten ab?" lassen sich zuverlässig beantworten.

Wir sehen, dass diese Sorgfalt am Anfang sich vielfach auszahlt. Schnell zusammengeschusterte Modelle mögen schnell fertig sein — aber dann sitzt man später viel länger bei der Fehlersuche.

Wenn Sie bei diesem Thema Unterstützung brauchen, [kontaktieren Sie uns gerne](/kontakt). Wir helfen bei der Konzeption solcher Modelle.