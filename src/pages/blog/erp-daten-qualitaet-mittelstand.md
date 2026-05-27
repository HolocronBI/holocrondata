---
layout: ../../layouts/BlogPost.astro
title: "Datensalat im ERP: Warum Ihre Verkaufszahlen nicht stimmen"
excerpt: "ERP-Systeme sammeln täglich Datenmengen. Doch viele Mittelständler arbeiten mit fehlerhaften, inkonsistenten Daten. Wir zeigen, wo die Probleme entstehen und wie Sie sie beheben."
date: 2026-05-27
tag: Datenqualität
readTime: 6
---

## Das Problem ist real

In den letzten drei Jahren haben wir bei Holocron Data mit über 40 Unternehmen des Mittelstands zusammengearbeitet. Ein Muster wiederholt sich immer wieder: Die Geschäftsführung fragt nach Verkaufszahlen für Q3, das Controlling antwortet mit drei verschiedenen Ergebnissen – je nachdem, welche Quelle man anzapft.

Das ERP-System sagt 487.000 Euro Umsatz. Der Excel-Export aus dem Verkaufs-CRM zeigt 512.000 Euro. Und in dem alten Access-Bericht von der Kollegin aus dem Vertrieb sind es 501.000 Euro. Welche Zahl stimmt? Niemand weiß es genau.

Das ist kein Einzelfall. Das ist Normalität im deutschen Mittelstand.

## Wo entstehen die Fehler?

Die Probleme beginnen nicht im BI-System oder im Reporting. Sie entstehen dort, wo die Daten täglich eingegeben werden – im ERP selbst.

### Uneinheitliche Kontierung

Ein klassisches Beispiel: Der Vertriebsmitarbeiter erfasst einen Großauftrag. Statt ihn in ein Feld zu schreiben, verteilt er die Position auf zwei Aufträge – einmal für den Hauptkunden, einmal für die Niederlassung. Im System steht: zwei Transaktionen statt eine. Bei der Konsolidierung verdoppelt sich der Umsatz einzelner Positionen.

### Manuelle Datenübergaben zwischen Systemen

Viele Unternehmen arbeiten noch so: ERP → Excel-Export → Manuelle Anpassungen → Power BI. An jeder Stelle entstehen Fehler. Eine Spalte wird falsch sortiert. Ein Wert wird vergessen. Eine Formel berechnet falsch.

Der Klassiker: Der Kollege exportiert die Kundenliste jeden Freitag um 16:30 Uhr – nach dem eigenen Zeitstempel, nicht nach dem aktuellen Stand des ERP. Wer Montag morgen einen Report braucht, arbeitet mit Freitag-Nachmittag-Daten. Und wenn der Kollege im Urlaub ist? Dann fehlt der Export ganz.

### Fehlende oder falsche Master-Daten

Kunden, Produkte, Kostenstellen – wenn diese Stammdaten fehlerhaft sind, wird jeder Report fehlerhaft. Ein Beispiel aus der Praxis:

Ein Handelsunternehmen konnte nicht nachvollziehen, warum die Gewinnmarge nach Produktkategorie so schwankte. Bei der Analyse stellte sich heraus: Die Produktkategorien waren teilweise manuell in Excel gepflegt, teilweise kamen sie aus dem ERP. Und die Zuordnungen stimmten nicht überein. Produkt XYZ war in der einen Liste Category A, in der anderen Category B. Die Reports zeigten deshalb völlig unterschiedliche Margen pro Kategorie.

### Keine Validierungsregeln

Manche Unternehmen erlauben es ihren Sachbearbeitern, Preise oder Mengen im Nachhinein zu verändern – ohne dass jemand das sieht. Dann tauchen plötzlich negative Werte auf oder Rabatte, die keiner nachvollziehen kann.

## Was kostet uns das konkret?

Schlechte Datenqualität ist nicht nur ärgerlich. Sie kostet Geld.

**Falsche Entscheidungen:** Der Geschäftsführer sieht, dass Region Süd die beste Rentabilität hat, und verstärkt dort den Vertrieb. Aber die Daten waren fehlerhaft – die echte Rentabilität ist mittelmäßig. Die Investition bringt nicht den erwarteten ROI.

**Zeitverschwendung:** Das Controlling braucht jeden Monat zwei Tage, um die Rohdaten zu säubern, bevor es mit der Analyse anfangen kann. Jährlich sind das 20-30 Arbeitstage für die Datenaufbereitung statt für echte Auswertungen.

**Verlorenes Vertrauen:** Wenn die Zahlen nicht stimmen, verlieren interne Nutzer das Vertrauen in die Reports. Dann greifen alle wieder auf ihre eigenen Excel-Listen zurück – und die Silos wachsen.

## Wie behebt man das?

### Schritt 1: Bestandsaufnahme

Zuerst muss klar sein: Welche Fehler existieren überhaupt? Das klingt einfach, ist aber oft das Problem – Unternehmen wissen gar nicht, wie schlecht ihre Daten sind.

Ein Audit hilft: Wir nehmen die Rohdaten aus Ihrem ERP, analysieren sie auf Konsistenz, Vollständigkeit und Plausibilität. Dabei nutzen wir konkrete Tests:

- Gibt es doppelte Datensätze?
- Fehlen wichtige Felder bei einzelnen Records?
- Sind Wertebereichs realistisch (z.B. negative Mengen)?
- Stimmen Fremdschlüssel überein (z.B. existiert die Kundennummer auch in der Kundentabelle)?

### Schritt 2: Priorisierung

Nicht alle Fehler sind gleich kritisch. Ein fehlender Kundenname ist weniger schlimm als ein falsch erfasster Verkaufspreis. Wir priorisieren:

- Was schadet dem Report am meisten?
- Was würde die größte Investition in der Behebung kosten?
- Was kann schnell gefixt werden?

### Schritt 3: Aufräumen

Jetzt säubern wir die Daten. Das passiert in mehreren Ebenen:

**Im ERP selbst:** Doppelte Kundensätze mergen. Fehlende Master-Daten nachtragen. Wertetabellen auf Konsistenz prüfen.

**Bei der Übergabe:** Wenn Daten zwischen Systemen fließen, braucht es Validierungsregeln. Nicht einfach exportieren und importieren. Sondern: Importieren, prüfen, Fehlerberichte generieren, manuell korrigieren, erst dann freigeben.

**Im Datenmodell:** Power BI oder Ihr BI-System kann bereits Fehler abfangen – mit Datentyp-Definitionen, berechneten Spalten, die auf Plausibilität prüfen.

### Schritt 4: Prozesse etablieren

Daten werden nicht einmalig bereinigt – sie verderben wieder. Deshalb braucht es Standards:

- **Erfassungsregeln:** Wer erfasst welche Daten wie? Pflichtfelder? Dropdown-Listen statt Freitextfelder?
- **Regelmäßige Audits:** Einmal pro Quartal prüfen, ob neue Fehler entstanden sind.
- **Verantwortlichkeiten:** Wer ist der Owner der Master-Daten? Wer genehmigt Änderungen?

## Ein konkretes Beispiel aus der Praxis

Ein metallverarbeitendes Unternehmen mit 120 Mitarbeitern konnte ihre Projekte nicht richtig bewerten. Zu manchen Projekten gab es Einträge mit negativen Stunden, zu anderen Einträge mit extrem hohen Werten (über 100 Stunden an einem Tag). Der Projektleiter erfasste Korrektionen als separate Einträge, statt die Original-Erfassung zu korrigieren.

Wir haben:

1. **Analysiert:** Mit Datenbankqueries alle Anomalien identifiziert. Ergebnis: 18% aller Stundenerfassungen waren Duplikate oder Korrekturen, die hätten zusammengefasst werden müssen.

2. **Bereinigt:** Duplikate zusammengeführt. Alle negativen Werte eliminiert und die echten Fehlstunden entsprechend korrigiert.

3. **Prozess etabliert:** Ein Prüfscript, das monatlich läuft und Anomalien markiert. Der Projektleiter bekommt eine Warnung, wenn eine Stundenerfassung außerhalb des normalen Bereichs liegt.

4. **Reporting aufgebaut:** Danach konnten wir echte Projektrentabilität messen – und die Erkenntnisse waren wertvoll: Zwei Projekte liefen mit Minus, ein ganzer Kundenbereich war deutlich weniger profitabel als gedacht.

## Warum macht man das nicht gleich richtig?

Eine faire Frage. Die Antwort: Viele Unternehmen wissen nicht, dass es ein Problem gibt. Das ERP läuft seit Jahren. Die Reports sehen aus. Dass die Zahlen nicht stimmen, bemerkt man erst, wenn man anfängt zu graben.

Und dann: Datenbereinigung ist nicht sexy. Sie ist nicht sichtbar. Man sieht keinen neuen Report. Aber Sie sehen: weniger Fehler, schneller Reporting, bessere Entscheidungen.

## Fazit

Saubere Daten sind die Grundlage von allem – von Controlling, von Entscheidungsfindung, von Vertrauen in die Zahlen. Bevor Sie in ein BI-Tool investieren, lohnt es sich, eine ehrliche Bestandsaufnahme zu machen. 

Die Chance ist groß, dass Sie deutlich bessere Zahlen sehen werden, wenn Sie die Daten aufräumen. Und oft genug sind dann alle geplanten Investitionen gar nicht mehr notwendig – weil die richtigen Daten völlig neue Einsichten liefern.

Brauchen Sie eine Analyse? Wir machen eine Datenbewertung in zwei Tagen. Danach wissen Sie, wo Sie wirklich stehen.