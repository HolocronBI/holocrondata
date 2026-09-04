---
layout: ../../layouts/BlogPost.astro
title: "Wenn Quelldaten fehlerhaft sind: Wie man mit dem Problem umgeht ohne die Quelle zu ändern"
excerpt: "Fehlerhafte Quelldaten sind ein häufiges Problem in der Unternehmensrealität. Wir zeigen, wie man damit umgeht, ohne die Quelle selbst ändern zu müssen."
date: 2026-09-04
tag: Daten bereinigen
readTime: 5
---

# Wenn Quelldaten fehlerhaft sind: Wie man mit dem Problem umgeht ohne die Quelle zu ändern

In vielen Unternehmen entsteht eine frustrierende Situation: Die Daten, auf die man sich für Analysen und Entscheidungen verlässt, sind fehlerhaft. Aber gleichzeitig lässt sich die Quelle dieser Daten nicht einfach ändern. Das kann verschiedene Gründe haben – eine veraltete ERP-System, externe Datenquellen, die man nicht kontrolliert, oder Prozesse, die so gewachsen sind, dass eine Änderung zu komplex wäre.

Die gute Nachricht: Man muss nicht bei fehlerhaften Daten bleiben und auch nicht die Quelle neu bauen. Es gibt praktische Wege, damit umzugehen.

## Das Problem erkennen: Warum Quelldaten oft fehlerhaft sind

Wir sehen regelmäßig, dass Fehler in Quelldaten nicht aus Böswilligkeit entstehen, sondern aus der Realität von Geschäftsprozessen. Ein Vertriebsmitarbeiter gibt Kundeneinformationen falsch ein, weil der Prozess zu komplex ist. Ein System speichert Datumsangaben in verschiedenen Formaten, weil es über Jahre hinweg erweitert wurde. Ein Lagersystem zählt Bestände nicht korrekt, weil die physische Realität nicht mit der digitalen Erfassung synchronisiert wird.

Das Problem dabei: Diese Fehler wirken sich kaskadierend aus. Schlechte Eingangsdaten führen zu falschen Berechnungen, falschen Analysen und letztlich zu Entscheidungen auf Basis von Illusion statt Realität.

Und genau hier wird es oft zum Dilemma: Man weiß, dass die Quelle das Problem ist, aber die Quelle zu ändern ist nicht machbar – sei es aus technischen, organisatorischen oder wirtschaftlichen Gründen.

## Der praktische Weg: Transformation statt Veränderung der Quelle

Wir empfehlen, das Problem nicht bei der Quelle zu bekämpfen, sondern auf dem Weg von der Quelle zu den Analysen und Dashboards. Diese Zwischenebene ist der richtige Ort, um mit fehlerhaften Daten umzugehen.

Stellen wir uns ein konkretes Beispiel vor: Ein ERP-System speichert Kundennamen teilweise mit Umlauten, teilweise ohne. Ein Kunde heißt sowohl "Müller" als auch "Mueller" und "Muller" in der Datenbank. Das ist in der Quelle nicht zu beheben, ohne das ganze System zu überarbeiten. Aber auf dem Weg zu den Analysen können wir diese Varianten systematisch vereinheitlichen.

Oder ein anderes Szenario: Preisdaten kommen aus einem Legacy-System, das in einem veralteten Format vorliegt – manche Einträge haben Dezimaltrennzeichen, manche nicht. Wieder: In der Quelle ist das schwer zu reparieren, aber in einer Transformationsschicht können wir diese Formatierungsfehler bereinigen, bevor die Daten in ein modernes System fließen.

## Welche Ansätze funktionieren

Wir sehen mehrere Strategien, die sich in der Praxis bewähren:

**Validierungsregeln etablieren.** Das bedeutet, dass wir definieren, welche Daten gültig sind und welche nicht. Ein Kundname darf nicht leer sein. Ein Datum muss ein realistisches Format haben. Ein Preis darf nicht negativ sein. Diese Regeln wenden wir systematisch an und kennzeichnen Daten, die diese Regeln nicht erfüllen. So haben wir Transparenz darüber, wie viel fehlerhaft ist – und das ist oft der erste Schritt zur Verbesserung.

**Mapping und Transformation.** Viele Fehler entstehen aus Formatierungsunstimmigkeiten. Wir können diese in einer Transformationslogik vereinheitlichen, ohne die Quelle zu ändern. Das funktioniert bei Datumsformaten, Währungen, Namenskonventionen, Dezimaltrennzeichen und vielem mehr.

**Referenzdaten als Korrektiv.** Manchmal helfen externe Referenzdaten. Wenn beispielsweise Länderkürzel fehlerhaft sind, können wir eine Liste mit gültigen Länderkürzeln nutzen und damit die Fehler korrigieren oder identifizieren.

**Logische Konsistenzprüfungen.** Manche Fehler zeigen sich erst im Zusammenhang mehrerer Felder. Ein Geschäftsjahr mit Monatswerten, die nicht zu den Jahreszahlen passen. Zwei Datumsfelder, die logisch nicht konsistent sind. Solche Fehler können wir systematisch aufdecken.

**Archivierung und Nachverfolgung.** Kritisch ist auch, dass wir verstehen, wo Fehler entstehen. Das bedeutet, wir speichern nicht nur die bereinigten Daten, sondern auch, welche Transformationen wir angewendet haben. So sehen wir auf einen Blick: Diese Kundengruppe hatte zu 15 Prozent Formatierungsfehler, jene nur zu 2 Prozent. Das hilft auch bei der späteren Prioritätensetzung, wo man die Quelle wirklich verbessern sollte.

## Das Paradoxe: Mehr Transparenz führt zu mehr Verbesserungen

Ein interessanter Nebeneffekt: Wenn wir anfangen, systematisch Fehler zu identifizieren und zu transformieren, entsteht oft selbst der Druck in der Organisation, die Quelle langfristig zu verbessern. Nicht weil es technisch erzwungen wird, sondern weil die Geschäftsverantwortlichen plötzlich sehen, wie viele Fehler in ihren Quelldaten sind. Das schafft Motivation.

Manche Organisationen nutzen diese Phase des systematischen Transformierens sogar als Übergangslösung: Während langfristig an der Quelle verbessert wird, funktioniert das Geschäft schon mit deutlich besseren Daten.

## Worauf wir bei solchen Lösungen achten

Wir empfehlen, dabei einige Grundprinzipien zu beachten:

Erstens: Dokumentation. Jede Transformation muss nachvollziehbar sein. Wenn Daten geändert werden, muss später klar sein, warum und wie.

Zweitens: Vorsicht vor zu aggressiven Transformationen. Es ist verlockend, jedes Fehler einfach "weg zu bereinigen". Aber manchmal sind diese "Fehler" tatsächlich korrekt – ein Kunde heißt wirklich "Mueller" und "Müller" im echten Leben. Zu aggressive Vereinheitlichung führt zu neuen Problemen.

Drittens: Einbindung der Fachexperten. Die Menschen, die die Daten täglich nutzen, wissen oft, welche Fehler kritisch sind und welche nicht. Diese Perspektive ist unverzichtbar.

Viertens: Kontinuierlichkeit. Datenbereinigung ist kein One-Time-Projekt. Neue Fehler entstehen ständig. Das System muss so gestaltet sein, dass es laufend läuft, nicht nur einmalig.

## Nächste Schritte

Wenn ihr in dieser Situation seid – fehlerhafte Quellen, die nicht veränderbar sind – kann es sinnvoll sein, erst einmal zu inventarisieren: Wo genau sind die Fehler? Wie kritisch sind sie? Welche Transformationen würden den größten Effekt haben?

Das ist oft eine Frage, bei der ein strukturierter Blick von außen hilft. Wir unterstützen gerne dabei, solche Lösungen zu entwerfen und umzusetzen.

Wenn ihr das Thema vertiefen wollt oder konkrete Fragen zu eurem Setup habt – [schreibt uns gerne an](/kontakt). Wir helfen euch, einen praktischen Weg zu finden, wie ihr trotz schwieriger Ausgangsbedingungen mit besseren Daten arbeiten könnt.