---
layout: ../../layouts/BlogPost.astro
title: "Wie man erkennt, ob eine Datenquelle grundsaetzlich unbrauchbar ist"
excerpt: "Nicht jede Datenquelle lohnt sich zu bereinigen. Wir zeigen, woran Sie frühzeitig erkennen, ob eine Quelle grundsätzlich zu viele Probleme hat."
date: 2026-09-06
tag: Daten bereinigen
readTime: 5
---

## Wann lohnt sich die Arbeit nicht mehr?

Bei der Arbeit mit Unternehmensdaten stellt sich immer wieder die gleiche Frage: Können wir diese Quelle noch retten, oder werfen wir nur Zeit und Ressourcen hinein? Es ist verlockend, jede verfügbare Datenquelle nutzen zu wollen – schließlich kostet sie ja ohnehin Geld oder Aufwand. Doch nicht alle Quellen sind es wert, bereinigt und integriert zu werden. Manchmal ist der richtige Entschluss, eine Quelle komplett zu ignorieren.

Wir zeigen Ihnen, an welchen Warnsignalen Sie früh erkennen, dass eine Datenquelle grundsätzlich unbrauchbar ist – und wann es sinnvoller ist, sich auf andere Optionen zu konzentrieren.

## Das Problem der fehlenden Dokumentation

Eine der stärksten Warnsignale ist der Mangel an jeglicher Dokumentation. Das betrifft nicht nur formale Beschreibungen, sondern auch grundlegende Informationen: Welche Felder existieren? Welche Werte sind erlaubt? Wann wurde die Quelle das letzte Mal aktualisiert?

Wenn niemand im Unternehmen erklären kann, was die einzelnen Spalten bedeuten, wie lange die Daten zurückliegen oder unter welchen Bedingungen sie entstanden sind, wird jede Analyse zur Vermutung. Wir sehen häufig Situationen, in denen Mitarbeiter Jahre lang mit einer Tabelle arbeiten, aber niemand kann sagen, warum bestimmte Felder leer sind oder welche Geschäftslogik dahinter steckt. Das ist ein klares Zeichen dafür, dass die Datenquelle nie wirklich unter Kontrolle war.

In solchen Fällen wird der Aufwand, die Quelle überhaupt erst zu verstehen, oft größer als der Nutzen, den sie bietet.

## Historische Inkonsistenz und fehlende Versionierung

Daten entwickeln sich. Schema ändern sich, Geschäftsprozesse werden angepasst, Systeme werden migriert. Das ist normal. Problematisch wird es, wenn niemand dokumentiert hat, wann und wie diese Änderungen stattgefunden haben.

Stellen Sie sich vor, eine Datenquelle hat drei Jahre lang gleich ausgesehen, dann plötzlich wurden fünf neue Felder hinzugefügt, zwei alte Felder verschwunden, und die Werte in einem anderen Feld haben plötzlich ein anderes Format. Wenn Sie das bemerken, wissen Sie nicht, ab wann die Änderung gültig ist. Sollten Sie Ihre historischen Analysen invalidieren? Sind die neuen Daten mit den alten vergleichbar?

Wenn eine Quelle mehrfach ihre Struktur oder ihre Bedeutung geändert hat, ohne dass jemand das nachverfolgt hat, wird es fast unmöglich, zuverlässige Trends oder Vergleiche zu ziehen. Der Aufwand, das alles zu rekonstruieren und zu korrigieren, steht häufig in keinem Verhältnis zum Wert der Daten.

## Datenqualität auf unhaltbarem Niveau

Jede Datenquelle hat Fehler. Das ist akzeptabel. Aber es gibt ein Niveau, unter das Datenqualität nicht fallen sollte, wenn sie noch einen Nutzen haben soll.

Wenn beispielsweise mehr als 30 oder 40 Prozent der Datensätze in kritischen Feldern leer sind, wenn die Fehlerrate bei der Eingabe extrem hoch ist, oder wenn grundlegende Konsistenzregeln permanent verletzt werden, wird es problematisch. Ein Beispiel: Ein Kundensystem, in dem die Hälfte der Telefonnummern in einem ungültigen Format gespeichert ist, wo es keine gültige E-Mail-Adresse gibt, oder wo Adressen unvollständig sind. Das bedeutet nicht, dass diese Quelle vollständig unbrauchbar ist – aber es signalisiert, dass sie nie mit angemessener Kontrolle betrieben wurde.

Wenn die Fehlerrate so hoch ist, dass Sie mehr Zeit damit verbringen, Fehler zu korrigieren als neue Erkenntnisse zu gewinnen, sollten Sie ernsthaft überdenken, ob diese Quelle das richtige Investment darstellt.

## Keine Möglichkeit zur Validierung

Jede Datenquelle sollte überprüfbar sein. Das bedeutet: Es muss eine unabhängige Referenzquelle geben, gegen die Sie die Daten abgleichen können.

Ein häufiges Problem zeigt sich bei internen Systemen, die über Jahre gewachsen sind. Wenn Sie beispielsweise ein altes ERP-System haben, in dem niemand mehr sicher ist, ob die Zahlen korrekt sind, und es gibt auch keine Belege oder Originalquellen, gegen die Sie validieren könnten, dann sitzen Sie fest. Sie wissen nicht, ob ein Datensatz falsch ist oder einfach nur ungewöhnlich.

Wenn es unmöglich ist, die Richtigkeit der Daten gegen externe oder verlässlichere Quellen zu überprüfen, können Sie auch kein Vertrauen in die Quelle aufbauen. Ein Unternehmen, das Lagerbestände verwaltet, braucht beispielsweise eine Möglichkeit, die Systemdaten gegen physische Inventuren zu validieren. Wenn das nie passiert ist, können Sie nicht sicher sein, ob die Daten stimmen.

## Abhängigkeit von einzelnen Personen

Ein unterschätztes Warnsignal ist die vollständige Abhängigkeit von einer einzelnen Person, die das System betreut oder versteht.

Wenn nur eine Person weiß, wie die Daten in die Quelle gelangen, welche Transformationen durchgeführt werden, oder wie die Quelle wartbar ist, dann haben Sie ein Risiko, aber auch ein Qualitätsproblem. Diese Person kann nicht alle Fehler dokumentieren, kann ausfallen, oder hat ein verständliches Gedächtnis, das nicht vollständig und nicht zuverlässig ist.

Eine Datenquelle, die nur durch eine einzelne Person zusammengehalten wird, ist strukturell unstabil. Das ist ein Zeichen dafür, dass die Grundlagen nicht stabil genug sind, um darauf ein Datenmanagement aufzubauen.

## Der Kosten-Nutzen-Abwägung

Letztendlich geht es um eine ehrliche Abwägung: Was kostet es, diese Quelle in einen brauchbaren Zustand zu bringen, und was bringt sie dem Unternehmen?

Wenn Sie eine Datenquelle haben, bei der die Bereinigung und Integration Wochen dauern würde, die Qualität danach trotzdem fragwürdig bleibt, und das Unternehmen ohnehin nur gelegentlich auf diese Daten angewiesen ist, dann ist die Antwort klar: Diese Quelle ist nicht das richtige Investment.

Es ist nicht unmöglich, fast jede Datenquelle irgendwann brauchbar zu machen. Aber es ist oft nicht sinnvoll.

## Der richtige Umgang damit

Wir empfehlen, Datenquellen bewusst zu bewerten, bevor Sie mit umfangreicher Bereinigung beginnen. Schauen Sie sich zunächst an: Gibt es Dokumentation? Wie ist die historische Konsistenz? Wie hoch ist die Fehlerrate? Können Sie validieren? Und wie abhängig ist das Wissen von einzelnen Personen?

Wenn eine Quelle bei mehreren dieser Punkte Rot zeigt, überlegen Sie, ob sie wirklich im Projekt mitgenommen werden sollte. Manchmal ist das Beste, was Sie tun können, eine Datenquelle bewusst auszuschließen und sich stattdessen auf Quellen zu konzentrieren, die einen stabilen Fundus bieten.

Wir helfen Unternehmen gerne dabei, diese Bewertung vorzunehmen und zu entscheiden, welche Datenquellen es wirklich wert sind, integriert zu werden. [Sprechen Sie mit uns](/kontakt), wenn Sie unsicher sind, welche Ihrer Quellen das Fundament einer neuen Datenstrategie bilden sollten.