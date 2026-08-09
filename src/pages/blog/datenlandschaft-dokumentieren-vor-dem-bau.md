---
layout: ../../layouts/BlogPost.astro
title: "Datenlandschaft dokumentieren: Warum es sich lohnt, bevor man baut"
excerpt: "Bevor neue Systeme entstehen, lohnt es sich, die vorhandene Datenlandschaft zu dokumentieren. Das spart Kosten, verhindert Fehler und schafft Klarheit für alle Beteiligten."
date: 2026-08-09
tag: Daten verstehen
readTime: 5
---

# Datenlandschaft dokumentieren: Warum es sich lohnt, bevor man baut

Wenn ein Unternehmen ein neues BI-System aufbauen oder eine Dateninfrastruktur modernisieren möchte, ist die erste Reaktion oft klar: Man fängt an zu bauen. Man sucht sich Tools aus, entwirft Datenmodelle, schreibt ETL-Prozesse. Die Energie ist hoch, der Wille groß.

Absolut falsch ist dieser Drang nicht — aber unvollständig. Wir sehen immer wieder, dass Unternehmen erst mitten im Projekt merken, dass sie gar nicht richtig verstanden haben, welche Daten sie bereits haben, wo diese leben, wer sie nutzt und in welchem Zustand sie sind. Das führt zu Umplanungen, versteckten Kosten und Frustration bei allen Beteiligten.

Es gibt einen besseren Weg: eine gründliche Dokumentation der bestehenden Datenlandschaft, bevor die erste Zeile neuer Code geschrieben wird.

## Was ist eine Datenlandschaft überhaupt?

Die Datenlandschaft eines Unternehmens ist nicht abstrakt. Sie ist konkret: Es sind die Systeme, in denen Daten entstehen oder eingespeist werden. Es sind die Dateien, die herumgeschoben werden. Es sind die Excel-Tabellen, die der Vertrieb führt. Es sind die Datenbanken, zu denen nur wenige Zugriff haben. Es sind die APIs, die Systeme verbinden. Es sind auch die Prozesse, die Menschen folgen, um Daten zu aktualisieren oder zu prüfen.

Eine Datenlandschaft zu dokumentieren bedeutet, all das sichtbar zu machen. Nicht perfekt, nicht umfassend — sondern ehrlich und praktisch.

## Warum das Dokumentieren vor dem Bauen kommt

Wir empfehlen, diese Dokumentation vor größeren Investitionen in neue Systeme anzufertigen — aus mehreren Gründen.

Zunächst gewinnt man Klarheit über den Status quo. Ein Geschäftsführer, der sein Unternehmen leitet, hat oft ein Bauchgefühl dafür, dass die Daten "irgendwie an verschiedenen Stellen" sind. Aber bis die Dokumentation fertig ist, wird dieses Bauchgefühl konkret. Man sieht, dass die Kundenmaster in drei verschiedenen Systemen gepflegt wird. Man sieht, dass der CEO für sein Reporting auf manuelle Excel-Exports angewiesen ist. Man sieht, dass es Datenlücken gibt, die bislang einfach ignoriert wurden.

Diese Klarheit ist Gold wert — weil sie die richtige Basis für Entscheidungen ist.

Zweitens vermeidet man teure Neuarbeiten. Ein häufiges Szenario: Ein Team investiert viel Zeit darin, ein neues Datenmodell zu bauen, und merkt erst beim Testen, dass es eine Datenquelle gibt, die sie übersehen haben. Oder die Datenqualität ist viel schlechter als erwartet, weil bestimmte Informationen gar nicht erfasst werden. Mit einer Vorausdokumentation werden solche Überraschungen deutlich seltener.

Drittens wird die Kommunikation einfacher. Wenn alle Beteiligten — IT, Fachbereich, Management — auf der gleichen Basis arbeiten und wissen, wie die Daten heute fließen, entstehen weniger Missverständnisse. Anforderungen werden präziser, weil man über konkrete Datenquellen spricht, nicht über vage Ideen.

## Wie sieht eine praktische Dokumentation aus?

Wir sehen zwei Ansätze, die funktionieren.

Der erste ist ein strukturiertes Inventar. Man listet auf: Welche Systeme existieren? Welche Daten beschaffen sie? Wer nutzt diese Daten? Wie oft werden sie aktualisiert? Wie zuverlässig sind sie? Diese Liste kann in einem Dokument sein, in einer Tabelle oder in einem Wiki — das Medium ist sekundär. Das Wichtige ist, dass es gepflegt ist und alle Stakeholder es verstehen.

Der zweite Ansatz ist eine Visualization der Datenflüsse. Man zeichnet auf (oder lässt zeichnen), wo Daten entstehen, wie sie sich bewegen, wo sie landen. Das kann sehr einfach sein: Kästen für Systeme, Pfeile für Datenflüsse. Oder es kann detaillierter sein, mit Informationen über Schnittstellen, Batch-Prozesse, manuelle Handgriffe. Der Vorteil: Ein Bild sagt oft mehr als hundert Seiten Text — besonders beim Management.

In der Praxis kombinieren viele Unternehmen beide Ansätze: ein Diagramm für die schnelle Orientierung und ein Dokument für die Details.

## Was wird dokumentiert?

Wir schlagen vor, diese Punkte zu erfassen:

**Systeme und Datenquellen:** Name, Zweck, Eigentümer, Technologie, Datenbeschaffung (wie kommen die Daten dort hin?).

**Datenflüsse:** Welche Systeme sind miteinander verbunden? Wie funktioniert die Verbindung (API, Datei, manuell)? Wie oft finden Updates statt?

**Datenqualität:** Bekannte Probleme, Lücken, Unstimmigkeiten. Nicht wertend, sondern objektiv: "In Tabelle X fehlen in 15% der Fälle die PLZ-Daten."

**Stakeholder:** Wer nutzt welche Daten? Wer ist abhängig von welchen Systemen? Wessen Arbeit würde leiden, wenn System Y ausfiele?

**Geschäftliche Regeln:** Wie werden Daten definiert? Was bedeutet "Umsatz" in diesem Unternehmen? Gibt es Abweichungen zwischen verschiedenen Abteilungen?

Diese Dokumentation muss nicht vollkommen sein. Ein 80%-Lösung, die wahr ist, bringt mehr als eine 100%-Lösung, bei der sich niemand auskennt.

## Der Aufwand und sein Nutzen

Eine solche Dokumentation dauert nicht ewig. Wir sehen Unternehmen mit mehreren Dutzend Systemen, die in zwei bis vier Wochen ein solides Inventar zusammenbringen — wenn man das nötige Know-how anzapft und die Zeit dafür freimacht.

Der Nutzen ist oft unverhältnismäßig größer als der Aufwand. Weil man damit klare Entscheidungen trifft, statt Geld in die falsche Lösung zu investieren. Weil Projekte schneller starten, weil die Basis bereits klar ist. Weil weniger böse Überraschungen entstehen.

Besonders für mittlere Unternehmen mit gewachsener IT-Struktur ist das wertvoll. Denn hier gibt es oft viele Inseln: das alte ERP, das Kundensystem, das neue Cloud-Tool, das Excel-Ding, das ein ehemaliger Mitarbeiter gebaut hat. Eine Dokumentation macht diese Komplexität nicht einfach — aber sie macht sie beherrschbar.

## Der nächste Schritt

Wenn das bei Ihnen bekannt vorkommt — wenn Sie vermuten, dass Ihre Datenlandschaft komplexer ist, als Sie vollständig überblicken können — könnte eine solche Dokumentation der richtige erste Schritt sein. Nicht um sich zu blockieren, sondern um später schneller und sicherer zu bauen.

Wir unterstützen Unternehmen gern bei dieser Aufgabe: Der Klärung der Ist-Situation, der Dokumentation und dem Entwurf einer sauberen Zukunftslandschaft. Wenn Sie daran interessiert sind oder Fragen haben, [sprechen Sie mit uns](/kontakt). Wir schauen gemeinsam, welcher Ansatz für Ihr Unternehmen passt.