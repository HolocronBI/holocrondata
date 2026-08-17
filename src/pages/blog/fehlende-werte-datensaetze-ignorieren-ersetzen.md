---
layout: ../../layouts/BlogPost.astro
title: "Fehlende Werte in Datensaetzen: Ignorieren, ersetzen oder kennzeichnen?"
excerpt: "Fehlende Daten sind in fast jedem Unternehmen ein Problem. Wir zeigen, welche Strategien funktionieren und wann welcher Ansatz sinnvoll ist."
date: 2026-08-17
tag: Daten bereinigen
readTime: 5
---

## Warum fehlende Werte ein echtes Problem sind

Wer mit Daten arbeitet, kennt das Problem: In Datensaetzen tauchen Luecken auf. Eine Telefonnummer fehlt, ein Verkaufsbetrag ist leer, ein Kundenstatus wurde nie ausgefuellt. Was trivial klingt, wird schnell zur Herausforderung. Fehlende Werte verzerren Analysen, verfaelschen Forecasts und fuehren zu falschen Entscheidungen.

In vielen Unternehmen wird dieses Problem erst sichtbar, wenn die Auswertungen anfangen zu scheitern. Ein Manager moechte wissen, wie viele Auftraege durchschnittlich abgewickelt werden — und die Zahl ist unbrauchbar, weil die Hälfte der Auftragsdaten unvollstaendig ist. Eine Prognose fuer den naechsten Monat wird erstellt — aber die historischen Daten sind lückenhaft, also ist das Ergebnis fragwuerdig.

Die zentrale Frage lautet nicht: "Warum haben wir fehlende Werte?" (Die Antwort ist meistens: Weil die Erfassung schlecht war, weil Menschen Fehler machen, weil Systeme nicht zusammenpassen.) Die echte Frage ist: "Wie gehen wir sinnvoll damit um?"

## Die drei Hauptstrategien

Wir sehen grundsaetzlich drei Ansaetze, die in der Praxis relevant sind: ignorieren, ersetzen oder kennzeichnen. Jeder hat seine Berechtigung — und jeder hat auch klare Grenzen.

### Ignorieren: Wenn der Datenverlust vertretbar ist

Ignorieren bedeutet: Zeilen mit fehlenden Werten einfach aus der Analyse herausnehmen. Ein Unternehmen hat eine Kundendatenbank mit 10.000 Kontakten. Bei 2.000 ist das Geburtsdatum nicht eingetragen. Wenn die Analyse sich auf Altersgruppen bezieht, werden diese 2.000 Kontakte einfach nicht beruecksichtigt.

Dieser Ansatz ist verlockend, weil er einfach ist. Er funktioniert aber nur unter einer Bedingung: Die fehlenden Daten muessen zufall spreueft verteilt sein. Das ist selten der Fall. Haeufig fehlen Werte systematisch. Vielleicht haben nur die Kunden kein Geburtsdatum eingetragen, die ueber bestimmte Kanals gewonnen wurden. Vielleicht sind es vornehmlich aeltere Kunden, die das Feld uebersprungen haben. In solchen Faellen verfaelscht das Ignorieren die Ergebnisse massiv, weil man unbewusst nur einen Teil der Realitaet analysiert.

Daneben gibt es den praktischen Nachteil: Wenn viele Werte fehlen, schrumpft der analysierbare Datensatz rapide. Ein Bericht, der sich auf 20 Prozent der verfuegbaren Daten stuetzt, ist weniger aussagekraeftig als einer, der 80 Prozent nutzt.

Ignorieren ist also nur sinnvoll, wenn der Anteil fehlender Werte klein ist (unter 5 Prozent), und wenn es keinen Grund zur Vermutung gibt, dass diese Luecken ein Muster aufweisen.

### Ersetzen: Die verbreitete Loesung mit Fallstricken

Ersetzen bedeutet: Fehlende Werte werden mit einem Ersatzwert gefuellt. Die Optionen sind vielfaeltig. Der Durchschnitt aller vorhandenen Werte wird genommen. Der Median wird verwendet. Der haeufigste Wert wird dupliziert. Ein Standardwert wie Null oder "unbekannt" wird eingesetzt.

Das funktioniert und ist beliebt, weil es schnell geht und den Datensatz vollstaendig macht. Aber auch hier lauert ein Problem: Wenn zu viele Werte auf diese Weise gefuellt werden, wird der Datensatz verfaelscht. Ein Verkaufsbetrag, der fehlt, wird mit dem Durchschnitt aller anderen Betraege ersetzt. Das klingt rational — aber es macht den Datensatz homogener, als er in Wirklichkeit ist. Variationen verschwinden. Abweichungen werden glaettet. Wenn spaeter ein Machine-Learning-Modell auf diesen Daten trainiert wird, lernt es von verfaelschten Mustern.

Ersetzen ist vor allem in einem Fall problematisch: wenn es um kategoriale Daten geht. Ein Geburtsdatum oder eine Postleitzahl mit einem Durchschnitt zu fuellen macht keinen Sinn. Hier muss man praktischer denken — oder aber zur dritten Strategie greifen.

### Kennzeichnen: Die ehrliche Loesung

Kennzeichnen bedeutet: Der fehlende Wert bleibt sichtbar, wird aber explizit als fehlend markiert. Statt Null oder Durchschnittswert wird ein spezieller Marker verwendet. Das kann eine Flagge sein ("Wert vorhanden: ja/nein"), ein spezieller Code oder eine Kategorie "keine Angabe".

Dieser Ansatz ist ehrlich, weil er nicht so tut, als waere der Datensatz vollstaendig. Gleichzeitig kann man mit ihm arbeiten. Ein Bericht kann darstellen, wie viele Werte tatsaechlich vorhanden sind. Eine Filterung kann die unvollstaendigen Datensaetze gezielt isolieren. Analysen koennen unterscheiden zwischen Saetzen mit vollstaendigen und unvollstaendigen Daten.

Fuer viele Geschaeftsfaelle ist das der praeferierteste Weg. Ein Kundenvergleich kann explizit zeigen, welche Kunden vollstaendige Profile haben und welche nicht. Ein Vertriebsbericht kann Deals mit unbekanntem Abschlusswert separat kennzeichnen. Das gibt Transparenz ueber die Datenqualitaet.

## Wie man die richtige Strategie waehlt

Welcher Ansatz passt zu welchem Fall? Das haengt ab von drei Faktoren.

Der erste ist der Umfang: Wie viele Werte fehlen? Bei unter 5 Prozent kann ignorieren sinnvoll sein. Bei 5 bis 20 Prozent sollte man kennzeichnen. Bei ueber 20 Prozent muss man entscheiden, ob das Feld ueberhaupt noch relevant ist oder ob es bessere Datenquellen gibt.

Der zweite ist die Art des Feldes. Ist es numerisch (Betrag, Alter, Menge)? Dann kann Ersetzen mit Durchschnitt oder Median sinnvoll sein — aber nur, wenn man sich des Verfaelschungsrisikos bewusst ist. Ist es kategorial (Status, Kategorie, Typ)? Dann sollte man eher kennzeichnen oder die Ursache der fehlenden Werte untersuchen.

Der dritte ist der Geschaetszweck. Wird mit den Daten eine Prognose erstellt? Dann muss man sehr vorsichtig sein mit Ersetzen. Wird ein einfacher Bericht fuer das Management erstellt? Dann koennte kennzeichnen ausreichen. Wird ein Modell trainiert? Dann sollte man fehlende Werte sehr ernst nehmen und idealerweise deren Ursache beheben.

## Die beste Loesung: Ursachen ausrauben

Alle drei Strategien sind Symptombekämpfung. Die beste Loesung ist, das Problem an der Wurzel zu packen: Warum fehlen diese Werte ueberhaupt?

Ein Feld in einem Formular ist optional und wird deshalb oft uebersprungen? Dann sollte man ueberlegen, ob es wirklich noetig ist. Ein Datensystem erfasst ein Feld nicht konsequent? Dann muss das System angepasst werden. Daten stammen aus verschiedenen Quellen und sind daher inkonsistent? Dann braucht es eine Harmonisierung beim Import.

Fast immer lohnt sich der Aufwand, die Datenerfassung zu verbessern, mehr als mit fehlenden Werten zu jonglieren.

## Schlusswort

Fehlende Werte sind nicht einfach weg. Sie sind da — oder eben nicht. Und genau das sollte man wissen und dokumentieren. Wir empfehlen, in jedem Projekt am Anfang zu klaeren: Wie viele Werte fehlen, in welchen Feldern, und warum? Erst dann kann man entscheiden, ob ignorieren, ersetzen oder kennzeichnen die richtige Strategie ist.

Meistens ist es eine Mischung aus allen drei — je nach Feld und Kontext. Das ist nicht perfekt, aber ehrlich. Und ehrliche Daten sind besser als vollstaendige Faelschungen.

Falls diese Fragen in Ihrem Unternehmen entstehen, und Sie unsicher sind, wie Sie die Datenqualitaet systematisch angehen: [Wir helfen gerne bei einer ersten Orientierung.](/kontakt)