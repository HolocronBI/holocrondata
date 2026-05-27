---
layout: ../../layouts/BlogPost.astro
title: "Wenn Quelldaten fehlerhaft sind: Wie man mit dem Problem umgeht ohne die Quelle zu ändern"
excerpt: "Fehlerhafte Daten in der Quelle sind ein klassisches Problem. Wir zeigen, wie Sie Ihre Datenqualität verbessern, ohne das Quellsystem anzupassen."
date: 2026-05-27
tag: Daten bereinigen
readTime: 5
---

## Das Problem kennen viele

Wir sehen es immer wieder: Die Vertriebsleitung meldet fehlerhafte Umsatzzahlen, die Buchhaltung kämpft mit inkonsistenten Kontonummern, und im Lager sind Bestandszahlen regelmäßig um 5–10 % daneben. Der Grund liegt nicht selten in den Quelldaten.

Zugleich ist die Realität im Mittelstand oft diese: Die Systeme, aus denen diese Daten kommen, gehören nicht uns. Das ERP-System läuft beim Hauptlieferanten. Das alte Warenwirtschaftssystem wurde vor Jahren implementiert und Änderungen dort kosten Zeit und Geld – oder sind technisch gar nicht möglich. Die Datenbank mit den Kundenstammdaten wird von der Zentrale gepflegt, und wir haben keinen direkten Zugriff.

In solchen Fällen ist es verlockend, resigniert zu sagen: "Wir können nichts machen, solange die Quelle nicht bereinigt wird."

Wir sagen: Das ist nicht richtig. Es gibt mehrere praktische Wege, mit fehlerhaften Quelldaten zu arbeiten – ohne die Quelle selbst zu ändern.

## Warum die Quelle oft nicht geändert werden kann

Bevor wir in die Lösungen gehen, lohnt sich ein kurzer Blick auf die Gründe:

**Abhängigkeiten:** Andere Abteilungen oder sogar andere Unternehmen arbeiten mit dieser Quelle. Eine Änderung dort könnte unerwartet Konsequenzen haben.

**Technische Hürden:** Legacy-Systeme lassen sich manchmal nur schwer modifizieren. Ein Update kostet schnell mehr als erwartet.

**Ownership:** Ihr Unternehmen kontrolliert das Quellsystem nicht – es sitzt bei einem Partner oder einer Zentrale.

**Keine Kapazität:** Der Datenverantwortliche hat bereits 20 andere Projekte.

Alle diese Szenarien sind real, und sie sind kein Grund, mit schlechten Daten zu leben.

## Strategie 1: Validierung beim Import

Wir beginnen dort, wo die Daten unser System betreten: beim Import.

Anstatt fehlerhafte Datensätze einfach zu übernehmen, etablieren wir klare Validierungsregeln. Das kann so aussehen:

**Beispiel:** Der Kundenstammdaten-Import zeigt, dass bei 200 Kunden die Kundennummer leer ist.

Statt diese Datensätze zu importieren, erstellen wir eine Validierungsregel: Kundennummern sind Pflichtfelder. Fehlende Werte landen nicht in der Produktionsdatenbank, sondern in einer Quarantäne-Tabelle. Diese wird täglich gecheckt, und ein Bericht geht an die Buchhaltung: "Diese 200 Kunden können nicht verarbeitet werden."

Das erzeugt Druck auf der richtigen Seite – bei der Quelle. Zugleich sind unsere Daten sauber.

**Konkrete Implementierung:**
- Jeder Import hat Eingabeprüfungen (Regex-Muster, Bereichsprüfungen, Duplikat-Checks)
- Fehlerhafte Sätze werden protokolliert, nicht gelöscht
- Ein Eskalations-Workflow informiert den Owner der Quelle
- Versionskontrolle: Wir speichern, welche Regeln wann aktiv waren

## Strategie 2: Daten-Mapping und Transformation

Manche Fehler sind kein Fehler – sie sind ein Format-Problem.

**Beispiel:** Das Quellsystem speichert Daten regional unterschiedlich. In Süddeutschland nutzt man Kommas als Dezimaltrennzeichen, in Norddeutschland Punkte. Beim Import landen Zahlenwerte als Text. Die Finanzanalyse funktioniert nicht.

Wir bauen eine Transformations-Schicht ein. Diese Schicht:
- Normalisiert Dezimaltrennzeichen
- Vereinheitlicht Datumsformate (z. B. DD.MM.YYYY zu YYYY-MM-DD)
- Bereinigt Whitespace und Sonderzeichen
- Mapped fehlerhafte Kategorienwerte auf korrekte Werte

**Praktisches Beispiel aus der Lagerwirtschaft:**

Ein Kunde hatte in der Quelle Bestandsstatus wie "in Lager", "IN LAGER", "available", "verfügbar". Wir definieren einen Mapping-Prozess:

```
IN LAGER → VERFÜGBAR
in lager → VERFÜGBAR
available → VERFÜGBAR
verfügbar → VERFÜGBAR
```

Fehlerhafte oder unbekannte Werte landen wieder in der Quarantäne, werden aber nicht blockiert – sie erhalten einen Standard-Wert, bis die Quelle gefixt ist.

## Strategie 3: Duplizierung und Deduplizierung

Viele Quelldaten-Fehler entstehen durch Duplikate. Ein Kunde wird doppelt erfasst, weil die Datenpflege fragmentiert ist.

Wir können diese auf unserer Seite erkennen und konsolidieren:

**Deduplizierungs-Logik:**
- Fuzzy Matching: Ähnliche Namen werden erkannt (Smith / Smyth)
- Kontextuelle Keys: Kombination aus Name, Ort, Branche
- Auditierbarkeit: Jeder Merge wird protokolliert, sodass die Quelle später nachbessern kann

Der Vorteil: Wir arbeiten mit konsistenten Daten, ohne die Quelle zu "zwingen".

## Strategie 4: Master Data Management (MDM)

Für kritische Daten empfehlen wir eine zentrale Verwaltungsschicht – nicht als "Umweg um die Quelle", sondern als "Daten-Schiedsrichter".

Wir beobachten es häufig: Es gibt mehrere Quellen für ähnliche Daten (Kundendaten kommen von der Zentrale UND vom regionalen CRM). Diese konkurrieren, widersprechen sich.

Mit MDM:
- Definieren wir eine Single Source of Truth für Kundendaten
- Alle eingehenden Daten werden gegen diese Quelle abgeglichen
- Konflikte werden nach klaren Regeln gelöst (z. B. "Zentrale schlägt CRM bei Adressänderungen")
- Noch nicht korrekte Quelldaten beeinflussen unsere Analysen nicht

## Strategie 5: Prozess-basierte Kompensation

Manche Fehler lassen sich nur prozessual beheben.

**Beispiel:** Ein Unternehmen erhielt jeden Monat Verkaufsdaten, bei denen Provisionen für Vertriebsmitarbeiter fehlerhaft berechnet waren. Die Quelle (CRM des Hauptbüros) ließ sich nicht ändern.

Lösung: Ein monatliches manuelles Review-Meeting, 2 Stunden, Vertrieb + BI-Team. Hier wurden offensichtliche Fehler identifiziert und Korrekturen in einer lokalen Tabelle dokumentiert. Diese floss in die Analysen ein, der Fehler wurde aber auch zurück an die Quelle berichtet.

Das ist nicht ideal, aber es funktioniert – und es schafft Druck, die Quelle zu beheben.

## Was Sie konkret tun können – heute noch

Wir empfehlen, diese Schritte parallel zu gehen:

1. **Datenqualitäts-Audit:** Welche Fehler sehen wir in den eingehenden Daten? (Typischerweise: 5–15 % fehlerhafte oder fehlende Werte)

2. **Priorisierung:** Welche Fehler kosten uns am meisten? (Falsche Umsatzzahlen schmerzen mehr als falsche Adressen.)

3. **Validierungsregeln schreiben:** Für die Top 3–5 Fehlertypen klare Prüfungen etablieren

4. **Reporting aufsetzen:** Tägliche oder wöchentliche Übersicht der Validierungsfehler, adressiert an den Data Owner der Quelle

5. **Parallel: Quellveränderung initiieren:** Mit all diesen Daten im Rücken ist es leichter, die Quelle selbst zu beheben.

## Fazit

Fehlerhafte Quelldaten sind frustrierend – aber sie sind keine Entschuldigung, mit schlechten Daten zu arbeiten. Mit Validierung, Transformation, Deduplication und klarem Reporting können wir unsere Datenqualität deutlich verbessern.

Das erspart nicht nur schlechte Analysen. Es erzeugt auch den richtigen Druck, um die Quelle selbst zu beheben – langfristig die beste Lösung.

Wenn Sie in dieser Situation stecken und unsicher sind, wie Sie anfangen sollen, [schauen Sie sich unsere Beratung an](/kontakt). Wir helfen Ihnen, einen realistische Plan zu entwickeln, der zu Ihrer Infrastruktur passt.