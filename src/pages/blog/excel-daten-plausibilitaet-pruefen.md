---
layout: ../../layouts/BlogPost.astro
title: "Wie man Excel-Daten auf Plausibilität prüft, bevor man sie weiterverarbeitet"
excerpt: "Ungültige Daten führen zu fehlerhaften Analysen. Wir zeigen, wie man systematisch Fehler in Excel-Dateien aufdeckt und bereinigt."
date: 2026-08-27
tag: Daten bereinigen
readTime: 5
---

## Das Problem mit unkontrollierten Daten

Jedes Unternehmen kennt das Szenario: Eine Excel-Datei kommt aus verschiedenen Quellen zusammen – manuell erfasst, aus älteren Systemen exportiert, von externen Partnern geliefert. Dann soll daraus eine Analyse entstehen oder die Daten in ein BI-System fließen. Und genau hier passiert der häufigste Fehler: Die Daten werden direkt weiterverarbeitet, ohne sie vorher zu validieren.

Das Ergebnis sind fehlerhafte Berichte, falsche Geschäftsentscheidungen und unnötige Arbeit bei der Fehlersuche. Schlimmer noch: Diese Fehler werden oft erst entdeckt, wenn bereits Entscheidungen getroffen wurden.

Wir zeigen euch, wie ihr systematisch vorgehen könnt, um solche Probleme zu vermeiden.

## Schritt 1: Datentypen und Formatierung überprüfen

Ein häufiges Problem ist die vermischte Formatierung von Zahlen. In einer Umsatzspalte finden sich zum Beispiel korrekte Zahlenwerte neben Einträgen wie "10.500,00 EUR" oder "10500" in unterschiedlichen Schreibweisen. Für Excel mag das optisch gleich aussehen, aber bei Berechnungen oder beim Import in andere Systeme führt dies zu Fehlern.

Wir empfehlen, zunächst festzulegen, welcher Datentyp in jeder Spalte erwartet wird. Handelt es sich um ganze Zahlen, Dezimalzahlen, Daten oder Text? Dann kontrollieren wir, ob alle Einträge dieser Definition entsprechen. Besonders Datumsangaben sind tückisch: Das Format "01.02.2024" wird von verschiedenen Systemen unterschiedlich interpretiert.

Ein praktisches Vorgehen ist, eine Spalte zu nutzen, um zu prüfen, ob ein Wert überhaupt als Zahl erkannt wird. Wenn Excel einen Wert links- statt rechtsbündig darstellt, ist er als Text gespeichert – ein klares Erkennungszeichen.

## Schritt 2: Wertebereichs- und Plausibilitätsprüfungen

Darüber hinaus sollten wir überprüfen, ob die Werte in einem sinnvollen Bereich liegen. Ein Beispiel: In einer Kundendatenbank sind Altersangaben vorhanden. Sollte dort 156 Jahre stehen oder ein negativer Wert, ist klar, dass etwas schiefgelaufen ist.

Auch Mengenangaben, Preise oder Prozentsätze sollten logische Grenzen haben. Ein Produkt, das mit einer Menge von 0 oder -5 erfasst ist, deutet auf einen Eingabefehler hin. Ein Rabatt von 150 Prozent wirft Fragen auf.

Wir empfehlen, diese Prüfungen systematisch anzulegen. Für Altersangaben zum Beispiel: Werte sollten zwischen 0 und etwa 120 liegen. Für Mengen: Nur Werte ab 0 sind sinnvoll. Für Preise: Keine negativen Werte, wenn es um Verkaufspreise geht.

## Schritt 3: Vollständigkeit und Duplikate prüfen

Ein anderer kritischer Punkt ist die Vollständigkeit der Daten. Fehlen Einträge in Schlüsselspalten wie Kundennummern, Auftragsdaten oder Datumsangaben? Diese leeren Zellen können später bei Verknüpfungen zu Problemen führen.

Gleichzeitig sollten wir auf Duplikate achten. Wenn die gleiche Kundennummer mehrfach vorkommt oder identische Transaktionen in der Liste auftauchen, führt das zu Verzerrungen bei Summen und Analysen.

Ein systematischer Ansatz: Wir sortieren die Daten nach Schlüsselfeldern und schauen manuell nach auffälligen Wiederholungen. Excel erlaubt auch, bedingte Formatierung zu nutzen, um Duplikate visuell hervorzuheben – dann sehen wir sofort, wo mehrfach die gleichen Werte auftreten.

## Schritt 4: Konsistenz zwischen Spalten überprüfen

Manche Fehler entstehen nicht in einzelnen Spalten, sondern zwischen ihnen. Ein Beispiel: Eine Rechnungsdatei hat Spalten für Menge, Einzelpreis und Gesamtpreis. Wenn Menge mal Einzelpreis nicht dem Gesamtpreis entspricht, deutet das auf einen Rechenfehler hin.

Oder in einer Personaldatei: Das Einstellungsdatum liegt nach dem Kündigungsdatum – logisch unmöglich. Solche Querverlinkungen zu prüfen ist zeitaufwändig, aber sehr wertvoll.

Wir empfehlen, solche Konsistenzprüfungen zu dokumentieren und zu standardisieren. Wenn diese Prüfungen später regelmäßig wiederholt werden sollen, macht es Sinn, sie von vornherein so zu gestalten, dass sie auch mit neuen Daten funktionieren.

## Schritt 5: Dokumentation und Automatisierung

Je größer die Datenmengen werden, desto wichtiger ist es, diese Prüfungen zu dokumentieren und teilweise zu automatisieren. Wir empfehlen, eine Checkliste zu erstellen, die für diesen Datenbestand spezifisch ist: Welche Spalten sind erforderlich? Welche Wertebereiche sind gültig? Welche Duplikate sind inakzeptabel?

Bei regelmäßigen Datenimporten aus externen Quellen ist es sinnvoll, diese Prüfungen zu automatisieren. Das erspart Zeit und reduziert menschliche Fehler.

## Das Ergebnis

Wenn wir diese Schritte gewissenhaft durchlaufen, bevor wir Daten weiterverarbeiten, sparen wir später erheblich Zeit und vermeiden kostspielige Fehler. Saubere Daten sind die Grundlage für verlässliche Analysen und gute Geschäftsentscheidungen.

Es mag aufwändig wirken, aber in der Praxis ist es ein einmaliger oder regelmäßiger Aufwand, der sich vielfach auszahlt.

Wenn ihr unsicher seid, wie ihr eure Daten systematisch validieren könnt, oder wenn der Umfang zu groß für manuelle Prüfungen wird – wir helfen gerne weiter. Schreibt uns, wie eure aktuelle Situation aussieht.

[Kontakt aufnehmen](/kontakt)