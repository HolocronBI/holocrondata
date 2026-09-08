---
layout: ../../layouts/BlogPost.astro
title: "DAX für Einsteiger: Die 3 Formeln, die man wirklich braucht"
excerpt: "DAX muss nicht kompliziert sein. Wir zeigen die drei Formeln, mit denen man in Power BI und Excel bereits 80 Prozent aller Aufgaben löst."
date: 2026-09-08
tag: Modelle & Reports
readTime: 5
---

## DAX für Einsteiger: Die 3 Formeln, die man wirklich braucht

Wer sich zum ersten Mal mit DAX auseinandersetzt, wird von der Fülle an Funktionen überwältigt. Hunderte Formeln, komplexe Syntax, kryptische Fehlermeldungen. Das wirkt abschreckend — und oft unnötig. Wir haben festgestellt, dass Einsteiger häufig denken, sie müssen alles verstehen, bevor sie anfangen. Das stimmt nicht.

In der Praxis zeigt sich immer wieder: Mit drei grundlegenden Formeln lassen sich bereits die meisten Anforderungen in Power BI und Excel abdecken. Alles andere ergibt sich dann aus der Routine. Wir möchten Ihnen diese drei Formeln näherbringen — nicht theoretisch, sondern praktisch und direkt anwendbar.

## 1. SUMME — Das Fundament

Die erste Formel ist nicht wirklich neu, aber in DAX hat sie eine andere Form als in klassischen Excel-Formeln. SUMME in DAX funktioniert auf Tabellenebene, nicht nur auf einzelne Zellen. Das ist der entscheidende Unterschied.

Stellen Sie sich ein Unternehmen vor, das eine Power BI-Abfrage erstellen möchte: Wie viel haben wir insgesamt verkauft? Eine klassische Aufgabe. Statt einzelne Zellen zu addieren, schreiben wir eine Formel, die automatisch über alle Zeilen einer Spalte summiert. Das Ergebnis passt sich automatisch an, wenn neue Daten hinzukommen.

Wir sehen häufig, dass Geschäftsführer und Controller diese Denkweise zunächst fremd finden. Sie sind es gewohnt, in Einzelzellen zu denken. DAX denkt in Spalten und Tabellen. Das zu verstehen, ist der erste große Schritt. Sobald man diese Perspektive einnimmt, wird vieles einfacher.

Praktisch angewendet: Ein Unternehmen mit Verkaufsdaten möchte den Gesamtumsatz anzeigen. Die Formel fasst alle Umsätze zusammen — unabhängig davon, wie viele Datensätze es gibt. Neue Verkäufe werden automatisch berücksichtigt.

## 2. CALCULATE — Die Flexibilität

Die zweite Formel ist CALCULATE. Sie ist der Grund, warum DAX so mächtig ist — und warum viele Anfänger Schwierigkeiten damit haben. CALCULATE ermöglicht es, Bedingungen zu setzen. Sie sagt dem System: "Berechne das, aber nur unter diesen Voraussetzungen."

Ein praktisches Beispiel: Ein Vertriebsleiter möchte nicht nur den Gesamtumsatz sehen, sondern den Umsatz nur für eine bestimmte Region oder nur für ein bestimmtes Produkt. Ohne CALCULATE müsste man für jede Variante separate Spalten erstellen. Mit CALCULATE schreiben wir eine Formel, die flexibel bleibt.

Was macht CALCULATE so nützlich? Sie kann Filter kombinieren. Eine Bedingung, zwei Bedingungen, drei Bedingungen — alles in einer Formel. Das erspart enorm viel Arbeit bei der Verwaltung von Berichten.

Wir erleben regelmäßig, dass Unternehmen vorher mit Excel-Umwegen arbeiten: mehrere Hilfsspalten, separate Tabellenblätter, manuelle Anpassungen. CALCULATE macht das unnötig. Die Formel wird einmal geschrieben, und dann funktioniert sie für alle Kombinationen von Bedingungen, die man im Bericht durchspielen möchte.

Ein konkreter Ablauf: Ein Unternehmen hat Umsatzdaten nach Monat, Region und Produktkategorie. Der Controller möchte sehen, wie viel in Q3 2023 in der Region "Nord" verkauft wurde. Die Formel setzt beide Filter gleichzeitig — ohne dass er neue Daten aufbereiten muss.

## 3. RELATED — Die Verbindung

Die dritte Formel ist RELATED. Sie ist weniger bekannt als die anderen beiden, aber oft entscheidend für gut strukturierte Datenmodelle.

Wer mit mehreren Tabellen arbeitet — beispielsweise eine Verkaufstabelle und eine Kundentabelle — braucht Formeln, die Informationen aus unterschiedlichen Tabellen zusammenbringen. RELATED macht genau das. Sie verbindet Zeilen zwischen Tabellen, ohne komplizierte Umwege zu nehmen.

Das Problem ohne RELATED ist vertraut: Ein Analyst hat Verkaufsdaten und möchte wissen, welcher Kunde es war. Beide Informationen sind da — aber in verschiedenen Tabellen. Ohne RELATED müsste man entweder Daten duplizieren (schlecht für die Wartung) oder mit unhandlichen Umwegen arbeiten.

RETED sorgt dafür, dass die Beziehungen zwischen Tabellen auch in Formeln genutzt werden können. Das ist insbesondere bei größeren Datenmodellen wertvoll — und es fördert saubere Strukturen, statt dass Daten wahllos kombiniert werden.

Ein Szenario aus der Praxis: Ein Unternehmen hat eine Tabelle mit Bestellungen und eine separate Tabelle mit Kundeninformationen. Eine Formel soll für jede Bestellung den Namen des Kunden abrufen. RELATED holt diese Information automatisch, solange die Beziehungen im Modell korrekt definiert sind.

## Wann sind diese drei Formeln ausreichend?

Wir möchten ehrlich sein: Es gibt Szenarien, die komplexere Formeln erfordern. Zeitreihenberechnungen, fensterbasierte Analysen oder sehr spezielle Logik manchmal verlangen nach erweiterten Funktionen.

Aber in unserem Alltag, bei typischen geschäftlichen Anfragen — Umsätze nach Kategorie, Vergleiche zwischen Perioden, aggregierte Metriken nach verschiedenen Dimensionen — diese drei Formeln decken den größeren Teil ab. Wer diese gut beherrscht, hat eine solide Grundlage, um später zu spezialisieren.

Der Schlüssel ist nicht, jede DAX-Funktion zu kennen. Der Schlüssel ist, die grundlegenden Konzepte zu verstehen: Wie arbeite ich mit Tabellen statt Einzelzellen? Wie setze ich Bedingungen? Wie verbinde ich mehrere Datenquellen? Diese Fragen beantworten die drei Formeln oben.

## Nächste Schritte

Wer neu in DAX anfängt, raten wir: Bauen Sie kleine Übungen auf. Erstellen Sie ein einfaches Modell, versuchen Sie diese drei Formeln, schauen Sie, was passiert. Die Fehler sind Teil des Lernens — und DAX gibt in der Regel aussagekräftige Fehlermeldungen.

Wenn Sie jedoch merken, dass Ihre Anforderungen über Basis-Berichte hinausgehen — komplexe Forecasts, spezialisierte KPIs oder Modelle mit vielen Abhängigkeiten — lohnt sich ein strukturierter Ansatz. Dann wird ein gut durchdachtes Datenmodell und professionelle Unterstützung wertvoll.

Wir helfen gerne dabei, Ihre Reporting-Struktur zu bewerten und Sie zu zeigen, wie DAX in Ihrem spezifischen Kontext sinnvoll einsetzbar ist. [Sprechen Sie mit uns](/kontakt) — unverbindlich und konkret.