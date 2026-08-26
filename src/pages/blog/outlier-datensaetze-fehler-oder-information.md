---
layout: ../../layouts/BlogPost.astro
title: "Outlier in Datensaetzen: Fehler oder wertvolle Information?"
excerpt: "Outlier sind Ausreißer in Datensätzen, die oft einfach gelöscht werden. Doch manchmal stecken dahinter wichtige Erkenntnisse. Wir zeigen, wie man damit richtig umgeht."
date: 2026-08-26
tag: Daten bereinigen
readTime: 5
---

## Das Dilemma mit den Ausreißern

Bei der Arbeit mit Datensätzen stoßen wir regelmäßig auf Werte, die aus dem normalen Muster herausfallen. Ein Kunde, der statt 100 Euro plötzlich 10.000 Euro ausgibt. Ein Sensor, der eine Temperatur von minus 150 Grad meldet, obwohl das technisch unmöglich ist. Ein Mitarbeiter, der 48 Stunden an einem Tag gearbeitet haben soll. Diese Ausreißer — im Fachjargon Outlier genannt — stellen jeden vor die gleiche Frage: Ist das ein Fehler, den wir löschen sollten, oder eine echte Besonderheit, die wir verstehen müssen?

Die gängige Reaktion ist oft reflexartig: Outlier raus, Daten bereinigt, fertig. Das ist verständlich, denn Ausreißer können statistische Analysen verzerren und Modelle verfälschen. Aber dieser automatische Umgang wird der Realität häufig nicht gerecht. Manchmal sind Outlier gerade das Interessanteste, was unsere Daten uns zu sagen haben.

## Warum Outlier entstehen

Um richtig mit Ausreißern umzugehen, hilft es, ihre Ursachen zu verstehen. Wir können dabei grob zwischen drei Kategorien unterscheiden.

Zum einen gibt es echte Eingabefehler. Ein Mitarbeiter tippt eine Bestellung falsch ein, eine Ziffer wird verdreht, oder jemand drückt versehentlich eine Taste zu oft. Diese Fehler sind tatsächlich Mängel in den Daten, und es macht Sinn, sie zu korrigieren oder zu entfernen — wenn wir sicher wissen, dass es sich um Fehler handelt.

Zum anderen entstehen Outlier durch technische Probleme. Ein Messinstrument funktioniert kurzzeitig falsch, eine API liefert korrupte Daten, oder ein Datenbank-Import hat Probleme. Auch diese sind in der Regel legitim zu bereinigen, sobald wir die technische Ursache verstanden haben.

Daneben gibt es aber eine dritte Kategorie, die oft übersehen wird: echte, legitime Ausreißer. Ein Großkunde kauft tatsächlich viel mehr als der Durchschnitt. Ein einzelner Produktionsausfall führt wirklich zu extremen Zahlen. Ein besonders engagierter Mitarbeiter arbeitet außergewöhnlich lange. Diese Outlier sind nicht falsch — sie sind real und oft sehr aussagekräftig.

## Die versteckte Information in Ausreißern

Wir sehen es häufig so: Outlier sind häufig die Wegweiser zu den interessantesten Fragen. Wenn wir sie einfach löschen, verlieren wir die Chance, sie zu verstehen.

Stellen wir uns ein Einzelhandelsunternehmen vor, das seine Verkaufszahlen pro Filiale analysiert. Die meisten Filialen liegen in einem normalen Bereich, aber eine einzelne Filiale hat Umsätze, die deutlich darunter liegen. Das wäre ein Outlier, und schnell könnte man versucht sein, das als Fehler oder Anomalie zu behandeln. Aber was, wenn diese Filiale in einem Gebiet mit schlechterer Kaufkraft liegt, oder erst vor kurzem eröffnet wurde, oder mit schlechterem Management kämpft? Der Ausreißer führt hier direkt zu Fragen, die für das Geschäft kritisch sind.

Oder ein anderes Beispiel: In einem Produktionsbetrieb zeigen die Maschinenüberwachungsdaten plötzlich einen extremen Wert bei der Energieaufnahme. Ein Outlier, der vielleicht sofort als Messfehler eingestuft wird. Aber vielleicht signalisiert dieser Ausreißer ein beginnendes mechanisches Problem, das rechtzeitig erkannt zu erheblichen Kosteneinsparungen führt.

## Systematisch mit Ausreißern umgehen

Wie treffen wir also die richtige Entscheidung? Wir empfehlen einen strukturierten Ansatz, statt Outlier pauschal zu behandeln.

Erstens sollte man verstehen, wie viele Ausreißer es gibt und wie extrem sie wirklich sind. Ein einzelner Wert, der um das Zehnfache vom Normalwert abweicht, verdient andere Aufmerksamkeit als einer, der sich um 20 Prozent unterscheidet. Tools zur Identifikation von Ausreißern helfen dabei, die relevanten Fälle zu erkennen.

Zweitens sollte man versuchen, die Ursache zu verstehen. Kann man den betreffenden Datenpunkt mit der Quelle abgleichen? Gibt es eine dokumentierte Erklärung? War dies beispielsweise ein Tag mit Sonderveranstaltungen, oder ein Gerät mit bekanntem Defekt? Diese Recherche ist aufwendig, aber oft sehr aufschlussreich.

Drittens empfiehlt es sich, die Analyse auf zwei Arten durchzuführen: einmal mit den Ausreißern, einmal ohne. Wie sehr ändern sich die Ergebnisse? Wenn die Schlussfolgerungen robust bleiben, kann man die Ausreißer beruhigt entfernen. Wenn sich aber alles ändert, dann sind die Ausreißer möglicherweise zentral für das, was man verstehen möchte.

Viertens sollte man dokumentieren, welche Entscheidung man getroffen hat und warum. Das ist für die Nachvollziehbarkeit und für zukünftige Analysen wertvoll.

## Der praktische Weg nach vorne

In vielen Projekten sehen wir, dass Unternehmen von pauschalen Regeln profitieren, die aber regelmäßig überprüft werden. Man könnte beispielsweise festlegen, dass automatisch Werte gelöscht werden, die technisch unmöglich sind — Temperaturen unter absolut Null, negative Anzahlen von Produkten, Arbeitszeiten über 24 Stunden pro Tag. Das sind echte Fehler.

Für andere, weniger klare Fälle sollte man aber skeptisch bleiben und zumindest regelmäßig hinterfragen, ob die automatische Bereinigung noch sinnvoll ist.

Am wichtigsten ist: Outlier sind kein Hindernis, das man schnell aus dem Weg räumen muss. Sie sind ein Signal. Manchmal ein Signal für einen Datenfehler, aber ebenso oft ein Signal für etwas Interessantes, das tiefer untersucht werden sollte. Der Unterschied zwischen echtem Verständnis von Daten und oberflächlicher Datenbereinigung liegt oft genau darin, wie man mit Ausreißern umgeht.

Wir empfehlen: Nehmen Sie sich Zeit für Ihre Outlier. Fragen Sie, bevor Sie löschen. Die Wahrscheinlichkeit ist hoch, dass Sie dabei etwas Wichtiges über Ihr Geschäft lernen.

Wenn Sie unsicher sind, wie Sie mit problematischen Datensätzen umgehen sollten oder wo in Ihrer Datenbereinigung blind Spots entstehen, sprechen Sie mit uns. [Kontaktieren Sie uns](/kontakt) — wir schauen gemeinsam auf Ihre Situation und helfen Ihnen, die richtigen Entscheidungen zu treffen.