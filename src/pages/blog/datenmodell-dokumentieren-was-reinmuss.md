---
layout: ../../layouts/BlogPost.astro
title: "Datenmodell dokumentieren: Was rein muss, damit andere damit arbeiten können"
excerpt: "Eine gute Dokumentation macht Datenmodelle wartbar und nutzbar. Wir zeigen, welche Informationen hineingehören und warum sie für das Team entscheidend sind."
date: 2026-06-14
tag: Modelle & Reports
readTime: 5
---

## Das Problem der undokumentierten Datenmodelle

Wir sehen immer wieder die gleiche Situation: Ein Mitarbeiter hat vor Monaten ein Datenmodell aufgebaut. Die Abfragen laufen, die Reports funktionieren — aber niemand außer ihm versteht wirklich, wie es konstruiert ist. Wechselt dieser Mitarbeiter die Abteilung oder das Unternehmen, bleibt das Modell ein Black Box zurück.

Dies ist kein seltenes Problem. In vielen Unternehmen wird Dokumentation als lästige Pflicht wahrgenommen, die man "später" macht — und die später dann nie kommt. Das Ergebnis: Anfragen bleiben offen, Änderungen dauern länger, und neue Nutzer benötigen Wochen, um zu verstehen, welche Tabellen zusammenhängen und wie Berechnungen funktionieren.

Die Lösung liegt nicht darin, hunderte Seiten zu schreiben. Es geht um gezielt platzierte, präzise Informationen, die das Modell verständlich machen.

## Warum Dokumentation jetzt wichtig wird

In kleinen, stabilen Teams kann man noch mit Köpfchen arbeiten — "das weiß ja jeder". Aber sobald mehrere Personen mit einem Modell arbeiten, sobald Reports entstehen, die regelmäßig gepflegt werden müssen, oder sobald das Unternehmen wächst, wird fehlende Dokumentation zum Kostenfaktor.

Ein typischer Fall: Der Geschäftsführer fragt, warum eine bestimmte Kennzahl von 47 % auf 49 % gestiegen ist. Der Analyst, der das Modell aufgebaut hat, ist gerade im Urlaub. Die aktuelle Mitarbeiterin muss Tage investieren, um die Berechnungslogik nachzuvollziehen. Ein Blick in eine gute Dokumentation hätte das Problem in Minuten gelöst.

Dokumentieren ist also nicht Bürokratie — es ist ein Werkzeug, das Zeit spart und Fehler verhindert.

## Was in die Dokumentation gehört

### Der Überblick: Wofür ist dieses Modell da?

Wir empfehlen, oben mit einer klaren Aussage zu beginnen: Was ist der Zweck dieses Modells? Welche Fragen soll es beantworten? Für wen wurde es gebaut?

Ein Beispiel: "Dieses Modell bildet alle Verkaufsvorgänge aus unserem CRM-System ab. Es dient der Erfassung von Angeboten, gewonnenen und verlorenen Abschlüssen sowie der Umsatzprognose für die Geschäftsleitung."

Dieser Satz ist kurz, aber er sagt dem neuen Nutzer sofort, ob er hier richtig ist oder ein anderes Modell suchen sollte.

### Die Datenquellen: Woher kommen die Daten?

Jede Tabelle im Modell sollte mit ihrer Herkunft dokumentiert sein. Kommt sie aus dem ERP-System, aus einer manuellen Excel-Datei, aus einer API, oder ist sie eine berechnete Tabelle?

Ebenso wichtig: Wie oft werden die Daten aktualisiert? Täglich? Wöchentlich? Sind es Rohdaten oder vorgefilterte Auszüge?

Ein Beispiel: "Die Tabelle 'Kundenstamm' wird täglich gegen 6 Uhr morgens aus unserem CRM synchronisiert. Sie enthält nur aktive Kunden mit einer gültigen Lieferadresse. Gelöschte oder anonymisierte Kunden sind ausgenommen."

Solche Details klingen banal, aber sie beantworten echte Fragen, die Nutzer später haben werden.

### Die Struktur: Wie hängen die Tabellen zusammen?

Hier geht es nicht um technische Details von Datentypen, sondern um die Logik. Wir empfehlen, die Beziehungen in Worten zu beschreiben, nicht nur im System zu hinterlegen.

Ein Beispiel: "Jede Verkaufschance ist genau einem Kunden zugeordnet. Ein Kunde kann mehrere Chancen haben. Die Verknüpfung erfolgt über die Kunden-ID, die in beiden Tabellen eindeutig ist."

Falls komplexere Logik vorhanden ist — etwa wenn ein Datensatz über mehrere Tabellen berechnet wird — sollte diese erklärt sein. Nicht als technische Anleitung, sondern als Geschichte: "Wir summieren für jeden Monat alle Verkäufe pro Produktkategorie, filtern Retouren heraus und weisen sie dem Zeitraum der ursprünglichen Rechnung zu, nicht dem Retour-Datum."

### Die Felder: Was bedeuten die Spalten wirklich?

Feldnamen sind oft rätselhaft. Was ist genau die Differenz zwischen 'Netto_Umsatz' und 'Rechnungsbetrag'? Ist 'Status_Code' 1 = offen oder 1 = geschlossen?

Wir sehen, dass viele Modelle von solchen Mehrdeutigkeiten leiden. Die Lösung ist eine schlichte Erklärung je Feld:

Am Beispiel eines Umsatzfeldes: "Netto_Umsatz: Der reine Verkaufspreis ohne Mehrwertsteuer, in Euro. Rabatte sind bereits abgezogen. Versandkosten sind nicht enthalten." Eine oder zwei Sätze, aber sie sparen Missverständnisse.

### Die Berechnungen: Wie entstehen KPIs?

Falls das Modell berechnete Felder oder KPIs enthält, gehört die Formel — in Worten — in die Dokumentation. Nicht als technisches Script, sondern als Erklärung.

Ein Beispiel: "Die Marge wird berechnet als: (Verkaufspreis minus durchschnittliche Herstellungskosten) geteilt durch Verkaufspreis, in Prozent ausgedrückt. Sonderausstattungen und Zubehör sind ausgenommen."

Solch präzise Beschreibung hilft, wenn später jemand in einem Report überprüfen soll, ob die Marge richtig berechnet ist.

### Die Besonderheiten: Was muss ich über dieses Modell wissen?

Jedes Modell hat Besonderheiten. Vielleicht fehlen Daten für bestimmte Zeiträume. Vielleicht gibt es bekannte Unterschiede zu einem anderen System. Vielleicht sind Duplikate manuell bereinigt worden.

Die Dokumentation sollte solche Dinge sammeln. Nicht als Entschuldigung, sondern als Information: "Für Januar 2023 fehlen Lieferdaten, da das System zwei Wochen überhaupt nicht erreichbar war. Die Vergleichszahlen für diesen Zeitraum sind daher ungenau."

Oder: "Die Umsätze in dieser Tabelle weichen von der Finanzbuchhaltung ab, da wir hier nach Lieferdatum buchen, nicht nach Rechnungsdatum."

## Wie man dokumentiert

Die Form ist weniger wichtig als der Inhalt. Ein Word-Dokument, ein Google-Doc, ein Wiki oder sogar eine Textdatei neben dem Modell — alles kann funktionieren. Wichtig ist nur, dass die Dokumentation aktuell bleibt und dass man sie leicht findet.

Wir empfehlen, Dokumentation nicht als separate Aufgabe zu sehen, sondern sie beim Aufbau des Modells zu schreiben. Das dauert nicht länger, und die Gedanken sind noch frisch.

## Der Anfang: Nicht perfekt sein

Manche Teams zögern mit Dokumentation, weil sie denken, sie müsse umfassend und perfekt sein. Das ist nicht wahr. Eine unvollständige Dokumentation, die existiert, ist besser als eine perfekte, die es nie geben wird.

Wir empfehlen, mit dem Allernotigsten zu beginnen: Wozu ist dieses Modell da? Woher kommen die Daten? Wie hängen die Tabellen zusammen? Mit diesen drei Fragen hat man schon einen soliden Anfang.

Alles weitere kann wachsen, wenn neue Fragen auftauchen.

## Fazit

Datenmodelle sind nur dann wertvoll, wenn mehr als eine Person damit arbeiten kann. Das erfordert nicht viel — aber es erfordert diese klare, prägnante Dokumentation. Sie ist kein Luxus, sondern eine Investition in die Funktionsfähigkeit des ganzen Systems.

Wenn Sie gerade dabei sind, ein Modell aufzubauen oder zu erweitern, dokumentieren Sie es von Anfang an. Wenn Sie bereits Modelle haben, die undokumentiert sind, beginnen Sie jetzt damit, das zu ändern — auch wenn Sie mit einem einfachen Überblick starten.

Wir helfen gerne, wenn Sie unsicher sind, wie Sie vorgehen sollen oder wie Sie Ihre bestehenden Modelle strukturiert dokumentieren. [Kontaktieren Sie uns](/kontakt) — wir schauen uns Ihre Situation an.