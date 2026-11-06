# Review und Entscheidungen — 06.11.2026

Ausgangspunkt: `main` bei `a8c3e3cea8abbf1c5bb98fbde7facf1bde12e86e`. Quellcode und tatsächliche Desktop-Startseite auf holocrondata.vercel.app geprüft; Baseline-Build erzeugte 129 Seiten. Im vorhandenen Repository gab es keine AGENTS.md und keine lokalen Änderungen.

| Entscheidung | Befund und Umsetzung |
|---|---|
| Behalten | Astro, statischer Build, bestehende Kontaktadresse und Formspree-ID, nachvollziehbarer Projektablauf, Preisanker 750 / 2.000 EUR. Die zunächst erhaltenen Blogartikel wurden auf anschließenden Nutzerwunsch entfernt. |
| Überarbeiten | Allgemeine Hero-Aussage durch konkreten Nutzen ersetzt. Datenbasis, BI-Reporting und abgegrenzte AI-Piloten bilden drei Angebote. Ein Haupt-CTA führt zur Projektanfrage. |
| Überarbeiten | Persönliche Zusammenarbeit mit vorhandener Berufsrolle BI Analyst beschrieben; keine erfundenen Abschlüsse, Zertifikate, Kunden oder Referenzen. |
| Überarbeiten | Vorhandenes Cockpit nur als ausdrücklich gekennzeichnetes Ansichtsbeispiel. Die bislang nicht ausgelieferte Bilddatei liegt nun in `public/images/`. |
| Überarbeiten | Pakete nennen Voraussetzungen, Korrekturrunden, Leistungsgrenzen und separat zu vereinbarende Leistungen. Keine neuen verbindlichen Beträge. Scale in Individual umbenannt; alter Query-Wert Scale wird weiterhin verstanden. |
| Überarbeiten | Lizenz-FAQ: Pro ist in Microsoft 365 E5 / Office 365 E5 enthalten; Lizenzbedarf hängt von Nutzung/Kapazität ab. Keine pauschale Microsoft-365-Inklusivbehauptung. |
| Überarbeiten | Statt pauschaler Datenschutzgarantien werden Datenzugriffe, Speicherorte, Dienste und Vereinbarungen vor Projektstart geklärt. |
| Überarbeiten | Neue gemeinsame CI für Startseiten, 404 und Rechtsseiten. DE und EN werden statisch gerendert; Rechtstexte bleiben ausdrücklich deutsch. |
| Überarbeiten | Kontaktformular mit Pflichtfeldern, nativer Validierung, Pending-Zustand, verständlichem Erfolg/Fehler, Timeout und Erhalt der Eingaben bei Fehlern. Tests verwenden Mocks. |
| Überarbeiten | Reproduzierbare Installation via Lockfile, Node 24 und Astro 7.4.7. Konkreter Anlass: npm audit meldete in Astro 4.16.19 / Abhängigkeiten sechs Findings, davon eines kritisch. Keine zusätzliche UI-Bibliothek. |
| Entfernen | Unbelegte 12+-Stunden-Ersparnis, Echtzeit-/Alert-Zusagen ohne Nachweis, feste Antwortzeit und pauschale Projektdauer. |
| Entfernen | Bewegte Werkzeuglisten, Canvas-Dekoration, Tilt/Spotlight, animierte Preise und ungenutzte Root-HTML-Doppelversion. |

## Rechtstexte und Veröffentlichungsentscheidung

Die zuvor verlinkten Seiten `/impressum` und `/datenschutz` existierten nicht im Projekt. Es lagen nur Markenname und E-Mail vor, keine belastbaren vollständigen Anbieterangaben. Der Nutzer entschied deshalb ausdrücklich: **zunächst ohne Veröffentlichung**. Beide Seiten sind als Entwürfe angelegt; keine Person oder Adresse wurde erfunden. Keine Übernahme nach main und kein Produktions-Deployment.

Die Datenschutzhinweise nennen die tatsächlichen technischen Dienste (Vercel, Formspree, Outlook). Verträge, Drittlandgrundlagen und Löschfristen werden nicht als bereits geprüft behauptet. Diese offenen Punkte stehen sichtbar in den Entwürfen und in `docs/release-notes.md`.

## Quellen für korrigierte Angaben

Geprüft am 06.11.2026:
- Microsoft Power BI Preise/Lizenzumfang: https://www.microsoft.com/en-us/microsoft-fabric/features/power-bi/pricing
- Microsoft Lizenzverwaltung: https://learn.microsoft.com/power-bi/enterprise/service-admin-licensing-organization
- Formspree Datenschutz: https://formspree.io/legal/privacy-policy/
- Formspree AJAX: https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/
- Vercel Datenschutz: https://vercel.com/legal/privacy-notice
- DDG § 5: https://www.gesetze-im-internet.de/ddg/__5.html
- DSGVO, insbesondere Art. 6, 13, 15–22: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- Astro Upgrade: https://docs.astro.build/en/guides/upgrade-to/v7/ und /v6/

## Folgeänderung: Blog und Identität

Der Nutzer hat nach Sichtung der Vorschau den Blog abgewählt und ein neues Logo nach dem Silber-Glas-Motiv gewünscht. Blogübersicht, 127 Artikel, Layout, Generator und täglicher Workflow werden deshalb im Feature-Branch entfernt; alte Blog-URLs werden in Vercel zur Startseite weitergeleitet. Die Historie bewahrt die Artikel. Auf `main` bleibt der bisherige Workflow bis zur Übernahme der Änderung bestehen.

Ein eigenständiges SVG-Signet ersetzt das Plus-Zeichen und die Holocron-Wortmarke in Header und Footer. Der Name bleibt offen; Titel und Metadaten verwenden zwischenzeitlich die Leistungsbeschreibung. E-Mail, Domain, Kontaktformular und der unveröffentlichte Entwurfsstatus bleiben unverändert.

Impressum und Datenschutzhinweise sind unabhängig von einem Blog erforderlich. Anbieter- und Datenschutzangaben müssen vor dem Livegang vervollständigt werden. `noindex` stellt keinen Zugriffsschutz dar. Der gehostete Vercel-Preview verlangte im abschließenden Testbrowser einen Login; die tatsächliche Zugriffsbeschränkung hängt von Vercel ab.
