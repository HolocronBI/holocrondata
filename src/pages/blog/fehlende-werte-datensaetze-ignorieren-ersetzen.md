---
layout: ../../layouts/BlogPost.astro
title: "Fehlende Werte in Datensaetzen: Ignorieren, ersetzen oder kennzeichnen?"
excerpt: "Lückenhafte Daten sind in jedem Unternehmen ein Problem. Wir zeigen, welche Strategien wirklich funktionieren und wann welcher Ansatz sinnvoll ist."
date: 2026-11-25
tag: Daten bereinigen
readTime: 5
---

## Das Problem der fehlenden Werte

In der Realität jedes Unternehmens sieht es so aus: Kunden geben nicht alle Informationen ein, Systeme fallen aus, Datenüberträge sind unvollständig. Der Kundenstamm hat Lücken bei Telefonnummern, in der Verkaufsdatenbank fehlen Preise, im Bestellprotokoll sind Lieferdaten nicht erfasst. Diese fehlenden Werte sind nicht einfach ein kosmetisches Problem — sie beeinflussen direkt, wie verlässlich unsere späteren Analysen sind.

Wir müssen uns früh die Frage stellen: Was tun wir mit diesen Lücken? Die Entscheidung ist nicht trivial und hängt stark vom Kontext ab. Eine pauschale Antwort führt zu falschen Schlüssen und schlechten Geschäftsentscheidungen.

## Strategie 1: Fehlende Werte ignorieren

Ignorieren klingt nach Faulheit, ist aber manchmal die richtige Antwort. Wenn wir einen Datensatz analysieren und einige wenige Zeilen haben Lücken, können wir diese Zeilen einfach aus der Analyse ausschließen. Das funktioniert besonders gut bei:

- Großen Datensätzen, bei denen der Ausfall einzelner Datensätze keine Rolle spielt
- Zufälligen Lücken, die kein Muster zeigen
- Situationen, bei denen die fehlenden Werte nicht systematisch mit dem zu analysierenden Phänomen verbunden sind

Stellen wir uns vor: Ein Unternehmen analysiert die Korrelation zwischen Kundensegment und Kaufbetrag. Es hat 10.000 Transaktionen, und bei 50 fehlt das Kundensegment. Diese 50 Zeilen einfach wegzulassen ist völlig angemessen — der Datenverlust ist minimal, und wir vermeiden, unsere Analyse durch Spekulationen zu verzerren.

Aber hier beginnt die Komplexität: Wenn die fehlenden Werte nicht zufällig sind, sondern ein Muster zeigen, ist das Ignorieren ein Fehler. Wenn beispielsweise in einer Branche grundsätzlich weniger Firmendaten erfasst werden, aber das Unternehmen diese Branche gezielt analysiert, dann verlieren wir Informationen, die wir brauchten.

## Strategie 2: Fehlende Werte ersetzen

Ersetzen, oder technisch "Imputation", bedeutet, für fehlende Werte Schätzwerte einzusetzen. Das ist attraktiv, weil wir keinen Datensatz verlieren und alle Analysen auf vollständigen Daten arbeiten können. Aber auch hier gibt es verschiedene Wege.

Die einfachste Variante ist der Durchschnittswert oder Median: Wenn der Kaufbetrag fehlt, nehmen wir einfach den Durchschnitt aller anderen Kaufbeträge. Das ist schnell, aber nicht sehr intelligent. Wir würden jeden fehlenden Kaufbetrag als 1.250 Euro ansetzen — völlig unabhängig davon, ob es ein Premium-Kunde oder ein Budget-Kunde ist.

Besser ist es, wenn wir kontextsensitiv ersetzen. Ein Unternehmen hat Kundendaten mit fehlenden Altersangaben. Statt den globalen Durchschnitt zu nehmen, können wir nach ähnlichen Kunden schauen: Wenn dieser Kunde zum Segment "Junge Fachkräfte" gehört, nehmen wir den Durchschnitt aus dieser Gruppe. Das ist realistischer.

Es gibt auch statistische Verfahren, die komplexer arbeiten. Sie schauen sich an, welche anderen Variablen vorhanden sind und berechnen auf Basis dieser Muster einen wahrscheinlichen Wert. Das klingt gut, aber auch hier müssen wir uns bewusst sein: Wir erfinden Daten. Und erfundene Daten können uns in die Irre führen, besonders wenn wir mit ihnen später Vorhersagen treffen.

## Strategie 3: Fehlende Werte kennzeichnen

Die dritte Option ist weniger bekannt, aber oft die sicherste: Wir erkennen an, dass der Wert fehlt, und markieren das. Statt den Wert wegzulassen oder zu erfinden, erstellen wir eine neue Kategorie oder ein neues Flag: "Alter unbekannt". Das klingt nach Datenverschmutzung, aber es ist tatsächlich ehrlich.

Stellen wir uns vor, wir analysieren Kaufmuster nach Altersgruppen. Es gibt Kunden mit bekanntem Alter, Kunden mit Altersschätzung und Kunden mit völlig unbekanntem Alter. Wenn wir diese drei Gruppen trennen analysieren, sehen wir möglicherweise ein Muster: Die Kunden mit unbekanntem Alter verhalten sich völlig anders. Das könnte bedeuten, dass sie aus einem anderen Vertriebskanal kommen oder dass die fehlende Information selbst eine Information ist.

In Regresionsmodellen oder Klassifikationsverfahren funktioniert das so: Wir fügen eine neue Spalte ein, die anzeigt: "Hier war ein Wert fehlend." Das ermöglicht dem Modell, diesen Unterschied zu lernen. Manche fehlende Werte sind zufällig, aber manche sind systematisch, und das zu ignorieren ist gefährlich.

## Wie wir entscheiden

Welche der drei Strategien ist die richtige? Das kommt auf mehrere Faktoren an:

Erstens: Wie viele Werte fehlen? Wenn bei 95 Prozent der Datensätze die Information vorhanden ist, aber bei 5 Prozent nicht, können wir einfach ignorieren. Wenn bei 30 Prozent etwas fehlt, brauchen wir einen besseren Plan.

Zweitens: Sind die fehlenden Werte zufällig oder systematisch? Das heißt: Fehlt die Information, weil der Prozess fehlerhafte Lücken hat, oder fehlt sie bei bestimmten Gruppen systematisch? Ein einfacher Check: Vergleichen wir die Eigenschaften der Datensätze mit fehlenden Werten mit denen der vollständigen. Unterscheiden sie sich signifikant? Dann ist das Muster nicht zufällig.

Drittens: Was tun wir mit den Daten später? Wenn wir einen Bericht schreiben, können wir einfacher mit Lücken umgehen. Wenn wir ein Vorhersagemodell trainieren, das später in der Praxis produktiv läuft, müssen wir klarer sein. Das Modell braucht eine durchdachte Strategie, kein Improvisieren.

Viertens: Welche Folgen hat ein Fehler? Manche fehlende Werte sind unkritisch. Andere sind zentral. Wenn wir die Zahlungsfähigkeit eines Kunden bewerten und sein Einkommen fehlt, ist das gravierend. Wenn die Farbe eines Produkts fehlt, ist das weniger kritisch.

## Die Realität: Oft ist eine Mischung nötig

In der Praxis kombinieren Unternehmen alle drei Strategien. Sie ignorieren Datensätze, bei denen zentrale Werte fehlen. Sie ersetzen Werte, wo Spekulationen realistisch sind. Und sie kennzeichnen systematisch fehlende Werte, um sie später in der Analyse berücksichtigen zu können.

Das Wichtigste ist: Wir machen diese Entscheidung bewusst und dokumentieren sie. Nicht nur für uns selbst, sondern auch für die Kollegen, die später mit unseren gereinigten Daten arbeiten. Sie müssen wissen, dass ein Wert gefunden wurde oder dass er fehlte — sonst führt unsere Datenarbeit zu Verwirrung statt zu Klarheit.

Wer Daten nutzt, muss verstehen, wie sauber sie sind und mit welchen Annahmen wir gearbeitet haben. Das ist der Unterschied zwischen Datenbearbeitung und echtem Datenmanagement.