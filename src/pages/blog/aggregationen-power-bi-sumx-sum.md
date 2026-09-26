---
layout: ../../layouts/BlogPost.astro
title: "Aggregationen in Power BI richtig einsetzen: Was SUMX von SUM unterscheidet"
excerpt: "SUM und SUMX sehen ähnlich aus, arbeiten aber grundlegend unterschiedlich. Wir erklären, wann welche Funktion die richtige Wahl ist – und wo Anfänger häufig scheitern."
date: 2026-09-26
tag: Modelle & Reports
readTime: 5
---

## Das Dilemma mit den Aggregationsfunktionen

In Power BI gibt es oft mehrere Wege, um dieselbe Aufgabe zu lösen. Bei Aggregationen zeigt sich das besonders deutlich: Wir können Daten mit SUM zusammenfassen oder mit SUMX. Beide Funktionen liefern häufig das gleiche Ergebnis – aber eben nicht immer. Und genau da liegt das Problem.

Wer anfängt, mit Power BI zu arbeiten, wird schnell verwirrt. Die Dokumentation erklärt die technischen Unterschiede, aber nicht, wann man welche Funktion wirklich braucht. Das führt zu fehlerhaften Modellen, zu Performance-Problemen und zu Reports, die plötzlich falsche Zahlen zeigen, wenn die Daten sich ändern.

Wir schauen uns an, wie SUM und SUMX wirklich funktionieren – und vor allem: wann wir welche Funktion einsetzen sollten.

## Wie SUM arbeitet: Die klassische Aggregation

SUM ist die einfachste Variante. Wir geben eine Spalte an, und Power BI addiert alle Werte in dieser Spalte. Wenn wir zum Beispiel den Gesamtumsatz aller Verkäufe berechnen wollen, schreiben wir SUM auf eine Spalte, die die Umsätze enthält. Power BI geht Zeile für Zeile durch und addiert auf.

Das klingt logisch und funktioniert in vielen Fällen auch tadellos. Solange die Daten, die wir aggregieren wollen, bereits in der Tabelle existieren, arbeitet SUM zuverlässig und schnell. Power BI kann diese Funktion optimal verarbeiten, besonders wenn wir mit großen Datenmengen arbeiten.

Aber SUM hat eine wichtige Einschränkung: Die Funktion aggregiert nur, was bereits in der Spalte vorhanden ist. Wir können damit nicht rechnen, nicht transformieren, nicht situationsabhängig entscheiden, welche Werte wir addieren. SUM ist ein Hammer – und wenn alle Probleme Nägel sind, funktioniert das perfekt.

## SUMX: Wenn wir erst berechnen, dann aggregieren müssen

SUMX ist anders. Diese Funktion arbeitet mit zwei Argumenten: einer Tabelle und einem Ausdruck. Wir sagen SUMX sozusagen: Gehe durch diese Tabelle, berechne für jede Zeile einen Wert nach dieser Formel, und addiere dann alle Ergebnisse.

Das ist mächtiger – aber auch anspruchsvoller. Mit SUMX können wir Logik einbauen. Wir können zum Beispiel sagen: Addiere die Umsätze, aber nur für Produkte, die über 100 Euro kosten. Oder: Für jede Zeile multiplizierst du zuerst die Menge mit dem Preis, dann addierst du alles auf. SUMX führt die Berechnung zuerst durch, dann aggregiert sie.

Ein konkretes Beispiel: Wir haben eine Tabelle mit Bestellpositionen. Jede Position hat eine Menge und einen Preis. Der Gesamtumsatz ist Menge mal Preis für jede Position, summiert über alle Positionen. Mit SUM könnten wir nicht arbeiten, weil wir die Multiplikation erst durchführen müssen. Mit SUMX schreiben wir: Für jede Zeile: Menge mal Preis, und dann summiere alles auf.

## Der entscheidende Unterschied in der Praxis

Die Unterschiede werden besonders deutlich, wenn wir mit gefilterten Kontexten arbeiten. Stellen wir uns vor, wir bauen einen Report mit Jahren als Filter. Ein Benutzer wählt 2023 aus.

Bei SUM: Die Funktion berücksichtigt diesen Filter automatisch. Sie aggregiert nur die Zeilen aus 2023. Das funktioniert, solange die Filterlogik einfach ist.

Bei SUMX: Hier steuern wir selbst, worüber die Funktion iteriert. Wir können zum Beispiel sagen: Iteriere über alle Zeilen der Tabelle, aber nur über die Zeilen aus 2023. Oder wir lassen SUMX über alle Zeilen gehen und bauen die Filterlogik direkt in den Ausdruck ein. Das gibt uns mehr Kontrolle, erfordert aber auch mehr Aufmerksamkeit.

## Wann SUM die richtige Wahl ist

Wir sollten SUM verwenden, wenn wir einfach nur Werte aus einer Spalte addieren. Das ist der Normalfall. Eine Spalte mit Verkäufen, eine mit Kosten, eine mit Bestandsmengen – hier ist SUM schnell, zuverlässig und verständlich.

SUM funktioniert auch gut, wenn wir mit berechneten Spalten arbeiten. Wenn wir also vorher bereits die Berechnung durchgeführt haben und in einer Spalte speichern, addieren wir diese Spalte einfach mit SUM.

## Wann SUMX notwendig ist

Wir brauchen SUMX, wenn die Berechnung komplexer wird. Wenn wir nicht nur eine Spalte addieren, sondern erst Werte kombinieren müssen. Oder wenn wir eine Bedingung einbauen wollen, die nur für die aktuelle Iteration gilt.

Ein häufiges Beispiel: Wir haben eine Verkaufstabelle mit Datum, Produkt, Menge und Preis. Wir wollen den Umsatz berechnen – also Menge mal Preis. Mit SUMX schreiben wir einen Ausdruck, der für jede Zeile diese Multiplikation durchführt, und dann werden alle Ergebnisse addiert.

Andern Beispiel: Wir wollen Rabatte berücksichtigen. Vielleicht gibt es Rabattstaffeln: Bestellungen über 1000 Euro bekommen 5 Prozent Rabatt. Mit SUMX können wir diese Logik einbauen. Für jede Zeile prüfen wir, ob die Bedingung erfüllt ist, berechnen dann den Preis mit oder ohne Rabatt, und summieren auf.

## Die Performance-Überlegung

Ein wichtiger praktischer Punkt: SUM ist schneller als SUMX. Wenn wir mit großen Datenmengen arbeiten, kann das relevant werden. SUM kann von Power BI stark optimiert werden. SUMX muss für jede Zeile eine Berechnung durchführen, was aufwendiger ist.

Das heißt nicht, dass wir SUMX vermeiden sollten. Aber wir sollten bewusst entscheiden. Wenn SUM ausreicht, verwenden wir SUM. Wenn wir die Flexibilität von SUMX brauchen, nehmen wir SUMX – und akzeptieren, dass der Report möglicherweise eine halbe Sekunde länger braucht.

## Die richtige Entscheidung treffen

Die Faustregel ist einfach: Können wir mit SUM arbeiten? Dann tun wir das. Brauchen wir auf Zeilenebene Logik oder Berechnungen? Dann nehmen wir SUMX.

In vielen Modellen kommen beide Funktionen vor – und das ist richtig so. Ein robuster Report nutzt jede Funktion dort, wo sie sinnvoll ist. Der Fehler passiert, wenn wir immer die gleiche Funktion verwenden, egal ob sie passt oder nicht. Oder wenn wir SUMX nehmen, weil es komplexer klingt – und dann ein Performance-Problem bekommen, das wir nicht erwartet haben.

Wer sich unsicher ist, kann auch mit berechneten Spalten arbeiten. Wir erstellen die komplexen Berechnungen einmal in einer Spalte und addieren dann einfach mit SUM. Das ist manchmal langsamer, aber deutlich verständlicher.

## Fazit

SUM und SUMX sind nicht austauschbar. Sie lösen unterschiedliche Probleme. SUM ist das Werkzeug für einfache Aggregation, SUMX ist flexibler und ermöglicht Logik auf Zeilenebene. Die richtige Wahl hängt von dem ab, was wir tatsächlich berechnen müssen.

Wer sein Modell aufbaut, sollte sich diese Frage bewusst stellen: Kann ich die Berechnung mit SUM machen oder brauche ich SUMX? Die Antwort führt zu besseren Reports und zu einem Modell, das einfacher zu verstehen und zu warten ist.

Wenn Sie unsicher sind, wie Sie Aggregationen in Ihrem Power-BI-Modell richtig einsetzen, oder wenn Sie den Eindruck haben, dass Ihre Reports langsamer sind als sie sein sollten – wir schauen gerne gemeinsam hin. Kontaktieren Sie uns unter [/kontakt](/kontakt), und wir besprechen, wie wir helfen können.