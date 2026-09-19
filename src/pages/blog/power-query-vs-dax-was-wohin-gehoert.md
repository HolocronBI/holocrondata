---
layout: ../../layouts/BlogPost.astro
title: "Power Query vs. DAX: Was wohin gehört"
excerpt: "Power Query und DAX sind beide mächtig – aber sie lösen unterschiedliche Probleme. Wir zeigen, wann welche Technologie zum Einsatz kommt und wie Sie richtig entscheiden."
date: 2026-09-19
tag: Modelle & Reports
readTime: 5
---

# Power Query vs. DAX: Was wohin gehört

Wer mit Power BI oder Excel arbeitet, stößt schnell auf die gleiche Frage: Soll ich das Problem mit Power Query oder mit DAX lösen? Beide Technologien sind mächtig, aber sie verfolgen völlig unterschiedliche Ziele. Die richtige Wahl zu treffen, ist essentiell – nicht nur für die Wartbarkeit, sondern auch für die Performance und die Stabilität des gesamten Systems.

Wir zeigen hier, wie man diese Entscheidung trifft, ohne in die häufigen Anfängerfallen zu tapsen.

## Die grundsätzliche Aufgabenteilung

Wir können es so zusammenfassen: Power Query bereitet Daten auf, DAX stellt Fragen an sie. Power Query arbeitet mit Tabellen und Zeilen, DAX mit Beziehungen und Kontext. Das klingt abstrakt – aber die praktischen Konsequenzen sind konkret.

Power Query ist das Werkzeug, um Rohdaten in eine Form zu bringen, die man überhaupt erst analysieren kann. Es verbindet verschiedene Datenquellen, entfernt fehlerhafte oder doppelte Einträge, strukturiert ungeordnete Spalten und erstellt Nachschlagetabellen. Power Query arbeitet *einmalig* oder *regelmäßig* im Hintergrund – es ist ein Transformationsprozess.

DAX ist das Werkzeug, um *aus den sauberen Daten* neue Erkenntnisse zu gewinnen. DAX erstellt Kennzahlen, vergleicht Zahlen über zeitliche Perioden hinweg, berechnet Prozentsätze von Gesamtmengen oder kombiniert Daten aus verschiedenen Tabellen zu neuen Perspektiven. DAX arbeitet *bei jeder Interaktion* mit dem Report – es antwortet auf Fragen, die der Nutzer durch Filterung und Drill-Down stellt.

## Typische Power-Query-Aufgaben

Es gibt Aufgaben, die gehören definitiv in Power Query:

**Datenquellen verbinden und kombinieren.** Ein Unternehmen hat Kundendetails in einer Datenbank, Verkäufe in einer anderen und Zusatzinformationen in einer Excel-Datei. Power Query bringt diese zusammen. Das geschieht einmal beim Laden – nicht bei jeder Abfrage neu.

**Strukturelle Probleme beheben.** Eine Tabelle hat Duplikate, eine andere hat leere Zeilen in der Mitte, eine dritte hat Spalten, die hintereinander statt übereinander angeordnet sind. Power Query macht daraus eine saubere Tabelle mit einheitlicher Struktur.

**Spalten aufteilen oder kombinieren.** Eine Spalte enthält "Vorname Nachname" in einer Zelle – Power Query teilt das in zwei Spalten auf. Oder eine Datumsangabe ist teilweise als Text, teilweise als Zahl – Power Query konvertiert alles in ein einheitliches Format.

**Ungültige oder fehlende Werte handhaben.** Ein Kundenname ist "NULL", eine Bestellung hat kein Datum, eine Preisangabe ist negativ. Power Query kann diese Zeilen filtern, ersetzen oder markieren, je nachdem, was sinnvoll ist.

**Nachschlagetabellen erstellen.** Aus einer langen Kundenliste wird eine Tabelle mit nur den eindeutigen Kundennummern und Namen. Das ist effizient und spart Speicherplatz.

Das Gemeinsame: Alle diese Aufgaben ändern die *Struktur* oder *Vollständigkeit* der Daten. Sie sind notwendig, um überhaupt erst einen verlässlichen Datenbestand zu haben.

## Typische DAX-Aufgaben

Andere Aufgaben gehören in DAX:

**Kennzahlen berechnen.** Der Gesamtumsatz eines Jahres, der Durchschnittswert eines Verkaufs, die Anzahl neuer Kunden – das sind klassische DAX-Berechnungen. Sie basieren auf gefilterten Datenmengen und liefern Ergebnisse, die sich ändern, wenn der Nutzer im Report etwas auswählt.

**Zeitbasierte Analysen.** Ein häufiges Szenario: Wie war der Umsatz letztes Monat, und wie viel Prozent davon kam aus Region A? DAX kann solche Fragen mit Zeitintelligenzfunktionen beantworten – ohne dass die Daten selbst verändert werden müssen.

**Vergleiche und Varianzanalysen.** Was ist der Unterschied zwischen Budget und Ist? Wie viel Prozent besser oder schlechter sind die aktuellen Zahlen gegenüber dem gleichen Zeitraum im Vorjahr? Das sind analytische Fragen, die DAX mit Kontext beantwortet.

**Hierarchische Strukturen navigieren.** Ein Produkt gehört zu einer Kategorie, die gehört zu einer Abteilung – DAX kann diese Beziehungen verstehen und Berechnungen auf der richtigen Ebene durchführen.

**Dynamische Formate und Bedingungen.** Eine Farbe soll sich ändern, je nachdem, ob eine Kennzahl über oder unter dem Ziel liegt. Eine Spalte soll nur angezeigt werden, wenn ein bestimmter Filter aktiv ist. Das regelt DAX.

Das Gemeinsame: Alle diese Aufgaben *beantworten Fragen*. Sie verändern nicht die Rohdaten, sondern interpretieren sie aus unterschiedlichen Winkeln.

## Die häufigsten Verwechslungen

Wir sehen immer wieder folgende Fehler:

**Zu viel Logik in Power Query.** Manche Entwickler erstellen in Power Query bereits komplexe berechnete Spalten mit verschachtelten Bedingungen. Das ist verlockend, weil es sich mächtig anfühlt – führt aber zu schwer wartbarem und instabilem Code. Wenn die Logik sich später ändern soll, muss der gesamte Refresh neu durchlaufen. Besser: die rohen Daten sauber machen, dann DAX für die Intelligenz nutzen.

**Zu viel Transformation in DAX.** Das andere Extrem: Nutzer versuchen, in DAX zu säubern und zu kombinieren, was Power Query hätte tun sollen. Das führt zu langsamen Reports, weil DAX bei jeder Filterung diese Transformationen neu durchführen muss. Ein Report mit 100.000 Zeilen Kundendaten wird unerträglich langsam, wenn DAX erst noch Duplikate löschen oder Spalten aufteilen soll.

**Die Grauzone: Berechnete Spalten.** Eine berechnete Spalte in Power BI ist materialisiert – sie wird berechnet und gespeichert. Das ist näher an Power Query als an DAX. Berechnete Spalten sollten daher nur für Klassifizierungen oder einfache Lookups verwendet werden (z.B. "Kundentyp basierend auf Umsatzklasse"). Kennzahlen gehören in Measures – echte DAX-Formeln, die bei jeder Filterung neu berechnet werden.

## Praktische Entscheidungshilfe

Hier ist eine konkrete Frage, die hilft:

**Muss die Logik vor oder nach der Filterung durch den Nutzer ausgeführt werden?** Wenn ein Geschäftsführer einen Report öffnet und "Nur Berlin" auswählt – soll die Logik dann noch gelten oder nicht?

Wenn ja, gehört es in Power Query. Ein Beispiel: Duplikate entfernen. Wenn der Chef Berlin filtert, sollte es dort auch keine Duplikate mehr geben.

Wenn nein, gehört es in DAX. Ein Beispiel: Umsatzbenchmark. Wenn der Chef "Nur Berlin" auswählt, soll der Umsatz von Berlin angezeigt werden – nicht der gesamte Umsatz aus der Originalberechnung.

## Eine kluge Architektur

Wir empfehlen einen bewährten Aufbau:

1. Power Query laden die Daten, erstellen eine saubere Datenbank-ähnliche Struktur mit Stammdaten und Transaktionsdaten, und bauen einfache Nachschlagetabellen.

2. Das Datenmodell in Power BI definiert Beziehungen zwischen diesen Tabellen.

3. DAX schafft dann die Intelligenz – alle Kennzahlen, alle analytischen Fragen, alle Vergleiche.

Dieser Aufbau ist wartbar, performant und skalierbar. Wenn Anforderungen sich ändern, kann man DAX-Formeln anpassen, ohne den gesamten Datenfluss zu reißen.

## Fazit

Power Query und DAX sind nicht konkurrierend – sie sind komplementär. Die richtige Grenzziehung ist kein technisches Detail, sondern bestimmt, ob ein Projekt wartbar und zuverlässig wird.

Wir empfehlen: Machen Sie Power Query zu dem Ort, wo Daten zuverlässig sind. Machen Sie DAX zu dem Ort, wo Daten verständlich werden.

Wenn Sie unsicher sind, ob Ihr Projekt diese Balance hat – oder wenn Sie ein bestehendes Modell entwirren möchten – lohnt sich ein ehrlicher Blick von außen. [Kontaktieren Sie uns](/kontakt), um zu besprechen, wie Ihre Datenarchitektur aussehen könnte.