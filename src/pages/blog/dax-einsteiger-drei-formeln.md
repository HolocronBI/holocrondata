---
layout: ../../layouts/BlogPost.astro
title: "DAX für Einsteiger: Die 3 Formeln, die man wirklich braucht"
excerpt: "DAX muss nicht kompliziert sein. Wir zeigen die drei Formeln, mit denen Anfänger sofort produktiv werden – ohne theoretischen Ballast."
date: 2026-05-31
tag: Modelle & Reports
readTime: 5
---

## DAX: Der erste Schritt ist überschaubar

Wer sich zum ersten Mal mit DAX auseinandersetzt, steht oft vor einer überwältigenden Fülle an Funktionen und Konzepten. Die Dokumentation ist umfangreich, die Community-Foren sind voller Diskussionen zu Edge Cases – und man fragt sich schnell, ob man wirklich alles verstehen muss, bevor man seine erste aussagekräftige Kennzahl baut.

Wir können das beruhigen: Das ist nicht der Fall. In unserer Arbeit mit Unternehmen zeigt sich immer wieder, dass drei grundlegende Formeln ausreichen, um die allermeisten Standard-Anforderungen in Berichten und Dashboards umzusetzen. Alles andere ist Verfeinerung – wichtig, aber nicht am Anfang nötig.

Wenn wir verstehen, wie diese drei Formeln funktionieren, bekommen wir nicht nur schnell erste Erfolge hin. Wir schaffen uns auch eine solide Grundlage, um später komplexere Probleme zu lösen.

## 1. SUMX – Die universelle Summe

Die erste Formel heißt SUMX. Sie ist so grundlegend, dass sie fast überall auftaucht.

Beim klassischen Summieren in einem Bericht könnte man meinen, dass ein einfaches SUM ausreicht. Und tatsächlich funktioniert das oft. Aber sobald wir mit mehreren Tabellen arbeiten, unterschiedliche Filter haben oder auf Basis einer Tabelle etwas Neues berechnen müssen, zeigt sich die Grenze des Einfachen schnell.

SUMX funktioniert anders: Wir geben der Funktion eine Tabelle vor – zum Beispiel eine Kundenliste – und eine Berechnung, die für jede Zeile dieser Tabelle durchgeführt werden soll. Die Funktion iteriert dann durch jede Zeile, führt die Berechnung durch und summiert alle Ergebnisse auf.

Ein praktisches Beispiel: Wir wollen den Gesamtumsatz pro Kunde berechnen, aber nur für Transaktionen aus dem letzten Monat und nur für Kunden, die mehr als zehn Produkte gekauft haben. Mit SUMX können wir genau das ausdrücken. Wir sagen der Funktion, welche Tabelle sie durchlaufen soll, und dann schreiben wir die Logik hin: "Für jede Zeile: Nimm den Umsatz, aber nur wenn das Datum im letzten Monat liegt und die Produktmenge größer als zehn ist."

Das Wichtigste beim Lernen von SUMX ist nicht die Syntax – die findet man in der Dokumentation. Das Wichtigste ist zu verstehen, dass diese Funktion uns Kontrolle gibt. Sie macht es möglich, Berechnungen auszudrücken, die sonst nur mit vielen Umwegen zu lösen wären.

## 2. CALCULATE – Der Filter-Magier

Die zweite Formel ist CALCULATE. Sie ist vielleicht noch wichtiger als SUMX, weil sie das Fundament vieler fortgeschrittener Techniken bildet.

CALCULATE ermöglicht es uns, eine Berechnung durchzuführen, aber mit geänderten Filterkontext. Das klingt abstrakt, wird aber sofort konkret, wenn wir ein Beispiel sehen.

Stellen wir uns vor, wir wollen im Bericht den aktuellen Monatsumsatz anzeigen, daneben aber auch den Umsatz vom gleichen Monat des Vorjahres zum Vergleich. Das Problem: Unser Bericht ist nach Monat gefiltert. Wenn wir einfach den Umsatz vom Vorjahr abfragen, bekommen wir wieder den aktuellen Monat – nicht das Vorjahr.

Hier kommt CALCULATE ins Spiel. Wir können damit sagen: "Berechne die Umsatzsumme, aber ändere dabei den Filter auf das Vorjahr." Die Funktion ignoriert den aktuellen Filter, setzt einen neuen Filter und führt die Berechnung in diesem neuen Kontext durch.

Das funktioniert nicht nur mit Datumswechseln. CALCULATE erlaubt es uns, beliebige Filter zu setzen oder zu entfernen. Das macht es zur vielseitigsten Waffe im DAX-Arsenal eines Anfängers. Und es ist nicht mal besonders schwierig – wir müssen nur verstehen, dass Filter von außen nach innen wirken und dass wir sie bewusst setzen können.

## 3. RELATED – Die Verbindung zwischen Tabellen

Die dritte Formel ist RELATED. Sie ist kürzer und weniger spektakulär als die anderen beiden, aber genauso wichtig.

In modernen BI-Systemen arbeiten wir mit mehreren Tabellen, die durch Beziehungen miteinander verbunden sind. Eine Verkaufstabelle hängt an einer Kundentabelle, die mit einer Kategorie-Tabelle verbunden ist – und so weiter. Diese Struktur ist sauberer und performanter als alles in eine große Tabelle zu packen.

Aber wie greifen wir auf Daten aus einer anderen Tabelle zu, wenn wir gerade in einer Formel sind? Dafür gibt es RELATED. Wenn wir in der Verkaufstabelle sitzen und den Kundentyp wissen möchten, können wir RELATED verwenden, um die Kundenart aus der Kundentabelle zu holen.

Das ist unglaublich praktisch, weil es bedeutet, dass wir unsere Tabellen sauber trennen können und trotzdem überall Zugriff auf die Informationen haben, die wir brauchen. RELATED ist sozusagen der Klebstoff, der die Tabellen zusammenhält.

## Warum diese drei?

Wir könnten hundert DAX-Funktionen lernen. Aber diese drei decken zusammen ein riesiges Spektrum an Anforderungen ab.

Mit SUMX iterieren wir durch Tabellen und machen komplexe Berechnungen. Mit CALCULATE ändern wir Filter und ermöglichen Vergleiche zwischen verschiedenen Zeiträumen oder Kategorien. Mit RELATED verbinden wir Tabellen und holen uns Daten, wo wir sie brauchen.

Fast jeder Bericht, der einen minimalen Anspruch an Komplexität hat, verwendet mindestens zwei dieser drei Formeln. Und wenn man diese drei sicher beherrscht, ist der Schritt zu anderen Funktionen wie FILTER oder SUMPRODUCT oder DAX-Iteratoren nicht mehr weit.

## Der nächste Schritt

Das Wichtigste ist, mit diesen drei Formeln zu experimentieren. Kleine Testfälle bauen, Fehler machen, die Fehlermeldungen lesen, verstehen, warum etwas nicht funktioniert hat – das ist der Weg zum Verständnis.

Wer diese Grundlagen sicher anwendet, hat für die meisten praktischen Aufgaben schon alle Werkzeuge in der Hand. Alles andere kommt mit der Zeit.

Wenn ihr bei der Umsetzung auf Fragen stoßt oder unsicher seid, wie diese Formeln auf eure konkrete Situation passen – [schreibt uns gerne an](/kontakt). Wir helfen euch, die richtige Struktur für eure Daten zu finden und die ersten Formeln zum Laufen zu bringen.