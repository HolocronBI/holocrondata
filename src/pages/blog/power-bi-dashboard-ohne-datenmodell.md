---
layout: ../../layouts/BlogPost.astro
title: "Warum ein Power BI Dashboard ohne Datenmodell wenig wert ist"
excerpt: "Ein schönes Dashboard ist nicht genug. Ohne ein solides Datenmodell dahinter entstehen Fehler, Verzögerungen und am Ende Entscheidungen auf falscher Grundlage."
date: 2026-06-02
tag: Modelle & Reports
readTime: 5
---

## Das Dashboard ist nicht das Problem — das Modell dahinter ist es

Wir sehen es regelmäßig: Unternehmen investieren Zeit und Ressourcen in ein ansprechendes Power BI Dashboard. Die Visualisierungen sehen gut aus, die Farben passen zur Corporate Identity, und es gibt einen schönen Überblick über die wichtigsten Kennzahlen. Dann kommt die erste Frage von einem Geschäftsführer: "Warum zeigt mir das Dashboard hier 150.000 Euro und der Rechnungen-Export aus unserer Buchhaltung 147.000 Euro?" — und plötzlich wird das Dashboard zur Quelle von Zweifeln statt von Vertrauen.

Das eigentliche Problem liegt nicht in der Visualisierung. Es liegt in dem Datenmodell, das das Dashboard speist. Ein Dashboard ohne ein durchdachtes Datenmodell ist wie ein Haus ohne Fundament — es sieht von außen beeindruckend aus, aber es wird früher oder später einstürzen.

## Was macht ein gutes Datenmodell aus?

Ein Datenmodell ist die Brücke zwischen den Rohdaten aus verschiedenen Quellen und den Erkenntnissen, die wir daraus ableiten. Es sorgt dafür, dass Zahlen konsistent sind, dass Berechnungen korrekt erfolgen und dass die im Dashboard angezeigten Werte auch tatsächlich das abbilden, was sie abbilden sollen.

Wenn ein Datenmodell fehlt oder schwach ist, passieren mehrere Dinge gleichzeitig: Erstens werden Daten aus verschiedenen Systemen (ERP, CRM, Buchhaltung) nicht richtig miteinander verbunden. Ein Umsatzwert lässt sich nicht eindeutig einem Kunden zuordnen. Zweitens werden Berechnungen mehrfach und unterschiedlich durchgeführt — einmal im Dashboard selbst, einmal in Excel, einmal in der Buchhaltung. Jeder rechnet anders, und jeder denkt, er hat recht. Drittens wird es extrem aufwändig, die Dashboard-Logik zu pflegen und zu erweitern, weil niemand genau weiß, wie die Berechnung zustande kam.

## Das symptomatische Problem: "Das Dashboard sagt was anderes als die Realität"

Ein häufiges Szenario: Ein Geschäftsführer schaut auf ein Dashboard und sieht eine Gesamtumsatzsteigerung um 8 Prozent. Der Verkaufsleiter sagt: "Das ist nicht richtig, ich sehe in meinem System eine Steigerung von nur 3 Prozent." Wer hat recht? Im schlimmsten Fall wissen es beide nicht genau. Vielleicht werden in dem einen System Retouren anders behandelt als im anderen. Vielleicht ist ein Datenschnitt zeitlich versetzt. Vielleicht ist eine Währungsumrechnung falsch implementiert.

Wenn wir kein solides Datenmodell haben, das diese Unterschiede explizit macht und auflöst, entstehen daraus Konflikte, Zweifeln und — am schlimmsten — falsche strategische Entscheidungen. Ein Geschäftsführer, der dem Dashboard nicht vertraut, nutzt es nicht. Es wird zur teuren Dekoration.

## Warum die richtige Datenstruktur so wichtig ist

Ein gutes Datenmodell folgt bewährten Prinzipien, die wir aus Jahrzehnten von Datenbank-Design kennen. Es trennt Dimensionen (das "Was" — Produkte, Kunden, Zeit) von Fakten (das "Wieviel" — Umsatz, Menge, Kosten). Es stellt sicher, dass keine Daten redundant sind, dass Beziehungen zwischen Tabellen klar definiert sind, und dass jede Metrik ein Zuhause hat — einen Ort, wo sie berechnet wird und von wo aus alle Dashboards sie ziehen.

Wir sehen in vielen mittelständischen Unternehmen ein anderes Muster: Die Daten werden aus den Quellsystemen gezogen, in Power BI irgendwie zusammengeklebt, und dann werden die Berechnungen direkt im Dashboard-Layer vorgenommen. Das funktioniert für zwei oder drei Visualisierungen, wird aber schnell zum Chaos, wenn mehrere Reports und mehrere Nutzer darauf zugreifen sollen.

Ein sauberes Modell bedeutet: Es gibt eine einzige Stelle, wo Umsatz berechnet wird. Es gibt Dokumentation, warum Retouren eine negative Menge und kein negativer Umsatz sind. Es gibt eine Audit-Trail, um nachzuvollziehen, warum die März-Zahlen später korrigiert wurden. Es gibt Klarheit.

## Der finanzielle Hebel eines guten Modells

Es mag aufwändig klingen, erst ein Datenmodell zu bauen, bevor man das erste Dashboard zeichnet. Aber wir sehen immer wieder: Ein Unternehmen, das am Anfang zwei Wochen mehr Zeit investiert, um ein solides Modell zu schaffen, spart später Wochen ein, wenn die nächsten drei oder vier Reports dazukommen. Weil alles auf der gleichen Grundlage aufbaut. Weil Änderungen durchzuführen keine Detektiv-Arbeit mehr ist. Weil ein neuer Analyst in das Projekt einsteigen kann, ohne erst drei Tage damit zu verbringen herauszufinden, wie etwas berechnet wurde.

Auch die Wartung wird einfacher. Ein Problem mit den Umsatzzahlen? Wir wissen genau, wo im Modell das liegt. Eine neue Geschäftseinheit kommt hinzu? Wir erweitern das Modell an einer Stelle, nicht in jedem einzelnen Dashboard.

## Wo fangen wir an?

Wenn bereits ein Dashboard ohne Modell vorhanden ist, liegt der erste Schritt darin, die bestehende Logik zu dokumentieren und zu vereinheitlichen. Das ist unangenehm, aber notwendig. Danach wird schrittweise ein echtes Datenmodell aufgebaut — nicht alles auf einmal, sondern priorisiert nach den kritischsten Metriken.

Wir empfehlen, mit einer einfachen Frage zu starten: Welche drei Kennzahlen sind für die Geschäftsführung am wichtigsten? Mit diesen fangen wir an, ein Modell zu bauen, das vertrauenswürdig ist. Dann wächst das Modell mit den Anforderungen des Unternehmens mit.

## Fazit: Das Fundament zuerst

Ein Dashboard ist ein Fenster. Das Datenmodell ist das Haus. Wenn wir nur das Fenster schön machen und das Haus vernachlässigen, werden die Risse in der Fassade irgendwann sichtbar. Ein solides Datenmodell kostet am Anfang etwas mehr Zeit. Es spart aber erheblich an Schmerz, Zweifeln und Fehlinvestitionen später.

Wenn Sie sich unsicher sind, ob Ihr bestehendes Dashboard auf einem tragfähigen Modell steht, schauen Sie genau hin: Können Sie erklären, wie jede Zahl zustande kommt? Stimmen alle Systeme überein? Können Sie schnell ein neuer Report hinzufügen? Wenn die Antwort auf diese Fragen nein ist, wird es Zeit, das Fundament zu überprüfen.

Wir helfen gerne dabei, Datenmodelle zu evaluieren und zu optimieren. Wenn Sie darüber sprechen möchten, wie das Ihrem Unternehmen helfen könnte, nehmen Sie [Kontakt mit uns auf](/kontakt).