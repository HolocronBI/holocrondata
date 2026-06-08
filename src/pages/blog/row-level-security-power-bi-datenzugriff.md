---
layout: ../../layouts/BlogPost.astro
title: "Row-Level Security in Power BI: Wann und wie man Datenzugriff einschraenkt"
excerpt: "Row-Level Security schränkt den Datenzugriff gezielt ein. Wir zeigen, wann diese Sicherheitsebene notwendig ist und wie man sie richtig umsetzt."
date: 2026-06-08
tag: Modelle & Reports
readTime: 5
---

## Das Problem: Unterschiedliche Datenrechte im gleichen Report

In vielen Unternehmen nutzen verschiedene Abteilungen die gleiche Power-BI-Lösung — aber nicht alle dürfen die gleichen Daten sehen. Ein Verkäufer soll nur seine eigenen Regionen analysieren, eine Abteilungsleiterin ihre Teams, die Finance-Abteilung dagegen alle Zahlen. Wenn alle Nutzer Zugriff auf den gesamten Datensatz haben, entsteht schnell ein Sicherheitsrisiko.

Hier kommt Row-Level Security (RLS) ins Spiel. Damit können wir auf Ebene der einzelnen Datenzeilen definieren, wer welche Informationen sehen darf — ohne dafür mehrere Reports pflegen zu müssen.

## Wann macht Row-Level Security wirklich Sinn?

Wir sollten RLS nicht automatisch für jeden Report einbauen. Es gibt konkrete Szenarien, in denen sich der Aufwand lohnt.

Ein klassischer Fall ist die **regionale Verteilung**. Wenn wir einen Vertriebsreport haben und jeder Außendienstler nur seine Zahlen sehen soll, ist RLS das richtige Werkzeug. Statt mehrere Reports zu verwalten, definieren wir einmal die Regel: Der Nutzer sieht nur Daten für seine Region.

Ebenso verhält es sich mit **Hierarchien**. Ein Teamleiter sollte seine Mitarbeiter-Details sehen, der Abteilungsleiter alle Teams seiner Abteilung, der Geschäftsführer alles. Ohne RLS müssten wir für jede Ebene einen eigenen Report erstellen.

Auch **Mandanten-Szenarien** sind ein häufiger Grund: Wenn wir für mehrere unabhängige Organisationen arbeiten und sie die gleiche Power-BI-Infrastruktur nutzen, verhindert RLS, dass Daten vermischt werden.

Wir sollten RLS aber nicht einführen, nur weil es möglich ist. Wenn ein Report ohnehin schon gefiltert ist oder nur wenige Nutzer ihn sehen, kann RLS unnötige Komplexität bringen.

## Wie Row-Level Security funktioniert

Die Idee ist einfach: Wir erstellen Sicherheitsrollen in Power BI und definieren DAX-Filter, die automatisch greifen, wenn ein Nutzer den Report öffnet.

Der Prozess beginnt damit, dass wir festlegen, **nach welcher Information** gefiltert werden soll. Das ist oft eine Spalte wie "Region", "Team" oder "Filiale". Im nächsten Schritt schreiben wir einen Filter-Ausdruck, der prüft: Welche Regionen darf dieser Nutzer sehen?

Der Filter verbindet sich mit dem Nutzername oder einer anderen Information über den angemeldeten Benutzer. Power BI prüft automatisch beim Laden: Wer bin ich? Welche Rolle habe ich? Welche Zeilen passen zu meiner Rolle? Nur diese Zeilen werden angezeigt.

Es gibt verschiedene Ansätze, um diese Verbindung herzustellen. Eine Möglichkeit ist, eine Tabelle zu pflegen, die Nutzername mit Berechtigung verknüpft — etwa ein Register, in dem steht: "max.mueller@unternehmen.de gehört zu Region Süd". Ein Filter könnte dann lesen: "Zeige nur Zeilen, wo die Region in der Liste des aktuellen Nutzers vorkommt".

Anders funktioniert es, wenn die Berechtigung schon in den Daten selbst enthalten ist. Beispiel: Die Verkaufstabelle hat eine Spalte "Verkäufer". Der Filter könnte sagen: "Zeige nur Zeilen, wo Verkäufer gleich dem angemeldeten Benutzer ist". Das ist oft einfacher und wartungsärmer.

## Praktische Beispiele

Stellen wir uns ein Unternehmen mit mehreren Vertriebsbereichen vor. Wir haben einen Report mit Umsatzzahlen, Kundendetails und Abschlussquoten — alles nach Region aufgeschlüsselt. Ohne RLS sehen alle Nutzer alle Regionen. Mit RLS können wir eine Rolle "Nord" erstellen mit einem Filter, der sagt: "Diese Rolle sieht nur Daten, wo Region = 'Nord'". Der Nutzer aus der Nordregion wird dieser Rolle zugewiesen, öffnet den Report und sieht automatisch nur seine Zahlen.

Ein anderes Beispiel: Eine Holding mit mehreren Gesellschaften. Jede Gesellschaft hat ihre Geschäftsführung. Der Konzern-Report zeigt Finanzkennzahlen aller Gesellschaften. Mit RLS erstellen wir pro Gesellschaft eine Rolle. Eine Geschäftsführerin sieht dann nur die Daten ihrer Gesellschaft, der Konzern-CFO sieht alles.

Oder ein Einzelhandelunternehmen mit vielen Filialen. Der Filialleiter soll seinen Umsatz, seine Lagerstände und sein Personal sehen. Der Regionalleiter mehrere Filialen, die Zentrale alles. Statt drei verschiedene Reports zu bauen, nutzen wir eine RLS-Struktur mit entsprechenden Rollen.

## Worauf wir achten sollten

RLS bringt auch Herausforderungen mit sich. Ein häufiger Fehler ist, die Filter zu kompliziert zu machen. Wenn wir zu viele Bedingungen in einen DAX-Ausdruck packen, wird der Report langsam und schwer zu warten.

Auch die **Nutzerverwaltung** kann aufwändig werden. Jeder neue Verkäufer muss die richtige Rolle bekommen. Das ist kein technisches, sondern ein organisatorisches Problem — aber es zählt.

Wir sollten auch testen, dass die Filter wirklich greifen. Es ist unsicher, einen Report zu veröffentlichen, ohne vorher zu prüfen, dass ein Nutzer aus Region Süd wirklich nicht die Daten aus Region Nord sieht.

Ein weiterer Punkt: RLS funktioniert in Power BI mit Nutzern, die sich mit ihrer Identität anmelden. Wenn wir externe Gäste einbinden oder embedded Power BI nutzen, brauchen wir andere Ansätze.

## Alternativen zu RLS

Wir sollten prüfen, ob RLS wirklich die beste Lösung ist oder ob es einfachere Wege gibt.

Manchmal reicht es, den Report mit **Standardfiltern** auszustatten und den Nutzer selbst entscheiden zu lassen. Das ist weniger sicher, aber wartungsärmer.

Andere Szenarien können durch **separate Reports** oder **Workspaces** gelöst werden. Wenn die Region Nord ihren Report in einem eigenen Workspace hat und nur die richtigen Personen Zugriff bekommen, ist RLS nicht nötig.

In manchen Fällen ist auch die **Datenbeschaffung** selbst die Lösung: Den Report nur mit den notwendigen Daten füllen, nicht mit allem, was die Datenbank hergibt.

## Fazit: RLS gezielt einsetzen

Row-Level Security ist ein mächtiges Werkzeug für echte Sicherheitsanforderungen. Sie macht Sinn, wenn unterschiedliche Nutzer legitimerweise unterschiedliche Daten brauchen und die Sicherheit wichtig ist.

Wir empfehlen, erst die Business-Anforderung zu klären: Wer muss was sehen? Welche Berechtigung darf es nicht geben? Dann zu prüfen: Kann ich das einfacher lösen? Und erst dann RLS aufzubauen.

Wenn du unsicher bist, ob RLS für deine Lösung sinnvoll ist, oder wenn du eine bestehende RLS-Struktur überprüfen möchtest — wir helfen gerne dabei. Schreib uns über das [Kontaktformular](/kontakt), und wir schauen gemeinsam, was für dein Unternehmen passt.