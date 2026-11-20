---
layout: ../../layouts/BlogPost.astro
title: "Datenqualität messen: Welche Fragen man sich zu Beginn stellen sollte"
excerpt: "Datenqualität ist nicht selbstverständlich. Wir zeigen, welche grundlegenden Fragen Unternehmen klären sollten, bevor sie mit dem Messen anfangen."
date: 2026-11-20
tag: Daten verstehen
readTime: 5
---

## Die unsichtbare Last: Warum Datenqualität oft überraschend wird

Viele Unternehmen merken erst spät, dass ihre Daten ein echtes Problem sind. Ein Geschäftsführer möchte eine wichtige Entscheidung treffen, braucht aber eine zuverlässige Auswertung – und stellt fest, dass die Daten dafür einfach nicht sauber sind. Die Zahlen widersprechen sich, es gibt Lücken, doppelte Einträge oder veraltete Informationen. Was dann folgt, ist oft Frustration und teure Nacharbeit.

Das Problem: Viele Unternehmen versuchen, Datenqualität zu messen, ohne sich vorher überhaupt klarzumachen, was sie eigentlich messen wollen. Sie starten mit technischen Checklisten, statt sich erst mal die richtigen Fragen zu stellen.

Wir zeigen, welche Fragen wirklich wichtig sind – und zwar am Anfang, wenn es noch sinnvoll ist.

## Frage 1: Welche Daten sind für uns überhaupt geschäftskritisch?

Nicht alle Daten sind gleich wertvoll. Ein Unternehmen hat hunderte von Datenfeldern – in Kundendatenbanken, Verkaufssystemen, Lagerverwaltung, Buchhaltung. Aber nicht jedes Feld ist gleich wichtig.

Wir empfehlen, zunächst zu unterscheiden: Welche Daten treiben unsere Entscheidungen an? Welche Informationen brauchen wir für operative Prozesse, die täglich laufen? Welche sind eher nice-to-have?

Ein typisches Beispiel: Ein Einzelhandelsunternehmen hat in seinem Kundensystem dutzende Felder – Anrede, Geburtsdatum, Lieblingsfarbe, letzte Bestellung, Adresse, Telefon. Aber nur wenige davon sind wirklich kritisch. Die Adresse ist kritisch, weil sie für die Lieferung notwendig ist. Die Bestellhistorie ist kritisch, weil sie Umsatz und Trends zeigt. Das Geburtsdatum ist dagegen optional. Die Lieblingsfarbe ist Marketing-Nischen-Information.

Ist die Frage beantwortet – welche Daten sind wirklich geschäftskritisch – können wir die Messung fokussieren. Das spart Zeit und vermeidet Lärm durch zu viele Metriken.

## Frage 2: Für wen ist die Datenqualität wichtig?

Datenqualität ist nicht abstrakt. Sie ist immer für jemanden wichtig – und dieser Jemand hat konkrete Anforderungen.

Wir unterscheiden hier zwischen verschiedenen Rollen: Der Vertriebsleiter braucht zuverlässige Kundendaten, um echte Opportunities zu erkennen. Der Controller braucht korrekte Zahlendaten für die Bilanz. Der Lagerleiter braucht genaue Bestandsinformationen, sonst kann er nicht planen. Der Kundenservice braucht aktuelle Kontaktdaten, sonst erreicht man den Kunden nicht.

Jede dieser Rollen hat unterschiedliche Anforderungen an Datenqualität. Für den Controller ist eine Dezimalstelle manchmal kritisch. Für den Vertrieb ist es wichtiger, dass die Telefonnummer stimmt. Für den Lagerleiter ist die Aktualität der Daten entscheidend – eine alte Bestandszahl ist nutzlos.

Wenn wir diese Perspektiven nicht verstehen, messen wir am Bedarf vorbei. Wir sollten also mit den Menschen sprechen, die täglich mit den Daten arbeiten. Das ist nicht optional – das ist der erste Schritt.

## Frage 3: Wie definieren wir eigentlich "sauber"?

Das klingt einfach, ist es aber nicht. Was ist eine gute Datenqualität?

Für manche Unternehmen heisst das: Keine Duplikate. Für andere: Alle Felder sind ausgefüllt. Für wieder andere: Die Daten sind maximal eine Woche alt. Oder: Das System akzeptiert nur die richtigen Datenformate.

Wir sehen hier oft ein großes Durcheinander. Teams verwenden unterschiedliche Standards, ohne es zu merken. Der eine Mitarbeiter trägt Nummern so ein: 030 1234567, der andere: 030-1234567, ein dritter: (030) 1234567. Alle sind technisch gültig, aber für eine Datenbank ist das ein Problem, wenn man später nach exakten Treffern sucht.

Drum sollte die Frage sein: Was bedeutet "vollständig", "korrekt" und "aktuell" für jeden einzelnen kritischen Datensatz? Diese Definition muss geschrieben werden – als echte, konkrete Regel. Nicht vage, sondern messbar.

Beispiel: "Der Kundenname muss vorhanden sein und darf keine Sonderzeichen enthalten, die das System nicht verarbeitet." Das ist klar. Oder: "Die Lieferadresse muss vorhanden sein und die Postleitzahl muss mit einem führenden Code beginnen, um die Region zu klassifizieren." Auch das ist klar.

## Frage 4: Wo kommen die Daten her – und wo gehen sie hin?

Datenqualität entsteht nicht aus dem Nichts. Sie hängt ab vom gesamten Datenfluss: Wie kommen die Daten rein? Wer erfasst sie? In welchem Format? Werden sie unterwegs verarbeitet? Welche Systeme berühren sie?

Often liegt das Problem gar nicht in der Datenbank, sondern am Eingang. Vielleicht erfasst der Verkäufer am Telefon die Kundendaten zu schnell und macht Fehler. Oder der Kunde trägt die Daten selbst auf der Website ein und verliert die Geduld bei zu vielen Feldern. Oder die Daten werden aus einem alten System übergeben und das Format passt nicht.

Wir empfehlen, einen einfachen Datenfluss zu zeichnen: Wo entsteht das Datum? Wer trägt es ein? Welche Systeme berühren es? Wo wird es gelesen oder weiterverarbeitet?

Often zeigt sich dabei schnell: Der Fehler sitzt nicht am Ort der Messung, sondern viel früher. Eine fehlerhafte Eingabemaske führt zu Problemen, ein unklarer Prozess führt zu Duplikaten, eine fehlende Integration zwischen Systemen führt zu veralteten Daten.

## Frage 5: Was kostet schlechte Qualität – und was kostet die Verbesserung?

Die letzte, aber vielleicht wichtigste Frage: Lohnt sich der Aufwand?

Schlechte Datenqualität kostet echtes Geld. Ein fehlerhafter Kundendatensatz führt zu falscher Lieferadresse, die Sendung kommt nicht an, der Kunde ist unzufrieden, es gibt Reklamationen. Doppelte Datensätze führen zu doppelten Rechnungen, Verwirrung, manueller Nacharbeit. Veraltete Bestandsdaten führen zu Überbestellungen oder leeren Regalen.

Aber auch die Verbesserung kostet etwas: Zeit für die Diagnose, möglicherweise neue Prozesse, Schulung, vielleicht neue Software. Es geht also um die Frage: Wie sehr tut uns die schlechte Qualität weh? Und wie teuer ist es, das zu beheben?

Wir empfehlen, das bewusst zu machen. Welche Prozesse sind betroffen? Wie viel Nacharbeit entsteht? Welche Entscheidungen sind unsicher geworden? Dann: Was würde es kosten, das zu beheben?

Das ist keine exakte Wissenschaft, aber es hilft, die richtige Priorisierung zu treffen. Manchmal zeigt sich, dass ein Problem gar nicht so schlimm ist wie gedacht. Manchmal zeigt sich das Gegenteil – dass es viel teurer ist, es zu ignorieren.

## Der Anfang ist die halbe Arbeit

Wir sehen es immer wieder: Unternehmen, die mit technischen Messungen starten, ohne diese fünf Fragen zu klären, verschaffen sich später selbst Probleme. Sie messen die falschen Dinge, für die falschen Menschen, mit den falschen Definitionen.

Es lohnt sich, einen Schritt zurückzutreten. Mit den richtigen Fragen anfangen. Mit den Menschen sprechen, die mit den Daten arbeiten. Die Anforderungen aufschreiben. Den Fluss verstehen. Dann die Kosten bewerten.

Dann erst kann man sinnvoll messen – und dann bringen die Messungen auch echten Nutzen.

Wenn Sie beginnen möchten, Ihre Datenqualität zu verbessern und benötigen Unterstützung bei dieser grundlegenden Orientierung, [sprechen Sie mit uns](/kontakt). Wir helfen, die richtigen Fragen zu stellen und die Antworten produktiv umzusetzen.