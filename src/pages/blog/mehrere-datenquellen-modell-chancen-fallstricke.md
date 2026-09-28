---
layout: ../../layouts/BlogPost.astro
title: "Mehrere Datenquellen in einem Modell: Chancen und Fallstricke"
excerpt: "Unterschiedliche Datenquellen in einem BI-Modell zu verbinden, eröffnet neue Analysemöglichkeiten – birgt aber auch erhebliche Risiken. Wir zeigen, wie es richtig funktioniert."
date: 2026-09-28
tag: Modelle & Reports
readTime: 5
---

## Die Realität vieler Unternehmen

In den meisten mittleren Unternehmen existieren Daten über mehrere Systeme verteilt. Das ERP-System speichert die Finanzdaten, das CRM kennt die Kundeninformationen, und die Zeiterfassung läuft in einer separaten Lösung. Wer einen vollständigen Überblick über sein Geschäft braucht, muss diese Quellen zusammenführen – und das ist der Punkt, wo viele Projekte an ihre Grenzen stoßen.

Die Verlockung liegt auf der Hand: Ein großes, integriertes Datenmodell, das alle Informationen zusammenbringt. Darin könnten wir die Produktivität der Mitarbeiter gegen ihre Kundenbetreuung abgleichen, Kosten direkt mit Erträgen verknüpfen, und komplexe Fragen in wenigen Minuten beantworten. Theoretisch klingt das ideal.

Praktisch entstehen dabei Probleme, die oft erst später sichtbar werden – wenn die Reports bereits im täglichen Gebrauch sind und Entscheider bereits ihre Geschäftsentscheidungen darauf stützen.

## Warum mehrere Quellen verlockend sind

Wir sehen die Chancen klar: Mit integrierten Daten lassen sich Zusammenhänge erkennen, die in isolierten Sichten unsichtbar bleiben. Ein Unternehmen könnte beispielsweise feststellen, dass Kunden mit längeren Lieferzeiten ein höheres Umsatzwachstum zeigen – ein Erkenntnispaar, die nur durch die Verbindung von CRM, Logistik und Finanzdaten möglich ist. Solche Erkenntnisse können wettbewerbsentscheidend sein.

Auch operativ bietet ein verknüpftes Modell Vorteile: Statt mehrerer unterschiedlicher Dashboards können Geschäftsführer in einer einzigen Oberfläche navigieren. Das reduziert Verwirrung und spart Zeit. Und für Datenteams bedeutet es weniger Wartung – theoretisch.

## Der größte Fallstrick: Datenqualität und Konsistenz

Hier wird es ernst. Jede Datenquelle hat ihre eigenen Qualitätsprobleme. Das ERP-System enthält vielleicht doppelte Kundennummern aus einer Migration vor drei Jahren. Das CRM wurde vor Kurzem migriert und hat Lücken in den historischen Daten. Die Zeiterfassung wird von Mitarbeitern teilweise nur wöchentlich ausgefüllt – mit Schätzwerten.

Wenn wir diese Quellen naiv zusammenbinden, multiplizieren sich die Probleme nicht nur – sie verstärken sich gegenseitig. Eine falsche Kundennummer im ERP führt dazu, dass Umsätze der falschen Person zugerechnet werden. Unvollständige Zeiten im Zeiterfassungssystem bedeuten, dass Rentabilitätsberechnungen auf unvollständigen Daten basieren. Und wer wird diese Fehler bemerken? Erst derjenige, der die Reports hinterfragt.

Wir empfehlen, hier radikal ehrlich zu sein: Vor der Integration muss jede Quelle einzeln bereinigt werden. Das ist aufwendig und unglamourös, aber notwendig.

## Der zweite Fallstrick: Semantische Widersprüche

Auch wenn zwei Datenquellen technisch perfekt zusammengefügt sind, können sie semantisch auseinanderlaufen. Nehmen wir "Kundenwert". Das ERP-System berechnet ihn aus den letzten 12 Monaten tatsächlicher Umsätze. Das CRM kennt aber auch Prognosen für zukünftige Aufträge und zählt diese dazu. Wenn beide Konzepte in einem Modell verwendet werden, entsteht Verwirrung: Welcher Wert ist der "richtige"?

Oder der Begriff "Mitarbeiter": Zählt das HR-System Leiharbeiter mit? Wie ist mit Elternzeitler gerechnet? Im Finanzmodul könnten sie als Vollzeitäquivalente berücksichtigt sein, im HR-System aber anders erfasst. Solche semantischen Lücken führen zu Reports, die mathematisch korrekt sind, aber fachlich falsch interpretiert werden.

## Der dritte Fallstrick: Performance und Komplexität

Mit zunehmender Anzahl von Quellen wird ein Datenmodell exponentiell komplexer. Jede neue Verbindung schafft neue Verknüpfungslogiken, mögliche Duplikate, und ggf. unnötige Vervielfältigungen von Daten. Was anfangs zwei, drei Sekunden zum Laden brauchte, kann schnell zu 30 Sekunden werden.

Schlimmer noch: Die Komplexität wird oft nicht beim ersten Report sichtbar. Sie zeigt sich nach Monaten, wenn mehrere Reports parallel ausgeführt werden, oder wenn plötzlich die Datenmenge um 50 Prozent wächst. Dann ist die Architektur bereits fest verwachsen, und Umgestaltungen werden teuer.

## Wie es richtig geht

Wir empfehlen einen pragmatischen Weg. Nicht alles in einem Modell zusammenfassen, sondern bewusst entscheiden: Welche Verknüpfungen liefern echten Mehrwert? Welche können in separaten Analysen bestehen?

Zum Zweiten: Die Integration schrittweise aufbauen. Mit zwei Quellen starten, gut testen, dann eine dritte hinzufügen. Das reduziert Risiken und macht Probleme früh sichtbar.

Zum Dritten: Datenqualität als Voraussetzung, nicht als Nebenwirkung behandeln. Bevor Quellen verbunden werden, sollten sie einzeln validiert sein. Das bedeutet konkrete Maßnahmen: doppelte Kundennummern deduplizieren, fehlende Werte identifizieren und entscheiden, wie damit umgegangen wird, Standards für Datumsformate durchsetzen.

Und zum Vierten: Dokumentation. Jede Verknüpfung, jede Annahme, jede Geschäftsregel sollte festgehalten sein. Das ist nicht nur für das Wartungsteam wichtig – es schützt auch die Entscheider, die die Reports nutzen, vor unbewussten Fehlinterpretationen.

## Ein Fazit für die Praxis

Mehrere Datenquellen in einem Modell sind kein grundsätzliches Problem – sie sind oft notwendig. Aber sie erfordern Sorgfalt. Ein schlecht integriertes Modell, das schnell zusammengehämmert wurde, kann mehr Schaden anrichten als separate Datensilos. Es wirkt nämlich vertrauenswürdig, obwohl es fehlerhaft sein kann.

Wir raten: Bauen Sie schrittweise, dokumentieren Sie intensiv, und priorisieren Sie Qualität über Geschwindigkeit. Das kostet anfangs mehr Zeit – aber spart danach Jahre an Wartung und verhindert Fehlentscheidungen, die auf falschen Daten basieren.

Wenn Sie sich bei einem BI-Projekt in dieser Situation wiederfinden und unsicher sind, wie die Integration funktioniert oder wo die Risiken liegen, helfen wir gerne weiter. Wir können das Modell mit Ihnen durchdenken, Qualitätsprobleme identifizieren und einen realistischen Plan für die Integration entwickeln.

Sprechen Sie uns an – gerne [auf unserer Kontaktseite](/kontakt).