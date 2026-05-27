import fs from 'fs';

const today = new Date();
const dateStr = today.toISOString().split('T')[0];
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

const topics = [
  { category: "Daten verstehen", title: "Warum viele Unternehmen nicht wissen, was ihre Daten wirklich wert sind" },
  { category: "Daten verstehen", title: "Wann ist der richtige Zeitpunkt fuer eine BI-Loesung im Mittelstand?" },
  { category: "Daten verstehen", title: "Datensilos: Wie getrennte Systeme Entscheidungen verlangsamen" },
  { category: "Daten verstehen", title: "Was ist ein Daten-Audit und warum lohnt er sich vor jedem BI-Projekt?" },
  { category: "Daten verstehen", title: "KPIs definieren: Warum die meisten Kennzahlen im Unternehmen falsch gemessen werden" },
  { category: "Daten verstehen", title: "Rohdaten vs. aufbereitete Daten: Der Unterschied, der alles veraendert" },
  { category: "Daten verstehen", title: "Warum drei Abteilungen drei verschiedene Umsatzzahlen haben koennen" },
  { category: "Daten verstehen", title: "Was kostet schlechte Datenqualitaet ein Unternehmen wirklich?" },
  { category: "Daten verstehen", title: "ERP-Daten nutzbar machen: Wo der Einstieg am sinnvollsten ist" },
  { category: "Daten verstehen", title: "Warum Reporting-Probleme selten ein Tool-Problem sind" },
  { category: "Daten verstehen", title: "Welche Daten ein Unternehmen tatsaechlich braucht und welche nicht" },
  { category: "Daten verstehen", title: "Warum der erste Schritt zu besseren Reports oft kein Dashboard ist" },
  { category: "Daten verstehen", title: "Stammdaten vs. Bewegungsdaten: Ein Unterschied mit grosser Wirkung" },
  { category: "Daten verstehen", title: "Was passiert, wenn niemand im Unternehmen die Daten wirklich versteht?" },
  { category: "Daten verstehen", title: "Wie man herausfindet, ob die eigenen Daten vertrauenswuerdig sind" },
  { category: "Daten verstehen", title: "Warum Excel-Berichte oft mehr Fragen aufwerfen als sie beantworten" },
  { category: "Daten verstehen", title: "Was ein Geschaeftsfuehrer wirklich ueber seine Daten wissen sollte" },
  { category: "Daten verstehen", title: "Von Bauchgefuehl zu Datenbasis: Was der Umstieg konkret bedeutet" },
  { category: "Daten verstehen", title: "Datenverantwortung: Wer im Unternehmen fuer Datenqualitaet zustaendig sein sollte" },
  { category: "Daten verstehen", title: "Warum viele BI-Projekte scheitern und wie man es von Anfang an richtig macht" },
  { category: "Daten verstehen", title: "Die haeufigsten Missverstaendnisse ueber Business Intelligence im Mittelstand" },
  { category: "Daten verstehen", title: "Datenlandschaft dokumentieren: Warum es sich lohnt, bevor man baut" },
  { category: "Daten verstehen", title: "Datenstrategie fuer den Mittelstand: Wo anfangen, wenn alles dringend wirkt?" },
  { category: "Daten verstehen", title: "Der Unterschied zwischen Daten haben und Daten verstehen" },
  { category: "Daten verstehen", title: "Datenqualitaet messen: Welche Fragen man sich zu Beginn stellen sollte" },
  { category: "Daten bereinigen", title: "Die 5 haeufigsten Fehler in Excel-basierten Reportings" },
  { category: "Daten bereinigen", title: "Warum Excel kein Datenmodell ist und was das fuer Ihr Reporting bedeutet" },
  { category: "Daten bereinigen", title: "Doppelte Datensaetze: Wie sie entstehen und wie man sie systematisch bereinigt" },
  { category: "Daten bereinigen", title: "Inkonsistente Schreibweisen in Kundendaten: Ein unterschaetztes Problem" },
  { category: "Daten bereinigen", title: "Fehlende Werte in Datensaetzen: Ignorieren, ersetzen oder kennzeichnen?" },
  { category: "Daten bereinigen", title: "Wie Power Query die Datenbereinigung strukturiert und wiederholbar macht" },
  { category: "Daten bereinigen", title: "Datumsformate in Excel: Warum sie so oft Probleme machen" },
  { category: "Daten bereinigen", title: "Datenbereinigung dokumentieren: Warum Nachvollziehbarkeit wichtiger ist als Geschwindigkeit" },
  { category: "Daten bereinigen", title: "Warum Datenbereinigung kein einmaliges Projekt ist" },
  { category: "Daten bereinigen", title: "Zahlen als Text gespeichert: Ein klassisches Excel-Problem und seine Loesung" },
  { category: "Daten bereinigen", title: "Wie man eine Datenbereinigung strukturiert angeht" },
  { category: "Daten bereinigen", title: "Referenzlisten als Grundlage sauberer Daten: Was Lookup-Tabellen leisten" },
  { category: "Daten bereinigen", title: "Warum saubere Rohdaten wichtiger sind als ein schoenes Dashboard" },
  { category: "Daten bereinigen", title: "Outlier in Datensaetzen: Fehler oder wertvolle Information?" },
  { category: "Daten bereinigen", title: "Wie man Excel-Daten auf Plausibilitaet prueft, bevor man sie weiterverarbeitet" },
  { category: "Daten bereinigen", title: "CSV-Dateien richtig importieren: Haeufige Fehlerquellen und wie man sie vermeidet" },
  { category: "Daten bereinigen", title: "Daten aus mehreren Quellen zusammenfuehren: Worauf es dabei ankommt" },
  { category: "Daten bereinigen", title: "Spaltenstrukturen vereinheitlichen: Wie man heterogene Datenquellen harmonisiert" },
  { category: "Daten bereinigen", title: "Wie viel Datenbereinigung ist genug? Eine pragmatische Einschaetzung" },
  { category: "Daten bereinigen", title: "Automatisierte Datenpruefung: Wann es sich lohnt, Validierungsregeln einzubauen" },
  { category: "Daten bereinigen", title: "Warum Datenbereinigung Fachkenntnis braucht und nicht nur technisches Wissen" },
  { category: "Daten bereinigen", title: "Bereinigung vs. Transformation: Was der Unterschied ist und warum er zaehlt" },
  { category: "Daten bereinigen", title: "Wenn Quelldaten fehlerhaft sind: Wie man mit dem Problem umgeht ohne die Quelle zu aendern" },
  { category: "Daten bereinigen", title: "Warum eine Datenbasis die gut genug ist oft nicht gut genug ist" },
  { category: "Daten bereinigen", title: "Wie man erkennt, ob eine Datenquelle grundsaetzlich unbrauchbar ist" },
  { category: "Modelle & Reports", title: "Star Schema erklaert: Warum die Struktur wichtiger ist als das Tool" },
  { category: "Modelle & Reports", title: "DAX fuer Einsteiger: Die 3 Formeln, die man wirklich braucht" },
  { category: "Modelle & Reports", title: "Faktentabellen und Dimensionstabellen: Der Kern eines guten Datenmodells" },
  { category: "Modelle & Reports", title: "Warum ein Power BI Dashboard ohne Datenmodell wenig wert ist" },
  { category: "Modelle & Reports", title: "Wie man ein Power BI Dashboard aufbaut, das wirklich genutzt wird" },
  { category: "Modelle & Reports", title: "Beziehungen in Power BI: Haeufige Fehler und wie man sie vermeidet" },
  { category: "Modelle & Reports", title: "Measures vs. berechnete Spalten in DAX: Wann was sinnvoll ist" },
  { category: "Modelle & Reports", title: "Zeitintelligenz in Power BI: Vorjahr, Vormonat und YTD richtig umsetzen" },
  { category: "Modelle & Reports", title: "Wie man KPIs in Power BI so visualisiert, dass sie sofort verstaendlich sind" },
  { category: "Modelle & Reports", title: "Row-Level Security in Power BI: Wann und wie man Datenzugriff einschraenkt" },
  { category: "Modelle & Reports", title: "Warum viele Power BI Reports zu viel zeigen und was man weglassen sollte" },
  { category: "Modelle & Reports", title: "Datenmodell-Performance: Warum manche Reports langsam werden und wie man das verhindert" },
  { category: "Modelle & Reports", title: "Power Query vs. DAX: Was wohin gehoert" },
  { category: "Modelle & Reports", title: "Wie man einen Report so gestaltet, dass ihn auch Nicht-Analysten verstehen" },
  { category: "Modelle & Reports", title: "Warum Drill-Through und Drill-Down in vielen Reports fehlen und was man damit gewinnt" },
  { category: "Modelle & Reports", title: "Datenmodell dokumentieren: Was rein muss, damit andere damit arbeiten koennen" },
  { category: "Modelle & Reports", title: "Wie man Budgetdaten und Ist-Daten in einem Modell sauber zusammenfuehrt" },
  { category: "Modelle & Reports", title: "Warum ein Flat Table kein Datenmodell ist und wann er trotzdem reicht" },
  { category: "Modelle & Reports", title: "Farbwahl und Layout in Power BI: Warum Design keine Nebensache ist" },
  { category: "Modelle & Reports", title: "Aggregationen in Power BI richtig einsetzen: Was SUMX von SUM unterscheidet" },
  { category: "Modelle & Reports", title: "Wie man einen Report-Standard im Unternehmen einfuehrt" },
  { category: "Modelle & Reports", title: "Mehrere Datenquellen in einem Modell: Chancen und Fallstricke" },
  { category: "Modelle & Reports", title: "Wie man ein Datenmodell skalierbar aufbaut von Anfang an" },
  { category: "Modelle & Reports", title: "Berechnete Tabellen in Power BI: Sinnvoll oder Antipattern?" },
  { category: "Modelle & Reports", title: "Wie man sicherstellt, dass Stakeholder den Report wirklich nutzen" },
  { category: "Automatisierung", title: "Wie man 8 Stunden manuelle Arbeit pro Monat mit Power BI eliminiert" },
  { category: "Automatisierung", title: "Automatischer Datenrefresh in Power BI: Wie er funktioniert und was man beachten muss" },
  { category: "Automatisierung", title: "Warum manuelles Reporting ein verstecktes Risiko fuer Unternehmen ist" },
  { category: "Automatisierung", title: "Geplante Datenupdates einrichten: Was man braucht und wie man vorgeht" },
  { category: "Automatisierung", title: "Automatisierter PDF-Export aus Power BI: Moeglichkeiten und Grenzen" },
  { category: "Automatisierung", title: "Power Automate und Power BI: Wie beide Tools zusammenspielen" },
  { category: "Automatisierung", title: "Wann lohnt sich Automatisierung und wann ist manuell die bessere Wahl?" },
  { category: "Automatisierung", title: "Dataflows in Power BI: Datenaufbereitung zentral und wiederverwendbar" },
  { category: "Automatisierung", title: "Wie man einen monatlichen Bericht vollstaendig automatisiert" },
  { category: "Automatisierung", title: "Benachrichtigungen bei Schwellenwertüberschreitungen in Power BI einrichten" },
  { category: "Automatisierung", title: "Warum Automatisierung ohne saubere Daten nicht funktioniert" },
  { category: "Automatisierung", title: "Excel als Datenquelle fuer Power BI: Wie man es stabil und automatisierbar macht" },
  { category: "Automatisierung", title: "Power BI Gateway: Was es ist und wann man es braucht" },
  { category: "Automatisierung", title: "Wie man Reporting-Prozesse dokumentiert, damit sie wartbar bleiben" },
  { category: "Automatisierung", title: "Warum Automatisierung Governance braucht und was das konkret bedeutet" },
  { category: "Automatisierung", title: "Wie man eine Datenpipeline fuer den Mittelstand aufbaut ohne IT-Abteilung" },
  { category: "Automatisierung", title: "SharePoint als Datenquelle: Moeglichkeiten und typische Probleme" },
  { category: "Automatisierung", title: "Incremental Refresh in Power BI: Warum er bei grossen Datenmengen entscheidend ist" },
  { category: "Automatisierung", title: "Wie man automatisierte Reports so gestaltet, dass sie keiner Erklaerung beduerfen" },
  { category: "Automatisierung", title: "Fehlerbehandlung in automatisierten Prozessen: Was passiert, wenn etwas schieflaeuft?" },
  { category: "Automatisierung", title: "Von manuell zu automatisiert: Wie ein typischer Migrationsprozess aussieht" },
  { category: "Automatisierung", title: "Warum Automatisierung ein Investment ist und wie man den ROI einschaetzt" },
  { category: "Automatisierung", title: "SQL als Datenquelle fuer Power BI: Wann es sich lohnt, direkt zu verbinden" },
  { category: "Automatisierung", title: "Wie man sicherstellt, dass automatisierte Reports auch in einem Jahr noch funktionieren" },
  { category: "Automatisierung", title: "Automatische Anomalie-Erkennung in Power BI: Was moeglich ist" },
];

const topic = topics[dayOfYear % topics.length];

const systemPrompt = `Du schreibst fuer das Blog von Holocron Data, einem Freelance-BI-Beratungsunternehmen fuer den deutschen Mittelstand.

TONREGELN — strikt einhalten:
- Schreibe immer in der Wir-Form ("Wir sehen", "Wir empfehlen", "In unserer Arbeit")
- Keine erfundenen Kundengeschichten, keine Zahlen aus der Luft ("40 Unternehmen", "12 Jahre Erfahrung")
- Kein "Bei Holocron Data sehen wir oft..." — direkt einsteigen
- Konkrete Probleme beschreiben, die Unternehmen wirklich kennen
- Professionell, direkt, ehrlich — kein Marketing-Sprech, keine Buzzwords
- Am Ende ein sanfter CTA auf /kontakt — kein Druck, keine Versprechen
- Zielgruppe: Geschaeftsfuehrer und Entscheider in Unternehmen mit 50-500 Mitarbeitern
- Verwende NIEMALS Code-Bloecke, technische Listings oder Monospace-Formatierungen
- Beispiele werden in normalem Fliesstext beschrieben, nicht als Code dargestellt

Antworte NUR mit einem validen JSON-Objekt. Keine Backticks, keine Praembel, nur JSON.`;

const userPrompt = `Schreibe einen deutschen Blog-Beitrag mit diesem Titel: "${topic.title}"
Kategorie: ${topic.category}

Antworte mit diesem JSON:
{
  "title": "${topic.title}",
  "slug": "url-slug-mit-bindestrichen-max-60-zeichen",
  "excerpt": "2-3 praegnante Saetze als Vorschau, ca. 120 Zeichen",
  "tag": "${topic.category}",
  "readTime": 5,
  "content": "Vollstaendiger Markdown-Inhalt, mindestens 600 Woerter, mit ##-Ueberschriften, Wir-Form durchgehend, konkrete Beispiele in Prosa beschrieben (KEIN Code, KEINE Code-Bloecke, KEINE technischen Listings), sanfter CTA am Ende"
}`;

const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 3000,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }]
  })
});

if (!response.ok) {
  const err = await response.text();
  throw new Error(`API error ${response.status}: ${err}`);
}

const data = await response.json();
const text = data.content[0].text.trim().replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
const post = JSON.parse(text);

const fileContent = `---
layout: ../../layouts/BlogPost.astro
title: "${post.title.replace(/"/g, '\\"')}"
excerpt: "${post.excerpt.replace(/"/g, '\\"')}"
date: ${dateStr}
tag: ${post.tag}
readTime: ${post.readTime}
---

${post.content}`;

const fileName = `src/pages/blog/${post.slug}.md`;
fs.writeFileSync(fileName, fileContent, 'utf8');
fs.writeFileSync('/tmp/post_title.txt', post.title);
fs.writeFileSync('/tmp/post_slug.txt', post.slug);
console.log('Generated:', fileName);
