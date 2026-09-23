---
layout: ../../layouts/BlogPost.astro
title: "Wie man Budgetdaten und Ist-Daten in einem Modell sauber zusammenfuehrt"
excerpt: "Budgetdaten und Ist-Zahlen in einem BI-Modell zu vereinen ist anspruchsvoll. Wir zeigen, wie man strukturelle Probleme vermeidet und aussagekraeftige Auswertungen schafft."
date: 2026-09-23
tag: Modelle & Reports
readTime: 5
---

## Das Problem, das viele Unternehmen unterschaetzen

Wenn Geschaeftsfuehrer und Controller ihre monatlichen Berichte erstellen, stoessen sie regelmaessig auf eine taeuschen einfach wirkende Aufgabe: Budgetdaten und Ist-Daten zusammenbringen. In der Theorie klingt das unkompliziert — beide Datensaetze existieren, man fuehrt sie zusammen und kann dann vergleichen. In der Realitaet scheitert das in vielen Unternehmen an versteckten Strukturproblemen.

Wir sehen haeufig Szenarien, in denen die Budgetdaten einer ganz anderen Logik folgen als die Ist-Daten. Das Budget wurde vielleicht nach Kostenstellengruppen eingeplant, waehrend die Ist-Zahlen nach einzelnen Projekten erfasst werden. Oder die Budgetsaetze gelten fuer das ganze Jahr, die Ist-Daten werden aber monatlich aktualisiert und zeigen unterschiedliche Perioden. Solche Diskrepanzen fuehren dazu, dass die Zahlen nicht zusammenpassen, Reports fehlerhaft werden und letztlich Entscheidungen auf falschen Grundlagen getroffen werden.

## Warum es nicht ausreicht, einfach zu mergen

Die naeheste Loesung — beide Tabellen per Primairschluessel zu verbinden — funktioniert nur, wenn beide Datensaetze exakt die gleiche Granularitaet und Struktur haben. In der Praxis ist das selten der Fall.

Ein typisches Beispiel: Ein Unternehmen plant sein Budget auf Abteilungsebene fuer das ganze Jahr, erfasst aber Ist-Daten auf Projectebene mit monatlichen Detailwerten. Wenn man versucht, diese direkt zu kombinieren, entsteht ein strukturelles Missmatch. Die Ist-Daten sind feiner granuliert, die Budget-Daten aggregierter. Ein naiver Join wuerde entweder zu Duplikaten fuehren — wenn man die aggregierten Budgetzeilen mit mehreren Ist-Zeilen verbindet — oder zu Luecken, wenn keine exakte Uebereinstimmung existiert.

## Der richtige Weg: Denormalisierung auf einer gemeinsamen Ebene

Wir empfehlen, beide Datensaetze auf eine gemeinsame, logisch sinnvolle Aggregationsebene zu bringen, bevor man sie zusammenfuehrt. Das ist nicht immer die feinste Ebene der Ist-Daten und nicht immer die Ebene des Budgets — sondern die Ebene, auf der ein aussagekraeftiger Vergleich stattfinden soll.

Stellen wir uns ein Szenario vor: Ein Produktionsunternehmen plant sein Budget fuer den Bereich Personalkosten pro Abteilung fuer jedes Quartal. Die Ist-Daten fallen aber taeglich an, lassen sich aber problemlos auf Abteilung und Monat aggregieren. In diesem Fall waere eine sinnvolle Ebene: Abteilung und Monat. Das bedeutet, dass man die Budgetdaten von Quartal auf Monat herunterbrechen muss — etwa gleichmaessig verteilt oder nach historischen Mustern. Die Ist-Daten aggregiert man auf diese gleiche Ebene.

Durch diesen Schritt bekommen beide Datensaetze die gleiche Struktur: Es gibt Zeilen fuer "Abteilung A, Januar", "Abteilung A, Februar" und so weiter. Jetzt lassen sich die Werte sauber abgleichen.

## Die Dimensionen richtig definieren

Bevor man zusammenfuehrt, muss klar sein, welche Dimensionen beide Datensaetze gemeinsam haben und in welcher Form. Ein haeufiges Problem: Das Budget wurde nach "Kostenart" kategorisiert (Gehaelter, Sachkosten, Reisekosten), die Ist-Daten aber nach "Kontotyp" (Personalkosten, sonstige Ausgaben). Diese Labels sind nicht identisch, auch wenn die Inhalte sich ueberlagern.

Wir empfehlen, fuer solche Faelle eine Mapping-Tabelle zu erstellen. Diese Tabelle ordnet jede Kostenart einer standardisierten Kategorie zu — und jeden Kontotyp ebenfalls. Beide Datensaetze referenzieren dann auf diese zentrale Kategorisierung. So entsteht ein einheitlicher Bezugsrahmen, unabhaengig davon, wie die Rohdaten urspruenglich erfasst wurden.

Das gleiche Prinzip gilt fuer Zeitdimensionen. Wenn das Budget nach Kalenderwochen struktuiert ist und die Ist-Daten nach Geschaeftstagen, muss es eine klare Zuordnung geben, welcher Geschaeftstag zu welcher Woche gehoert.

## Mit Luecken und fehlenden Werten umgehen

Nach dem Zusammenfuehren entstehen oft Luecken: Es gibt Ist-Daten fuer eine bestimmte Kombination (etwa "Vertrieb, Maerz, Reisekosten"), aber kein entsprechendes Budget. Oder umgekehrt.

Wir empfehlen, diese Luecken bewusst zu behandeln, nicht zu ignorieren. Die Frage ist nicht, ob es sie gibt, sondern wie man mit ihnen umgehen soll. Fehlende Budget-Werte koennen auf Null gesetzt werden (bewusst nicht geplant) oder als NULL stehen gelassen werden (unklar, nicht erfasst). Das hat unterschiedliche Implikationen fuer Vergleichsberechnungen.

In Reports ist es wichtig, solche Faelle transparent zu machen. Ein Balkendiagramm, das einfach fehlende Budgets ignoriert, fuehrt zu irreführenden Visualisierungen. Stattdessen sollten leere oder Null-Positionen deutlich sichtbar sein.

## Die praktische Umsetzung im Modell

Im BI-Modell selbst lautet die beste Praxis: Beide Datensaetze (Budget und Ist) sollten separat geladen und bereinigt werden. Erst danach bringt man sie ueber eine oder mehrere gemeinsame Dimensionen zusammen. Diese Dimensionen sind idealerweise als eigene Dimensionstabellen definiert — etwa eine Tabelle mit allen moeglichen (Abteilung, Monat, Kostenart)-Kombinationen. Both Budget- und Ist-Daten werden dann gegen diese Struktur gemappt.

Der Vorteil: Das Modell wird konsistenter. Wenn spaeter eine neue Abteilung hinzukommt, aendert man die Dimensionstabelle einmal, und alle Reports aktualisieren sich automatisch. Und weil die Struktur explizit ist, gibt es weniger versteckte Fehler durch unerwartete Mismatches.

## Qualitaetssicherung vor der Veroeffentlichung

Bevor Reports live gehen, sollten diese Zusammenfuehrungen validiert werden. Das bedeutet: Stichproben ziehen, manuell nachrechnen, die Summen vergleichen. Gibt es Abweichungen zwischen erwartetem und errechnetem Budget-Ist-Vergleich? Dann liegt meist ein fehlender oder falscher Mappingfall vor.

Ein praktikabler Ansatz ist, in den ersten Monaten eine Kontrollzeile im Report zu haben — eine Zeile, die die Gesamtsumme des gesamten Budgets zeigt, und daneben die aggregierte Ist-Summe. Diese sollten, wenn alle Daten erfasst sind, ein logisches Verhaeltnis zeigen. Stimmt das nicht, wissen Nutzer sofort, dass etwas nicht stimmt.

## Fazit

Budget- und Ist-Daten sauber zusammenzufuehren ist kein technisches Trivialanliegen, sondern erfordert klares Denken ueber Struktur und Semantik. Die Schluessel sind: Eine gemeinsame Aggregationsebene finden, Dimensionen bewusst mappen, Luecken transparent behandeln, und alles vor Veroeffentlichung validieren.

Wer diesen Weg konsequent geht, schafft nicht nur fehlerfreiere Reports, sondern auch ein Modell, das stabiler ist und einfacher zu warten.

Falls Sie in Ihrem Unternehmen unklar ist, wie Ihre Budget- und Ist-Daten strukturiert sind oder wo die Klueften entstehen — wir helfen gerne dabei, das zu klaeren. [Kontaktieren Sie uns](/kontakt), um zu besprechen, wie wir Ihr BI-Modell sauberer und zuverlaessiger machen koennen.