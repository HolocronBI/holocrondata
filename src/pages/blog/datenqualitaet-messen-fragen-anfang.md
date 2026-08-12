---
layout: ../../layouts/BlogPost.astro
title: "Datenqualität messen: Welche Fragen man sich zu Beginn stellen sollte"
excerpt: "Datenqualität zu messen ist komplex. Wir zeigen, welche Fragen Unternehmen sich stellen sollten, um einen echten Überblick zu gewinnen."
date: 2026-08-12
tag: Daten verstehen
readTime: 5
---

## Warum Datenqualität messen die Grundlage ist

Viele Unternehmen arbeiten mit Daten, ohne wirklich zu wissen, wie zuverlässig diese Daten sind. Das ist ein häufiges Problem. Man sammelt Informationen in verschiedenen Systemen, nutzt sie für Entscheidungen — und irgendwann merkt man, dass etwas nicht stimmt. Eine Kennzahl passt nicht ins Bild, Berichte widersprechen sich, oder Mitarbeiter verlassen sich nicht mehr auf die Zahlen. Das ist der Moment, in dem Datenqualität plötzlich sehr wichtig wird.

Der Fehler liegt häufig darin, dass man versucht, die Qualität der Daten zu verbessern, ohne vorher zu verstehen, was "Qualität" für das eigene Unternehmen überhaupt bedeutet. Wir empfehlen, vorher grundlegende Fragen zu klären. Das spart Zeit, Ressourcen und führt zu realistischen Ergebnissen.

## Die erste Frage: Welche Daten sind überhaupt kritisch?

Nicht alle Daten im Unternehmen sind gleich wichtig. Eine Telefonnummer kann falsch sein, und es schadet niemandem. Eine Kundennummer, die fehlerhaft ist, kann dagegen erhebliche Probleme auslösen — Rechnungen gehen an die falschen Personen, Reportings stimmen nicht, Verträge werden nicht richtig zugeordnet.

Wir raten, zuerst eine Bestandsaufnahme zu machen: Welche Daten fliessen in kritische Geschäftsprozesse ein? Das können Kundeninformationen sein, Verkaufszahlen, Lagerbestände oder Finanzdaten. Welche Auswirkungen hat es, wenn diese Daten falsch sind? Ein Unternehmen mit vielen Kundenbeziehungen wird andere kritische Felder haben als ein Produktionsbetrieb.

Ein praktisches Beispiel: Ein mittelständischer Vertriebsleiter verlässt sich darauf, dass er aus der CRM-Datenbank weiss, welche Kunden im nächsten Quartal wichtige Verträge abschliessen. Wenn diese Informationen unvollständig oder veraltet sind, trifft er falsche Entscheidungen bei der Ressourcenplanung. Das ist unmittelbar geschäftskritisch. Das E-Mail-Feld derselben Kunden kann zu 30 Prozent leer sein — und das ist zwar ärgerlich, aber nicht geschäftskritisch.

Diese Unterscheidung ist entscheidend. Nur wenn wir verstehen, was wirklich wichtig ist, können wir Qualitätsmassnahmen sinnvoll priorisieren.

## Die zweite Frage: Wo entstehen die Fehler?

Daten werden nicht einfach fehlerhaft geboren. Irgendwo im Prozess geht etwas schief. Das kann beim Erfassen geschehen — etwa wenn ein Mitarbeiter Kundendaten am Telefon aufnimmt und die Handschrift nicht gut lesbar ist. Es kann beim Übertragen passieren, wenn Daten von einem System ins andere wandern und dabei etwas verloren geht. Oder es kann bei der Verarbeitung schief gehen, wenn automatische Abgleiche nicht korrekt funktionieren.

Wir empfehlen, die Datenquellen zu kartografieren: Wo kommen die kritischen Daten her? Wer erfasst sie? Wie viele Systeme sind beteiligt, bis die Daten dort ankommen, wo sie gebraucht werden?

In einem typischen Szenario könnte das so aussehen: Kundeninformationen werden zuerst im Webformular erfasst, dann mit dem CRM-System abgeglichen, später an die Fakturierungssoftware weitergeleitet und irgendwann ins Data-Warehouse für Analysen übernommen. An jeder Station können Fehler entstehen — leere Felder, Duplikate, Formatierungsprobleme, unerkannte Sonderzeichen.

Wer diese Schwachstellen kennt, kann gezielt handeln. Manchmal ist die Lösung eine bessere Schulung bei der Erfassung. Manchmal braucht es eine Validierungsregel im System. Manchmal hilft nur ein neuer Abgleichsprozess.

## Die dritte Frage: Wie messen wir Qualität konkret?

Jetzt wird es konkret. Wir müssen definieren, was Datenqualität überhaupt ist. Das hört sich selbstverständlich an, ist es aber oft nicht. Ein Feld, das leer sein darf, ist nicht schlecht — es ist korrekt. Ein Geburtsdatum, das in der Zukunft liegt, ist dagegen fehler haft.

Wir empfehlen, für jedes kritische Datenfeld Kriterien festzulegen. Das können sein: Ist das Feld gefüllt? Hat der Eintrag das richtige Format (z. B. ist das Datum im Format TT.MM.JJJJ)? Passt der Wert zum erwarteten Wertebereich? Ist der Eintrag eindeutig, oder gibt es Duplikate?

Ein Beispiel: Bei Kundennummern könnte das Kriterium lauten, dass jede Nummer eindeutig sein muss und exakt neun Ziffern haben soll. Bei E-Mail-Adressen könnte man prüfen, ob das Format stimmt (mit @ und Punkt), ob die Adresse eindeutig ist und ob sie nicht als ungültig markiert wurde.

Diese konkrete Definition ist wichtig, weil sie messbar ist. Man kann dann sagen: 95 Prozent aller Kundennummern erfüllen unsere Kriterien. Das ist eine klare Aussage, mit der man arbeiten kann.

## Die vierte Frage: Was ist ein realistischer Standard?

Nach der Messung stellt sich eine unbequeme Frage: Welche Qualität ist gut genug? Das hängt von vielen Faktoren ab — von den Kosten für Verbesserungen, vom Reifegrad der Prozesse und von der Branche.

In vielen Unternehmen ist die Erwartung, dass Daten zu 100 Prozent perfekt sind. Das ist unrealistisch. Selbst wenn man sehr gute Prozesse hat, werden immer einige Fehler durchrutschen. Ein realistischer Standard liegt oft zwischen 90 und 98 Prozent — je nachdem, wie kritisch die Daten sind.

Wir empfehlen, diese Standards gemeinsam mit den Verantwortlichen festzulegen: dem Geschäftsführer, den Abteilungsleitern, der IT. Jede Seite hat andere Perspektiven. Der Vertriebsleiter will zuverlässige Kundendaten. Die IT weiss, wie aufwändig es ist, das zu erreichen. Der Controller interessiert sich für die wirtschaftliche Seite. Ein gemeinsamer Standard ist ein Kompromiss, aber ein bewusster.

## Die fünfte Frage: Wie prüft man regelmässig?

Datenqualität ist kein Projekt mit Anfang und Ende. Sie ist ein kontinuierlicher Prozess. Einmal gemessen, und dann ist Ruhe — das funktioniert nicht. Mit der Zeit schleichen sich neue Fehler ein, alte Prozesse veralten, neue Systeme kommen hinzu.

Wir empfehlen, regelmässige Checks einzuplanen. Das kann monatlich, vierteljährlich oder halbjährlich sein — je nachdem, wie volatil die Daten sind. Bei Kundendaten mit vielen manuellen Einträgen könnte monatlich sinnvoll sein. Bei Lagerbeständen, die automatisch aktualisiert werden, reicht vielleicht vierteljährlich.

Diese Checks sollten automatisiert sein, wenn möglich. Ein Dashboard, das zeigt, wie viele Datensätze fehlerhaft sind, ist wertvoll. Es gibt schnell Überblick und zeigt Trends. Steigt die Fehlerquote, weiss man, dass etwas im Prozess schiefgeht. Sinkt sie, zeigt das, dass Verbesserungen wirken.

## Was das für die Praxis bedeutet

Datenqualität zu messen braucht Zeit und klare Gedanken. Aber diese Investition zahlt sich aus. Unternehmen, die ihre Daten verstehen, treffen bessere Entscheidungen. Sie verlassen sich auf ihre Zahlen. Mitarbeiter arbeiten effizienter, weil sie nicht ständig mit fehlerhaften Informationen kämpfen.

Der Weg dahin beginnt mit Fragen: Was ist kritisch? Wo entstehen Fehler? Wie definieren wir Qualität? Was ist realistisch? Wie kontrollieren wir kontinuierlich?

Wer diese Fragen beantwortet hat, weiss, wo er steht und wo es sinnvoll ist, anzufangen. Das ist der erste Schritt zu besserer Datenqualität — und damit zu besseren Entscheidungen.

Wenn Sie Ihre Daten grundlegend verstehen und bewerten möchten, [kontaktieren Sie uns](/kontakt). Wir helfen Ihnen, einen realistischen Plan zu entwickeln.