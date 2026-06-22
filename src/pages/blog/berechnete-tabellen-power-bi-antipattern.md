---
layout: ../../layouts/BlogPost.astro
title: "Berechnete Tabellen in Power BI: Sinnvoll oder Antipattern?"
excerpt: "Berechnete Tabellen in Power BI sind mächtig, aber oft ein verstecktes Performance-Problem. Wir zeigen, wann sie wirklich sinnvoll sind und wann sie mehr Schaden anrichten."
date: 2026-06-22
tag: Modelle & Reports
readTime: 5
---

## Das Dilemma mit berechneten Tabellen

Berechnete Tabellen sind in Power BI schnell erstellt. Man öffnet den DAX-Editor, schreibt eine Formel und schwupps — eine neue Tabelle im Datenmodell. Es fühlt sich produktiv an. Aber diese Einfachheit ist tückisch. Wir sehen regelmäßig Modelle, in denen berechnete Tabellen zu Performance-Problemen, unnötiger Komplexität und schwer zu wartenden Lösungen führen.

Die zentrale Frage lautet: Wann ist eine berechnete Tabelle wirklich das richtige Werkzeug, und wann sollte man sie vermeiden?

## Was berechnete Tabellen eigentlich tun

Eine berechnete Tabelle ist eine Tabelle, die zur Refresh-Zeit aus einer DAX-Formel berechnet wird. Sie wird dann materialisiert — also tatsächlich gespeichert — im Datenmodell. Das unterscheidet sie fundamental von Measures, die zur Query-Zeit berechnet werden.

Dieser Unterschied ist entscheidend. Weil berechnete Tabellen materialisiert werden, belegen sie Speicherplatz. Und weil sie bei jedem Refresh neu berechnet werden, können sie Refresh-Zeiten massiv verlängern.

## Das zentrale Problem: Performance und Wartung

Viele Unternehmen nutzen berechnete Tabellen für Aufgaben, die besser in der Datenbank oder mit Power Query gelöst wären. Ein typisches Szenario: Man möchte eine gefilterte Version einer großen Tabelle haben — nur bestimmte Produktkategorien, nur Daten der letzten zwei Jahre, nur Kunden mit bestimmtem Status.

Die Versuchung ist groß, dafür eine berechnete Tabelle zu nutzen. Man schreibt eine FILTER-Formel, die die Originaltabelle filtert, und speichert das Ergebnis ab. Das funktioniert — zunächst. Aber je größer die Daten werden, desto teurer wird diese Berechnung. Ein Refresh, der vorher fünf Minuten brauchte, dauert plötzlich fünfzehn.

Dazu kommt ein Wartungsproblem: Die Logik dieser Filterung sitzt jetzt in Power BI, versteckt in einer DAX-Formel. Wenn sich die Anforderung ändert, muss die Formel angepasst werden. Wenn ein anderes Tool auch diese gefilterte Sicht braucht, muss die Logik neu geschrieben werden. Es entsteht eine Fragmentation, bei der dieselbe Geschäftslogik an verschiedenen Orten existiert.

## Wo berechnete Tabellen wirklich Sinn machen

Es gibt durchaus Situationen, in denen berechnete Tabellen die richtige Wahl sind.

Eine dieser Situationen ist die Erstellung von Dimensionen oder Hierarchien, die nicht in den Quellsystemen vorhanden sind. Beispiel: Man hat eine Tabelle mit Transaktionsdaten und möchte eine Klassifizierung nach Quartalen oder Geschäftsregionen, die flexibel geändert werden kann, ohne die Quelle zu modifizieren. Eine berechnete Tabelle kann hier saubere Lösungen bieten — besonders, wenn die Berechnung einfach ist und die Ergebnistabelle nicht zu groß wird.

Ein anderes Szenario ist die Erstellung von Kalender- oder Datumstabellen. Viele Unternehmen verwenden berechnete Tabellen, um eine vollständige Datumstabelle zu generieren, die alle Tage eines relevanten Zeitraums enthält. Das macht Sinn, weil diese Tabelle klein ist, selten sich ändert und direkt in Power BI erzeugt werden kann, ohne externe Abhängigkeiten.

Auch für Parameter-Tabellen oder kleine Nachschlagetabellen, die in Power BI gepflegt werden, können berechnete Tabellen sinnvoll sein — solange sie wirklich klein bleiben.

## Die besseren Alternativen

In den meisten anderen Fällen gibt es bessere Ansätze.

Die erste Alternative ist Power Query. Wenn eine Tabelle gefiltert, transformiert oder aggregiert werden muss, sollte das in Power Query passieren, nicht in DAX. Power Query ist für Datenverarbeitung optimiert, und die Logik bleibt transparent und wartbar. Zudem kann Power Query mit großen Datenmengen effizienter umgehen.

Die zweite Alternative ist die Datenbank oder das Source-System selbst. Viele Transformationen gehören eigentlich ins SQL-Select des Imports, nicht in Power BI. Das reduziert die Datenmenge, die Power BI verarbeiten muss, und zentralisiert die Geschäftslogik an einer Stelle.

Die dritte Alternative ist schließlich, Berechnungen direkt in Measures zu formulieren, anstatt neue Tabellen zu materialisieren. Das spart Speicher, macht Refreshes schneller und reduziert Komplexität.

## Wie man es besser macht

Wir empfehlen eine einfache Heuristik: Bevor man eine berechnete Tabelle erstellt, sollte man folgende Fragen stellen.

Erste Frage: Ist die Tabelle eine Dimensionstabelle, die grundsätzlich nicht bearbeitbar sein würde, weil sie neu berechnet wird? Dann kann eine berechnete Tabelle Sinn machen.

Zweite Frage: Ist die Tabelle sehr klein — also deutlich unter tausend Zeilen — und wird selten aktualisiert? Dann ist das Problem weniger kritisch.

Dritte Frage: Existiert dieselbe Logik auch in anderen Systemen oder Tools? Dann sollte man sie aus der Quelle laden, nicht in Power BI neu erfinden.

Vierte Frage: Könnte diese Berechnung in Power Query oder der Datenbank effizienter erfolgen? Wenn ja, dann gehört sie dorthin.

Nur wenn alle diese Fragen ein klares "Nein" ergeben, ist eine berechnete Tabelle vermutlich die richtige Wahl.

## Das Größere Bild

Berechnete Tabellen sind nicht grundsätzlich falsch. Sie sind ein Werkzeug, das an den richtigen Stellen sehr nützlich sein kann. Das Problem tritt auf, wenn sie als Standard-Lösung für alle möglichen Transformations- und Filteraufgaben genutzt werden.

In unserer Arbeit mit Unternehmen sehen wir oft Modelle, die gewachsen sind wie ein Garten ohne Gärtner. Darin verstecken sich zwölf berechnete Tabellen, die jeweils eine andere Filterung oder Aggregation vornehmen. Der Refresh dauert eine halbe Stunde. Niemand versteht mehr, welche Tabelle wozu dient. Und wenn sich eine Anforderung ändert, beginnt ein mühsames Debugging.

Solche Situationen lassen sich vermeiden, wenn man von Anfang an bewusst entscheidet: Berechnete Tabelle oder bessere Lösung?

Die Entscheidung ist nicht immer leicht. Sie erfordert Verständnis für die Trade-offs zwischen Flexibilität, Performance und Wartbarkeit. Aber gerade weil Power BI berechnete Tabellen so einfach macht, lohnt sich die Überlegung umso mehr.

## Nächste Schritte

Wenn Sie in einem bestehenden Modell arbeiten und sich fragen, ob Ihre berechneten Tabellen noch das richtige Design sind, lohnt sich eine Überprüfung. Schauen Sie sich an, wie groß diese Tabellen sind, wie lange der Refresh dauert und ob die Logik an andere Orte gehört.

Soll wir gemeinsam durchgehen, ob Ihr Datenmodell von einer Neustrukturierung profitieren würde? Schreiben Sie uns einfach — wir besprechen gerne, wo es Optimierungspotenzial gibt.

[Kontakt aufnehmen](/kontakt)