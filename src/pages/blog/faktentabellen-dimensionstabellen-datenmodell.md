---
layout: ../../layouts/BlogPost.astro
title: "Faktentabellen und Dimensionstabellen: Der Kern eines guten Datenmodells"
excerpt: "Ein solides Datenmodell basiert auf der klaren Trennung von Fakten und Dimensionen. Wir erklären, wie diese Struktur Ihre Analysen vereinfacht und schneller macht."
date: 2026-06-01
tag: Modelle & Reports
readTime: 5
---

## Warum die richtige Struktur entscheidend ist

Wenn wir mit Unternehmen über ihre Datenprobleme sprechen, zeigt sich immer wieder dasselbe Muster: Die Daten sind vorhanden, aber niemand kann sie sinnvoll nutzen. Reports dauern Tage statt Stunden, Zahlen widersprechen sich, und jede neue Frage erfordert technische Unterstützung. Der Grund liegt häufig darin, dass die zugrunde liegende Datenstruktur nicht durchdacht ist.

Ein gutes Datenmodell folgt einem bewährten Prinzip: der Trennung von Fakten und Dimensionen. Diese Struktur ist nicht neu – sie hat sich über Jahrzehnte in der Business Intelligence bewährt – aber gerade im Mittelstand wird sie oft übersehen. Das führt zu Chaos statt zu Klarheit.

## Was sind Faktentabellen?

Faktentabellen sind das Herzstück eines Datenmodells. Sie enthalten die messbaren Ereignisse eines Unternehmens – die Dinge, die zählen, wiegen oder berechnet werden können.

Stellen wir uns ein Einzelhandelsunternehmen vor. Eine Faktentabelle würde hier jeden Verkauf festhalten: welches Produkt wurde verkauft, in welcher Menge, zu welchem Preis, in welchem Geschäft, zu welcher Zeit. Jede Zeile in dieser Tabelle repräsentiert eine konkrete Geschäftstransaktion. Daneben könnten auch Lagerbestände, Retouren oder Kundeninteraktionen in separaten Faktentabellen gespeichert sein.

Die Zahlen in Faktentabellen sind das, was Geschäftsführer sehen möchten: Umsatz, Menge, Marge, Kosten. Sie sind granular – das heißt, sie erfassen jeden einzelnen Geschäftsvorfallen – und sie sind das, woraus später Summen, Durchschnitte und Trends berechnet werden.

## Was sind Dimensionstabellen?

Dimensionstabellen beschreiben den Kontext der Fakten. Sie beantworten die Frage "Wer, Was, Wann, Wo?".

Wir bleiben bei unserem Einzelhandelsbeispiel. Eine Produktdimension würde alle Informationen über Produkte enthalten: Name, Kategorie, Hersteller, Größe, Farbe. Eine Zeitdimension erfasst Datum, Wochentag, Monat, Quartal, Jahr – damit Analysen nach Jahreszeiten oder Wochentagen möglich sind. Eine Geschäftsdimension beschreibt alle Verkaufsstätten: Adresse, Region, Filialleiter, Eröffnungsdatum.

Dimensionen sind klein und stabil. Sie ändern sich nicht bei jedem Geschäftsvorfall, sondern eher selten. Ein Produkt behält seine Kategorie über Jahre, ein Geschäft seine Stadt.

## Wie arbeiten sie zusammen?

Das Genie dieser Struktur liegt in ihrer Einfachheit. Faktentabellen und Dimensionen sind über Schlüssel miteinander verbunden – denken Sie an Verweise in einer Datenbank.

Wenn ein Manager wissen möchte, welche Produkte in der Kategorie "Elektronik" in der Region "Bayern" im März verkauft wurden und wie hoch der Gesamtumsatz war, dann sucht das System einfach alle Verkäufe aus der Faktentabelle, bei denen die Produktdimension "Elektronik" und die Geschäftsdimension "Bayern" und die Zeitdimension "März" zutreffen. Die Summe der Umsatzzahlen ist die Antwort.

Ohne diese Struktur müssten diese Informationen aus mehreren verschachtelten Tabellen zusammengesucht werden – zeitaufwändig und fehleranfällig.

## Was passiert ohne diese Trennung?

Viele Unternehmen speichern ihre Daten flach und vollständig in einer einzigen großen Tabelle. Bei jedem Verkauf wird nicht nur das Produktname und der Preis notiert, sondern auch die komplette Produktbeschreibung, der Name des Geschäfts, die Adresse, der Filialleiter, das komplette Datum. Das wirkt logisch, führt aber zu erheblichen Problemen.

Zum einen werden Informationen ständig wiederholt. Das Produkt "Laptop XL" mit seiner kompletten Beschreibung wird tausendmal in der Tabelle eingetragen. Das kostet Speicherplatz und macht die Daten schwerer zu handhaben.

Zum anderen entstehen Inkonsistenzen. Wenn der Filialleiter wechselt, muss diese Information überall aktualisiert werden – bei hundert oder tausend Einträgen. Vergisst man einen, widersprechen sich die Daten selbst.

Zum dritten werden Analysen komplex und langsam. Jede Abfrage muss über riesige Tabellen hinweg arbeiten, auch wenn man nur eine kleine Information braucht.

## Praktische Vorteile im Geschäftsalltag

Wir sehen in unserer Arbeit immer wieder, wie ein gut strukturiertes Datenmodell den Alltag vereinfacht.

Erste Vorteil: Geschwindigkeit. Reports, die mit schlecht strukturierten Daten eine halbe Stunde dauern, können mit einem ordentlichen Modell in Sekunden erzeugt werden. Das macht die Daten im Geschäft überhaupt erst nutzbar.

Zweiter Vorteil: Wartbarkeit. Wenn sich eine Geschäftslogik ändert – etwa eine neue Produktkategorie hinzukommt – müssen Sie nicht tausende von Einträgen anfassen, sondern nur eine Dimensionstabelle aktualisieren.

Dritter Vorteil: Zuverlässigkeit. Weil die Struktur klar ist, entstehen weniger Fehler. Zahlen sind konsistent über alle Reports hinweg.

Vierter Vorteil: Unabhängigkeit. Nicht-technische Nutzer können selbst Reports und Analysen erstellen, weil die Struktur verständlich ist. Sie brauchen keinen Programmierer für jede kleine Frage.

## Was wir empfehlen

Wir empfehlen Unternehmen, bei der Planung ihres Datenmodells mit dem Ende anzufangen: Was sind die Fragen, die regelmäßig gestellt werden? Welche Zahlen sind wichtig? Dann definiert man die Faktentabellen, die diese Zahlen enthalten, und dann die Dimensionen, die den Kontext bieten.

Es muss nicht perfekt sein. Aber die Grundstruktur – die Trennung von Fakt und Dimension – sollte von Anfang an da sein. Nachträglich ist es deutlich aufwändiger, ein chaotisches Datenmodell zu bereinigen, als es von vornherein richtig aufzubauen.

Sollten Sie sich unsicher sein, wie Sie das Modell für Ihren konkreten Fall aufbauen, sprechen Sie mit uns. Wir helfen Ihnen, die richtige Struktur zu finden – eine, die zu Ihrem Geschäft passt und Ihnen Zeit spart.

[Kontaktieren Sie uns](/kontakt) – wir schauen uns Ihre Situation an.