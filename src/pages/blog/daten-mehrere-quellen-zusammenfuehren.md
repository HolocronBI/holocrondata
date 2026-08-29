---
layout: ../../layouts/BlogPost.astro
title: "Daten aus mehreren Quellen zusammenfuehren: Worauf es dabei ankommt"
excerpt: "Wenn Daten aus ERP, CRM und Excel-Dateien zusammenkommen, entstehen schnell Fehler. Wir zeigen, worauf es bei der Integration ankommt."
date: 2026-08-29
tag: Daten bereinigen
readTime: 5
---

## Das Problem mit verteilten Datenquellen

In den meisten Unternehmen der Mittleren Größe existiert nicht eine zentrale Quelle für geschäftskritische Informationen. Stattdessen verteilen sich Daten auf mehrere Systeme: Das ERP-System verwaltet Bestandszahlen, das CRM hält Kundendaten, in Excel-Tabellen werden Zusatzverwaltungen gepflegt, und in der Buchhaltungssoftware finden sich Umsatzzahlen. Jedes System hat seine Logik, seine Datenformate und sein eigenes Verständnis davon, was ein Datensatz bedeutet.

Wenn diese Quellen zusammengebracht werden sollen, passieren typischerweise drei Fehler: Unterschiedliche Datentypen werden nicht erkannt, Duplikate entstehen weil Kunden unterschiedlich benannt sind, oder kritische Informationen gehen in der Vereinigung verloren, weil Spalten unterschiedlich aufgebaut sind.

Wir sehen hier kein technisches Problem allein, sondern ein strategisches: Ohne klare Regeln, wie Daten zusammengeführt werden, entsteht kein Vertrauen in die späteren Analysen.

## Schritt eins: Die Quellen verstehen

Bevor eine Integration beginnt, muss jede Quelle dokumentiert werden. Das klingt aufwendig, ist aber der entscheidende Schritt. Wir empfehlen, für jede Quelle zu klären: Welche Geschäftsprozesse erzeugen diese Daten? Wann werden sie aktualisiert? Wie zuverlässig ist die Dateneingabe? Und vor allem: Welche Definitionen liegen den Feldern zugrunde?

Ein häufiges Beispiel ist das Feld "Kundenstatus". Im CRM könnte es die Werte "aktiv", "inaktiv", "prospect" annehmen. Im Abrechnungssystem könnte es "zahlend", "nicht zahlend", "säumig" sein. Das sind zwei völlig verschiedene Sichten auf denselben Kunden, und das muss allen beteiligten Abteilungen bewusst sein, bevor die Zusammenführung stattfindet.

Dokumentieren Sie auch Besonderheiten: Welche Felder sind optional? Welche sind immer gefüllt? Gibt es bekannte Fehlerquellen? Diese Transparenz schafft die Basis für valide Zusammenführungen.

## Schritt zwei: Eindeutige Schlüssel definieren

Um Duplikate zu vermeiden und Datensätze korrekt abzugleichen, brauchen wir eindeutige Bezeichner. Ein Kunde kann unter verschiedenen Namen auftauchen: "Müller GmbH", "mueller-gmbh", "MUELLER GMBH", "Müller G.m.b.H.". Das sind dieselbe Entität, werden aber von Systemen als unterschiedlich behandelt.

Wir müssen daher Regeln festlegen, wie solche Uneindeutigkeiten gelöst werden. Das kann durch eine Kundennummer geschehen, falls eine vorhanden ist. Falls nicht, muss eine Kombinationsstrategie definiert werden: Vielleicht die Kombination aus Name, Ort und Branche? Oder der Abgleich nach Steuernummer?

Wichtig ist: Diese Schlüsseldefinition muss dokumentiert und konsequent angewendet werden. Wenn im ersten Durchlauf die Kundennummer leitend ist, kann es nicht im nächsten Durchlauf plötzlich die Steuernummer sein.

## Schritt drei: Datentypen und Formate vereinheitlichen

Jedes System speichert Daten in seinen eigenen Formaten. Ein Datum könnte in System A als "01.12.2023" auftauchen, in System B als "2023-12-01", in System C als "01-Dec-2023". Diese Unterschiede mögen trivial wirken, aber sie führen zu Fehlern bei Berechnungen und Vergleichen.

Wir müssen daher klare Regeln für jeden Datentyp festlegen: Wie werden Datum und Uhrzeit gespeichert? Wie werden Dezimalzahlen gekennzeichnet? Werden Währungen mit ISO-Codes versehen? Wie werden Texte kodiert?

Das Gleiche gilt für kategorische Daten. Wenn es eine Liste von zulässigen Werten gibt — etwa Bundesländer, Produktkategorien oder Abteilungsnamen — müssen diese standardisiert werden, bevor die Quellen kombiniert werden.

## Schritt vier: Datenqualität prüfen, bevor es zusammenkommt

Wenn Sie Daten aus mehreren Quellen kombinieren, multiplizieren Sie auch deren Fehler. Ein fehlender Wert in der einen Quelle und falsch eingegebene Kategorie in der anderen summieren sich schnell zu unbrauchbaren Datensätzen.

Deshalb sollten Qualitätsprüfungen vor der Zusammenführung stattfinden. Das bedeutet konkret: Prüfen Sie, welcher Anteil der Datensätze in jeder Quelle vollständig ist. Überprüfen Sie, ob Werte in erlaubten Bereichen liegen. Suchen Sie nach Ausreißern, die auf Eingabefehler hindeuten.

Ein Beispiel: Wenn die durchschnittliche Kundenlaufzeit drei Wochen beträgt, aber einzelne Kunden 2000 Tage im System sind, deutet das auf ein Problem hin — möglicherweise auf einen fehlerhaften Eintrag oder auf Testdaten, die nicht gelöscht wurden.

Solche Probleme vor der Integration zu adressieren ist deutlich kostengünstiger, als hinterher fehlerhafte Analysen zu bereinigen.

## Schritt fünf: Ein Mapping dokumentieren

Nachdem alle Schritte geklärt sind, muss das gesamte Mapping dokumentiert werden. Das ist buchstäblich eine Tabelle oder ein Dokument, das festhält: Welche Spalte aus Quelle A wird welcher Spalte aus Quelle B entsprechend zugeordnet? Welche Transformationen finden statt? Wo gibt es Konflikte, und wie werden diese gelöst?

Diese Dokumentation dient zwei Zwecken: Erstens wird damit transparent, welche Logik der Integration zugrunde liegt. Zweitens kann es später nachvollzogen werden, warum bestimmte Entscheidungen getroffen wurden — besonders wichtig, wenn neue Personen in den Prozess einsteigen.

## Schritt sechs: Wiederholbarkeit sicherstellen

Daten aus mehreren Quellen zusammenzuführen ist kein einmaliger Prozess. Morgen kommen neue Daten hinzu, und übermorgen wird wieder integriert. Damit dieser Prozess nicht jedes Mal manuell von vorne beginnt, sollte er automatisierbar sein.

Das heißt nicht, dass es technisch automatisiert werden muss — es kann auch ein strukturiertes Excel-Workflow oder ein klar dokumentiertes manuelles Verfahren sein. Wichtig ist: Derselbe Prozess muss reproduzierbar sein, ohne dass jedes Mal neu überlegt wird, wie es gemacht wird.

## Das Mindset dahinter

Wir sehen häufig, dass Unternehmen diese Schritte als lästig empfinden und sie überspringen wollen. Der Druck, schnell zu Analyseergebnissen zu kommen, ist groß. Doch diese Ungeduld rächt sich: Fehlerhafte Daten führen zu falschen Entscheidungen, und dann kostet die Korrektur deutlich mehr Zeit und Geld als die gründliche Vorbereitung.

Denken Sie an die Datenzusammenführung als Fundament. Wenn das Fundament wackelt, ist die ganze Struktur oben gefährdet. Die Zeit, die in gutes Mapping, klare Definitionen und Qualitätsprüfungen investiert wird, zahlt sich schnell aus.

Wenn Sie in Ihrem Unternehmen mit der Zusammenführung mehrerer Datenquellen kämpfen und nicht sicher sind, ob Ihr Prozess robust genug ist, sprechen wir gerne mit Ihnen über das konkrete Vorgehen. Kontaktieren Sie uns über unser Kontaktformular — wir beraten Sie gerne, wie Sie Ihre Datenintegration solider aufsetzen können.