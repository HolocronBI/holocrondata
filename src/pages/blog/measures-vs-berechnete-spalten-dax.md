---
layout: ../../layouts/BlogPost.astro
title: "Measures vs. berechnete Spalten in DAX: Wann was sinnvoll ist"
excerpt: "Measures und berechnete Spalten lösen unterschiedliche Probleme. Wir zeigen, wann welcher Ansatz in Power BI und Excel sinnvoll ist."
date: 2026-06-05
tag: Modelle & Reports
readTime: 5
---

## Das Dilemma bei der Datenmodellierung

Wer in Power BI oder Excel mit DAX arbeitet, steht früher oder später vor dieser Frage: Soll ich eine berechnete Spalte oder ein Measure erstellen? Beide sind möglich, beide liefern scheinbar das gleiche Ergebnis. Doch das ist ein Trugschluss. Die Wahl zwischen Measures und berechneten Spalten hat massive Auswirkungen auf Performance, Speicher und die Wartbarkeit des Modells.

Wir sehen in vielen Unternehmen, dass diese Entscheidung oft intuitiv getroffen wird — und später bereut wird. Ein Modell, das mit hundert berechneten Spalten aufgebläht ist, wird zum Bremsklotz. Ein Report ohne die richtigen Measures wird zum Kampf gegen die Logik von DAX. Es lohnt sich, diese Grundlagen zu verstehen.

## Was berechnete Spalten wirklich tun

Eine berechnete Spalte wird Zeile für Zeile berechnet und das Ergebnis wird im Modell gespeichert. Das bedeutet: Die Berechnung passiert einmal, beim Laden oder Aktualisieren des Modells. Das Ergebnis sitzt dann für jede einzelne Zeile in der Tabelle.

Das klingt erst einmal praktisch. Und in manchen Fällen ist es das auch. Ein häufiges Beispiel: Im Verkauf liegen Bestellungen vor mit Bestelldatum und Lieferdatum. Aus diesen beiden Feldern möchte man die Liefertage berechnen — also die Differenz. Eine berechnete Spalte macht hier Sinn. Sie wird einmal beim Laden berechnet, sitzt dann in der Tabelle und kann ohne weitere Rechnung verwendet werden.

Oder: Ein Kundenname liegt vor als Vorname und Nachname in separaten Spalten. Mit einer berechneten Spalte kombiniert man sie zu einem vollständigen Namen, der dann direkt verfügbar ist.

Das zentrale Problem: Berechnete Spalten verbrauchen Speicher. Jede Zeile, jeder berechnete Wert nimmt Platz in Anspruch. Bei einer Tabelle mit einer Million Zeilen und fünf berechneten Spalten entsteht schnell ein erheblicher Speicherbedarf. Das Modell wird größer, die Aktualisierung dauert länger, die Performance beim Öffnen sinkt.

## Was Measures wirklich sind

Measures sind anders. Ein Measure ist keine Spalte, sondern eine Formel, die erst berechnet wird, wenn sie gebraucht wird — und zwar im Kontext einer Abfrage. Ein Measure speichert nichts. Es ist reiner Code, der bei jeder Verwendung neu ausgeführt wird.

Das klingt teuer. Ist es manchmal auch. Aber es ist auch unglaublich flexibel.

Nehmen wir ein einfaches Beispiel: Der Gesamtumsatz. Mit einem Measure definiert man diese Berechnung einmal. Dann kann diese gleiche Formel in Dutzenden verschiedenen Kontexten verwendet werden — gefiltert nach Monat, nach Region, nach Kundengruppe. Das Measure passt sich an, je nachdem, welche Filter gerade aktiv sind. Eine berechnete Spalte könnte das nicht. Sie würde einen fixen Wert pro Zeile enthalten und wäre nicht kontextabhängig.

Oder: Man möchte eine Wachstumsrate sehen. Mit einem Measure schreibt man die Logik einmal auf. Dieses Measure kann dann überall eingesetzt werden — in Tabellen, Grafiken, Visualisierungen. Es weiß automatisch, in welchem zeitlichen Kontext es gerade arbeitet und berechnet die Rate relativ zu diesem Kontext.

## Die praktische Entscheidung

Wir empfehlen einen einfachen Gedanke als Orientierung:

Berechnete Spalten sind für Daten zuständig. Wenn man eine neue Information aus bestehenden Spalten ableitet, die auf Zeilen-Ebene konstant ist und nicht kontextabhängig variiert, ist eine berechnete Spalte die richtige Wahl. Das vollständige Kundenname-Beispiel passt hier. Das Liefertage-Beispiel auch.

Measures sind für Aggregationen und Analysen zuständig. Immer dann, wenn man zusammenfassen, filtern, vergleichen oder kontextabhängig rechnen möchte, braucht man ein Measure. Die meisten Geschäftsfragen — "Wie hoch war der Umsatz?" oder "Was ist der Trend?" — landen bei Measures.

Es gibt noch ein praktisches Zeichen: Wenn man merkt, dass die gleiche Berechnung in Dutzenden Zeilen wiederholt wird, ist es wahrscheinlich ein Measure, das sein sollte.

## Das Speicher- und Performance-Problem

Wir sehen oft, dass Modelle langsam werden, weil sie hunderte berechnete Spalten enthalten. Das ist kein Mythos, sondern ein reales Problem. Jede berechnete Spalte verbraucht Speicher. Bei größeren Datenmengen wird das schnell zum Engpass.

Measures haben dieses Problem nicht. Sie sind Code, nicht Daten. Ein Modell mit hundert Measures ist deutlich leaner als eines mit hundert berechneten Spalten.

Aus diesem Grund lautet die praktische Faustregel: Measures sind die erste Wahl. Berechnete Spalten nur, wenn es einen echten Grund gibt.

## Ein weiterer Aspekt: Wartbarkeit

Jemand, der sich ein Datenmodell anschaut, muss schnell verstehen können, wie die Daten strukturiert sind und wie Berechnungen funktionieren. Berechnete Spalten sind über die Tabellendefinition verstreut. Measures sitzen bündiger in einer Measure-Liste oder am Anfang des Modells.

Wer später das Modell anfasst — sei es man selbst nach Monaten, sei es jemand anderes — hat mit Measures einen zentraleren Ort, um zu verstehen, wie Berechnungen ablaufen.

## Fazit: Das richtige Werkzeug für das richtige Problem

Es geht nicht um absolut richtig oder falsch. Es geht um Effizienz. Ein gut strukturiertes Modell nutzt berechnete Spalten sparsam für echte Datentransformationen und Measures großzügig für Analysen und Geschäftsfragen.

Wer diese Grundregel verinnerlicht hat, baut Modelle, die nicht nur schneller laufen, sondern auch wartbarer und verständlicher sind.

Falls Sie unsicher sind, wie Ihr aktuelles Modell strukturiert ist oder ob Ihre Mischung aus Spalten und Measures optimiert werden kann, schauen Sie gerne vorbei — wir helfen Ihnen, das Beste aus Ihren Daten herauszuholen.

[Kontakt aufnehmen](/kontakt)