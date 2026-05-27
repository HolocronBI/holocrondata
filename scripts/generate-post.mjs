import fs from 'fs';

const today = new Date();
const dateStr = today.toISOString().split('T')[0];
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const isPowerBI = dayOfYear % 2 === 0;

const systemPrompt = `Du bist ein erfahrener Business Intelligence Berater und Autor fuer das Blog von Holocron Data.
Holocron Data ist ein Freelance-BI-Beratungsunternehmen fuer den deutschen Mittelstand.
Kernleistungen: Daten-Bestandsaufnahme, Datenbereinigung, Datenmodellierung, Power BI Reports.
Ton: professionell, direkt, praxisnah. Keine Buzzwords, kein Marketing-Sprech.
Zielgruppe: Geschaeftsfuehrer und Entscheider in Unternehmen mit 50-500 Mitarbeitern.
Antworte NUR mit einem validen JSON-Objekt. Keine Backticks, keine Praembel, nur JSON.`;

const topic = isPowerBI
  ? `Power BI Thema fuer den Mittelstand. Beispiele: DAX-Formeln erklaert, Dashboard-Design-Prinzipien, automatischer Datenrefresh, Row-Level Security, Power Query Transformationen, Star Schema, KPI-Visualisierungen. Waehle ein konkretes spezifisches Thema.`
  : `Datenmanagement Thema fuer den Mittelstand. Beispiele: Datenpflege verbessern, Excel vs Datenbank, ERP-Daten nutzbar machen, Datensilos aufbrechen, ROI von BI-Projekten, typische Datenfehler, Reporting-Automatisierung. Waehle ein konkretes spezifisches Thema.`;

const userPrompt = `Schreibe einen deutschen Blog-Beitrag zum Thema: ${topic}

Antworte mit diesem JSON (alle Felder auf Deutsch):
{
  "title": "Vollstaendiger Titel",
  "slug": "url-slug-mit-bindestrichen",
  "excerpt": "2-3 Saetze Zusammenfassung ca 120 Zeichen",
  "tag": "Power BI oder Datenmodellierung oder Datenqualitaet oder Report-Automation oder BI-Strategie",
  "readTime": 5,
  "content": "Vollstaendiger Markdown-Inhalt mindestens 600 Woerter mit ##-Ueberschriften und konkreten Beispielen"
}`;

const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-20250514',
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
