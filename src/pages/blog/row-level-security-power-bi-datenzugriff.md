---
layout: ../../layouts/BlogPost.astro
title: "Row-Level Security in Power BI: Wann und wie man Datenzugriff einschränkt"
excerpt: "Row-Level Security ermöglicht es, Nutzer nur ihre relevanten Daten sehen zu lassen. Wir zeigen, wann diese Funktion sinnvoll ist und wie man sie praktisch umsetzt."
date: 2026-09-16
tag: Modelle & Reports
readTime: 5
---

## Warum Datenzugriff kontrollieren?

In vielen Unternehmen arbeiten Menschen aus verschiedenen Abteilungen, Regionen oder Hierarchieebenen mit denselben Power BI Reports. Ein Verkaufsleiter aus München sollte nicht die Zahlen seines Konkurrenten in Stuttgart sehen. Ein Servicetechniker braucht keine Finanzkennzahlen der Geschäftsführung. Und ein Projektmanager in einem Kundenprojekt sollte nur auf die Daten seiner eigenen Kunden zugreifen können.

Ohne Zugriffsbeschränkungen bleibt nur die Wahl zwischen zwei unbefriedigenden Szenarien: Entweder man erstellt für jede Gruppe einen separaten Report mit identischem Code und Layout — was zu Wartungshorror führt. Oder man gibt allen Nutzern Zugriff auf alle Daten und verlässt sich auf ihre Disziplin. Das funktioniert nicht.

Row-Level Security löst dieses Problem elegant. Die Funktion sorgt dafür, dass jeder Nutzer in Power BI automatisch nur die Zeilen sieht, auf die er Zugriff haben darf — während alle anderen Daten im Hintergrund gefiltert bleiben.

## Wann ist Row-Level Security notwendig?

Wir sehen regelmäßig drei Szenarien, in denen Unternehmen eine Datenbeschränkung brauchen.

Das erste Szenario ist geografisch: Ein Einzelhandelskette mit 40 Filialen möchte, dass jeder Filialleiter sein Lager, seine Verkäufe und seine Personalkosten sieht — aber nicht die Daten der Nachbarfiliale. Die Zentrale soll alles sehen können.

Das zweite Szenario ist hierarchisch: Ein Vertriebsunternehmen hat Vertreter, Teamleiter und Vertriebsleiter. Jede Ebene sollte ihre eigenen Zahlen plus die ihrer Untergebenen sehen, aber nicht die Zahlen anderer Äste der Organisation.

Das dritte Szenario ist kundenbezogen: Ein Dienstleistungsunternehmen mit mehreren Mandanten oder ein Softwarehaus mit Kundenportalen. Jeder Kunde darf nur seine eigenen Daten sehen. Ein Mitarbeiter von Unternehmen A muss komplett von den Daten von Unternehmen B abgeschottet sein.

Es gibt auch Grenzfälle, bei denen man überlegen sollte, ob Row-Level Security der richtige Weg ist. Wenn die Beschränkung sehr komplex wird, wenn sie sich täglich ändert, oder wenn sie nur zwei oder drei Einzelpersonen betrifft, kann es sinnvoller sein, separate Reports zu bauen oder die Filterung in einer vorgelagerten Datenschicht zu lösen.

## Wie funktioniert Row-Level Security technisch?

Wir erklären das Konzept von innen heraus.

In Power BI Desktop definiert man sogenannte Rollen. Diese Rollen sind nicht mit Sicherheitsgruppen in Azure Active Directory gleichzusetzen. Sie sind reine Datenfilter-Definitionen. Eine Rolle könnte heißen "Filialleiter" oder "Kundengruppe A".

Für jede Rolle schreibt man dann eine oder mehrere Filterregeln auf die zugrunde liegenden Tabellen. Diese Filterregeln nutzen eine einfache Abfragesprache. Praktisch funktioniert das so: Man definiert zum Beispiel, dass die Rolle "München-Filial" die Tabelle "Verkäufe" so filtert, dass nur Zeilen mit dem Wert "München" in der Spalte "Filiale" sichtbar sind. Eine andere Rolle könnte all jene Zeilen sehen, bei denen die Spalte "Verkäufer" dem aktuellen Benutzer entspricht.

Die Besonderheit ist, dass diese Filter automatisch greifen, sobald sich ein Benutzer mit seiner Rolle einloggt. Man muss in den Report nichts weiter einbauen. Die Filterung passiert transparent im Hintergrund.

## Wie setzt man Row-Level Security praktisch um?

Die Implementierung hat mehrere Schritte.

Zuerst muss man verstehen, nach welchen Kriterien die Daten aufgeteilt werden sollen. Diese Kriterien müssen als Spalten in den Power BI Tabellen vorhanden sein. Wenn man nach Filiale filtern will, muss es eine Spalte "Filiale" geben. Wenn man nach Verkäufer filtern will, muss es eine Spalte "Verkäufer" geben. Diese Spalten sind das Rückgrat der ganzen Lösung.

Danach definiert man in Power BI Desktop die Rollen und die Filterregeln. Der Power BI Designer öffnet einen Dialog, in dem man für jede Tabelle Bedingungen schreiben kann. Diese Bedingungen sind oft sehr einfach: Eine Spalte muss einen bestimmten Wert haben. Oder eine Spalte muss dem aktuell angemeldeten Benutzer entsprechen. Power BI bietet dafür eingebaute Funktionen.

Zweitens muss man entscheiden, wie die Zuordnung von Benutzern zu Rollen erfolgt. Es gibt zwei Hauptansätze. Der erste ist die Zuordnung über die Sicherheitsgruppen von Azure Active Directory. Der zweite ist eine Zuordnungstabelle, die man selbst managed. Die erste Variante ist eleganter, wenn die Organisationsstruktur in Azure Active Directory abgebildet ist. Die zweite Variante ist flexibler, wenn die Zuordnung kompliziert ist oder sich häufig ändert.

Drittens wird der Report in den Power BI Service hochgeladen und veröffentlicht. Die Rollen-Definitionen werden mit veröffentlicht.

Viertens erfolgt die Zuordnung von Benutzern zu Rollen im Power BI Admin Portal oder über eine externe Zuordnungstabelle. Ab diesem Moment sehen die Benutzer nur noch ihre autorisierten Daten.

## Häufige Stolpersteine

Es gibt eine Reihe von Problemen, die immer wieder auftauchen.

Das erste Problem ist unzureichende Datenqualität. Wenn die Spalte "Filiale" in manchen Zeilen leer ist, können diese Zeilen überhaupt nicht sichtbar gemacht werden. Wenn sie inkonsistent geschrieben ist ("München" statt "MÜNCHEN"), funktioniert die Filterung nicht. Bevor man Row-Level Security implementiert, muss die zugrunde liegende Datenqualität passen.

Das zweite Problem ist Performance. Eine komplexe Regel auf einer großen Tabelle kann zu merklich langsameren Abfragen führen. Besonders dann, wenn die Filterung über mehrere Beziehungen hinweg erfolgt. Man sollte also bereits bei der Datenmodellierung bedenken, wo Row-Level Security zum Einsatz kommt.

Das dritte Problem ist Fehlerverwaltung. Wenn ein Benutzer in keine Rolle passt, sieht er möglicherweise keine Daten. Das kann frustrierend sein. Es braucht ein klares Prozedere, wem welche Rollen zugeordnet werden und wie man Probleme diagnostiziert.

Das vierte Problem ist Komplexität. Manche Filterregeln werden im Laufe der Zeit sehr komplex. Wenn man zum Beispiel hierarchisch filtern will, kann das schnell unübersichtlich werden. Dann lohnt sich oft eine Vorfilterung auf der Datenseite statt in Power BI.

## Alternative: Filterung auf der Datenseite

Es gibt auch einen anderen Weg. Statt die Filterung in Power BI vorzunehmen, kann man sie bereits in der Datenbank oder im Data Warehouse durchführen.

Der Vorteil ist, dass die Queries schneller sind und weniger Daten übertragen werden müssen. Der Nachteil ist, dass man weniger Flexibilität hat. Man braucht für jede Datensicht eine separate Tabelle oder View in der Datenbank.

Für große, komplexe Organisationen mit vielen Filterregeln ist dieser Ansatz oft die stabilere Lösung. Für kleinere bis mittlere Unternehmen reicht Row-Level Security in Power BI meist aus.

## Fazit

Row-Level Security ist eine mächtige Funktion, um Datenzugriff zu kontrollieren. Sie funktioniert am besten, wenn die Filterkriterien klar sind, die Datenqualität stimmt und die Filterregeln nicht zu komplex werden. In vielen Mittelstandsunternehmen löst sie das Problem, dass verschiedene Nutzer verschiedene Daten sehen sollen — ohne dass man dutzende Reports maintainen muss.

Wer sich unsicher ist, ob Row-Level Security für die eigene Situation richtig ist oder wer bei der Umsetzung steckenbleibt: Wir helfen gerne beim Aufbau. Kontaktieren Sie uns, wenn Sie mehr erfahren möchten.