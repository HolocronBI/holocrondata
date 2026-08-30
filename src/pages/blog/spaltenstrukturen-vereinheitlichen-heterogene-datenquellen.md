---
layout: ../../layouts/BlogPost.astro
title: "Spaltenstrukturen vereinheitlichen: Wie man heterogene Datenquellen harmonisiert"
excerpt: "Unterschiedliche Systeme erzeugen unterschiedliche Datenformate. Wir zeigen, wie man Spaltenstrukturen harmonisiert und aus dem Chaos Ordnung schafft."
date: 2026-08-30
tag: Daten bereinigen
readTime: 5
---

## Das Problem der zerfragmentierten Spaltenlandschaft

Wenn ein Unternehmen über mehrere Jahre gewachsen ist, entstehen unweigerlich Inseln in der Datenwelt. Das ERP-System speichert Kundennamen anders als das CRM, die Buchhaltung nutzt eine eigene Struktur für Adressen, und der E-Commerce arbeitet mit völlig anderen Feldnamen. Das Ergebnis: Spaltenstrukturen, die zwar ähnliches enthalten, aber nicht zusammenpassen.

Wir sehen dieses Problem häufig, wenn Unternehmen ihre Daten erstmals in ein zentrales Analytics-System integrieren möchten. Plötzlich wird klar, dass das, was überall "Kunde" heißt, völlig unterschiedlich definiert und gespeichert ist. Ein System nutzt eine eindeutige Kundennummer, ein anderes arbeitet mit E-Mail-Adressen als Schlüssel. Mal ist der Firmenname zusammen mit dem Ansprechpartner in einem Feld, mal getrennt. Zeitstempel in verschiedenen Formaten. Länderkodesysteme, die nicht kompatibel sind.

Ohne eine Vereinheitlichung dieser Strukturen wird jede Analyse zur Frustration: Man erhält unterschiedliche Ergebnisse je nachdem, welche Quelle man nutzt. Die Zahlen stimmen nicht überein. Berichte widersprechen sich. Vertrauen in die Daten sinkt schnell.

## Warum Spaltenharmonisierung mehr ist als Umbenennung

Manche Unternehmen glauben, dass das Problem gelöst ist, wenn man Spalten einfach umbenennt. Das ist ein Missverständnis. Echte Harmonisierung geht viel tiefer.

Wir unterscheiden hier zwischen mehreren Ebenen. Die erste Ebene ist tatsächlich die Nomenklatur: Alle Spalten bekommen einheitliche, aussagekräftige Namen. Statt "Kd_Nr", "CustomerID" und "customer_key" nutzt man überall "customer_id". Das wirkt trivial, ist aber notwendig.

Die zweite Ebene ist das Datenformat. Eine Spalte "Geburtsdatum" ist nur harmonisiert, wenn überall das gleiche Datumsformat verwendet wird. Wenn System A das Format JJJJMMTT nutzt, System B aber TT.MM.JJJJ, und System C nur das Jahr speichert, dann kann man diese Daten nicht einfach zusammenfassen. Man muss sie alle in ein einheitliches Format konvertieren.

Die dritte Ebene ist die semantische Bedeutung. Hier wird es knifflig. Wenn ein System den Umsatz brutto speichert und ein anderes netto, müssen wir wissen, welches System welches Format nutzt. Ohne diese Information sind Vergleiche unmöglich. Ähnliches gilt für Währungen, Maßeinheiten oder Klassifizierungen.

Die vierte Ebene ist die Granularität. Ein CRM speichert möglicherweise nur die oberste Hierarchieebene einer Kundenbeziehung, während das ERP bis zur einzelnen Adresse oder zum einzelnen Ansprechpartner hinuntergeht. Diese Unterschiede in der Detailtiefe müssen bewusst gemacht und geklärt werden.

## Praktischer Weg zur Harmonisierung

Wie geht man konkret vor? Zunächst dokumentiert man alle relevanten Datenquellen und ihre Spaltenstrukturen. Das bedeutet: Eine vollständige Liste aller Quellen mit allen Spalten, deren Datentypen, Wertebereichen und – wichtig – ihrer fachlichen Bedeutung.

Daraus entsteht ein Datenquellen-Inventar. Ein Unternehmen mit SAP, Salesforce, Dynamics und noch drei Legacy-Systemen hat schnell 300 bis 400 verschiedene Spalten auf den Tisch. Viele enthalten ähnliches, keine ist perfekt, alle haben Lücken und Besonderheiten.

Der nächste Schritt ist die Zieldefinition: Wie soll die harmonisierte Struktur aussehen? Das ist nicht technisch, sondern geschäftlich zu klären. Was sind die kritischen Entitäten – Kunden, Produkte, Aufträge, Kontakte? Wie sind diese definiert? Welche Attribute muss jede Entität haben?

Aus dieser fachlichen Zieldefinition entsteht dann ein Datenmodell. Das ist die Blaupause, nach der alle Quellen zusammengebracht werden. Wichtig: Dieses Modell sollte nicht nach einer einzelnen Quelle kopiert sein. Es sollte das beste aus allen sein – und pragmatisch bleiben. Ein perfektes, aber unmöglich umzusetzendes Modell hilft niemandem.

Dann kommen die Transformationen. Für jede Quelle wird definiert: Welche ihrer Spalten werden auf welche Spalten des Zielmodells abgebildet? Welche Umwandlungen, Berechnungen oder Anreicherungen sind nötig? Welche Spalten fallen weg, weil sie im Zielmodell keine Entsprechung haben?

Ein konkretes Beispiel: Das ERP speichert Adressen als Freitext in einer Spalte "AdressenZeile1" und "AdressenZeile2". Das CRM strukturiert in Straße, Hausnummer, Postleitzahl, Stadt, Land. Die Zielstruktur soll nach dem CRM-Muster sein. Das bedeutet, dass aus dem ERP-Text die einzelnen Bestandteile extrahiert werden müssen. Das ist möglich, braucht aber Logik und verursacht Fehlerquoten. Man muss das bewusst entscheiden: Ist die genauere Struktur das Risiko wert, oder geben wir die Feinstruktur auf und speichern alles als Text, um Fehler zu vermeiden?

## Typische Herausforderungen

Wir sehen immer wieder ähnliche Probleme bei diesem Prozess. Erstens: Die fachliche Zieldefinition stockt, weil sich verschiedene Abteilungen nicht einigen können. Der Vertrieb hat eine Definition von "Kunde", die Buchhaltung eine andere. Das ist normal, muss aber gelöst werden, bevor man mit Daten arbeitet.

Zweitens: Historische Daten. Wenn ein Feld früher anders gepflegt wurde als heute, hat man zwei verschiedene Formate in derselben Spalte. Das macht Harmonisierung schwierig. Man muss entscheiden: Transformieren wir auch alte Daten, oder nutzen wir nur die neuen?

Drittens: Fehlende oder unstimmige Daten. Manche Quellen speichern bei Kundenadressen nur das Land, nicht die Stadt. Manche Systeme erlauben NULL-Werte, andere speichern "keine Angabe". Das muss einheitlich behandelt werden.

Viertens: Laufende Änderungen. Systeme werden upgedatet, neue Spalten entstehen, alte werden umbenannt. Die Harmonisierungslogik muss wartbar bleiben und reagieren können auf Änderungen in den Quellen.

## Technische vs. organisatorische Lösung

Ein wichtiger Punkt: Manche Unternehmen meinen, das Problem technisch zu lösen, indem sie eine Datenpipeline bauen, die automatisch transformiert. Das ist notwendig, aber nicht ausreichend. Vorher muss geklärt sein, was transformiert werden soll und wie.

Wir empfehlen, den Prozess mit Dokumentation zu beginnen: Was ist die Quelle? Was ist das Ziel? Wie unterscheiden sie sich? Dann erst die technische Umsetzung. Eine Automatisierung on top of Chaos ist kein Erfolg – es ist nur schnelleres Chaos.

Nützlich ist auch eine "Single Source of Truth" für die Definitionen. Ein Datenverzeichnis oder Glossar, in dem die harmonisierten Spalten dokumentiert sind: Name, Datentyp, Wertebereiche, Quelle, Transformationen. Das wird zur Referenz für jeden, der mit den Daten arbeitet.

## Der nächste Schritt

Spaltenharmonisierung ist kein einmaliges Projekt, sondern eine laufende Disziplin. Neue Systeme kommen hinzu. Anforderungen ändern sich. Fehler in den Daten entstehen. Das ist normal.

Wenn das Ihre Situation beschreibt – heterogene Systeme, zerfragte Daten, Zweifel an Analysen – dann kann es sinnvoll sein, einen strukturierten Blick darauf zu werfen. Wir helfen Unternehmen, ihre Spaltenlandschaft zu ordnen und aus Chaos zu Struktur zu kommen.

Falls Sie das Thema vertiefen möchten oder unsicher sind, wo Ihre kritischsten Probleme liegen: [Kontaktieren Sie uns](/kontakt). Wir schauen uns Ihre Situation an und entwickeln gemeinsam einen Weg nach vorne.