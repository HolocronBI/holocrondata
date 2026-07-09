---
layout: ../../layouts/BlogPost.astro
title: "Wie man eine Datenpipeline für den Mittelstand aufbaut ohne IT-Abteilung"
excerpt: "Viele Unternehmen glauben, dass eine professionelle Datenpipeline nur mit großem IT-Team möglich ist. Wir zeigen, wie es auch anders geht."
date: 2026-07-09
tag: Automatisierung
readTime: 5
---

## Das Problem: Daten fließen in alle Richtungen

In mittelständischen Unternehmen ist es ein alltägliches Szenario: Verkaufszahlen sitzen in einem System, Kundendaten in einem anderen, Lagerstände in einem dritten. Der Geschäftsführer braucht am Montag einen Report, die Assistentin verbringt zwei Stunden damit, Dateien herunterzuladen, in Excel zu öffnen und per Hand zusammenzuführen. Am nächsten Tag liegen die Zahlen bereits wieder falsch, weil sich eine Quelle inzwischen aktualisiert hat.

Dieses Problem nennt sich Datenfragmentierung, und es ist teuer. Nicht nur zeitlich — sondern auch in den Entscheidungen, die auf veralteten oder falschen Daten basieren.

Viele Unternehmen denken dann automatisch: Wir brauchen einen Data Engineer, ein großes IT-Team, komplexe Infrastruktur. Das ist ein Missverständnis. Eine funktionierende Datenpipeline für den Mittelstand lässt sich auch ohne klassische IT-Abteilung aufbauen — mit den richtigen Werkzeugen und einem klaren Plan.

## Was ist eine Datenpipeline eigentlich?

Wir sprechen hier nicht von Science-Fiction. Eine Datenpipeline ist im Grunde nichts anderes als ein automatisierter Wasserkanal für Informationen: Daten fließen von einer Quelle in die nächste, werden unterwegs überprüft und bereinigt, landen schließlich dort an, wo sie gebraucht werden.

Statt dass die Assistentin jeden Morgen manuell Dateien zusammenfügt, übernimmt ein System diese Aufgabe. Die Daten sind dann immer aktuell, immer im gleichen Format, immer vollständig. Das spart Zeit, reduziert Fehler und ermöglicht bessere Entscheidungen.

Für den Mittelstand ist oft nicht mehr nötig: Daten aus den Kernquellen (dem ERP-System, der Buchhaltung, dem CRM) automatisch sammeln, in einer Struktur zusammenführen, die jeder versteht, und dann in die Tools bringen, die Sie ohnehin nutzen — Excel, Power BI, ein Reporting-Dashboard.

## Die drei Schichten einer einfachen Pipeline

Wir sehen es so: Eine funktionierende Pipeline braucht drei Ebenen.

Erste Ebene: **Die Quellen**. Das sind Ihre Systeme — das ERP, die Buchhaltungssoftware, vielleicht Shopify oder eine Kundenmanagement-Lösung. Jedes dieser Systeme hat Schnittstellen, durch die man Daten herausholen kann. Das funktioniert heute bei fast allen modernen Tools.

Zweite Ebene: **Der Verteiler**. Hier landen alle Daten, werden einheitlich gespeichert, überprüft und aufbereitet. Das ist nicht kompliziert — ein einfaches Cloud-Lager, oft sogar eine lokale Datenbank, genügt. Die Arbeit hier ist konzeptionell, nicht technisch: Welche Daten brauche ich? In welchem Format? Wie stelle ich sicher, dass Kundennummern überall gleich lauten?

Dritte Ebene: **Die Ausgabe**. Das ist das Dashboard, die Excel-Arbeitsmappe, der automatische Bericht, der jeden Montag in den Posteingang kommt. Das ist der Ort, wo Entscheider tatsächlich mit den Daten arbeiten.

## Welche Tools sind praktisch?

Wir brauchen hier nicht zu verstecken, dass es spezialisierte Tools gibt. Aber man muss nicht den teuersten Weg gehen.

Für die **Verbindung der Quellen** gibt es heutzutage Anbieter, die das einfach halten. Zapier etwa funktioniert wie ein Postbote zwischen Anwendungen — man sagt ihm: "Wenn in System A etwas passiert, kopiere das zu System B." Das ist per Mausklick zu konfigurieren, kein Code nötig. Ähnlich arbeiten Make, Integromat oder auch die hauseigenen Integrationsfunktionen moderner Anwendungen.

Für die **zentrale Sammlung** sind Cloud-Datenbanken wie Google BigQuery, Amazon Redshift oder auch einfach ein SQL-basiertes System völlig ausreichend. Diese sind heute günstig und skalieren automatisch mit Ihren Anforderungen.

Für die **Ausgabe** können Sie bei Power BI bleiben, bei Looker, oder schlicht bei Excel mit automatischen Aktualisierungen. Der Fokus liegt nicht auf der Technik des Tools, sondern darauf, dass die richtigen Zahlen drin sind.

## Der realistische Weg für mittelständische Unternehmen

Wir würden es so angehen:

**Schritt eins: Aufräumen**. Sie müssen verstehen, welche Daten in welchen Systemen leben. Das ist weniger technisch als organisatorisch: Welche Kundennummern nutzen wir? Wie heißen unsere Produktkategorien? Wo sind unsere Kernzahlen definiert? Oft sind diese Fragen ungeklärt, und das ist das echte Hindernis.

**Schritt zwei: Eine kleine Pilot-Pipeline**. Nicht gleich alles automatisieren, sondern mit einer Anforderung anfangen. Vielleicht: "Jeden Freitag wollen wir eine aktuelle Übersicht unserer Verkäufe dieser Woche, aufgeschlüsselt nach Region und Produkt." Das ist klein, messbar, und zeigt schnell Mehrwert.

**Schritt drei: Automatisierung etablieren**. Hat die Pilot-Pipeline funktioniert und Vertrauen aufgebaut, können Sie sie erweitern. Jetzt kommen neue Anforderungen hinzu: Lagerbestände, Kundenumsätze, Zahlungsausfälle.

**Schritt vier: Die Kultur ändern**. Das Wichtigste: Ihre Mitarbeiter müssen lernen, dass sie der Pipeline trauen können. Das dauert, ist aber entscheidend.

## Was braucht man wirklich, um das zu starten?

Keinen neuen Mitarbeiter. Nicht mehr Budget für die IT-Abteilung. Was Sie brauchen, ist:

**Klare Anforderungen** vom Geschäftsführer oder Controller: Was sollen wir täglich, wöchentlich, monatlich sehen? Wer braucht welche Daten bis wann?

**Einen Koordinator**. Das kann eine Person sein, die die Anforderungen sammelt, mitdenkt, welche Tools passen, und den Überblick behält. Das ist keine IT-Person, das ist jemand aus dem Geschäft mit Interesse für Struktur.

**Die richtigen Tools**. Nicht teuer, aber auch nicht umsonst. Ein Budget von wenigen Hundert Euro pro Monat ist oft ausreichend.

**Etwas Geduld**. Im ersten Monat werden Sie Fehler finden, Prozesse neu denken, Anforderungen klären. Das ist normal. Nach drei, vier Monaten funktioniert es meist solide.

## Das Ergebnis

Wenn die Pipeline läuft, ändert sich spürbar: Montag morgens hat der Geschäftsführer aktualisierte Zahlen ohne Umschweife. Die Assistentin spart täglich eine bis zwei Stunden. Fehler, die vorher passiert sind, treten nicht mehr auf. Und Entscheidungen basieren auf echten, aktuellen Daten, nicht auf Vermutungen oder veralteten Reports.

Für viele mittelständische Unternehmen ist das ein unterschätzter Wettbewerbsvorteil. Während andere noch auf den Bericht warten, haben Sie bereits reagiert.

## Nächste Schritte

Wenn Sie überlegen, ob eine Datenpipeline auch in Ihrem Unternehmen Sinn macht, hilft es, erst einmal konkrete Anforderungen aufzuschreiben: Welche Daten brauchen Sie dringend zusammengefasst? Wo gehen heute am meisten Stunden in manuelle Arbeit? Wo passieren die meisten Fehler?

Wir helfen gerne bei dieser ersten Analyse und zeigen auf, welcher Weg für Sie realistisch ist. [Sprechen Sie uns an](/kontakt) — unverbindlich und ohne Druck.