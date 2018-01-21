# cas_projekt2

Thema : online shop "MIYA JAPAN TEE",  wo man Tee, Nierenwärmer, Socken kaufen kann

## Setup

```bash
git clone https://github.com/kmiyanis/cas_projekt2/tree/hsr_projekt2_abgabe.git
npm install
```
## starten

```bash
npm run dev
```
## Browser Url

Der Web-Server läuft nun unter <code>http://localhost:8080</code>

## Features

* Homepage
* Shop
* Einkauf mit Login / ohne Login
* Einkauf History bei eingeloggten Usern
* Rezept Bewertung (bei eingeloggten Usern)
* Admin Bereich
  * User verwaltung
	  * Switch (Admin / User)
	  * User löschen
  * CRUD für Produkte

## Besonders gut gelöst
### Style & Design & Html Ansicht:
* Am Anfang haben wir viel Zeit in die Webpack config investiert, um CSS und Fonts, sass, autoprefixer und postcss-loader automatisieren zu können
* Bei uns ist es oft der Fall, dass wir statisches HTML erstellen und danach mittels React das CMS implementieren und gleichzeitig auszuarbeiten. Deswegen haben wir so gemacht, dass das SASS-File im selben Ordner wie die HTML-Templates und JS-Files liegen. Diese werden danna automatisch zur Runtime compiled.
* Styled-components eingeführt und SASS-Mixin-Utitily per javascript nachgebaut, damit verschiedene Components den gleichen Style verwenden können.
    * Während der Entwicklung haben wir jedoch gemerkt, dass es weder effizient noch einfach verwaltbar ist, da man jedes Element in den Components einem Styles zuweisen muss.


### Programming Ansicht:
* Google’s Firebase mit React und Redux
* Wir haben vor, dieses Projekt nachher Kirby als CMS zu nutzen, deswegen haben wir in diese, Projekt versucht, von Anfang an mit einer externen Databank zu arbeiten (Google's Firebase)
* Wir haben Redux und eine einfache Firebase-Bibliothek benutzt. Unsere Ziel war es, erst einmal die Grundlagen von React und Redux zu verstehen, welches wir mit diesem Projekt erreicht haben.
* Durch die Nutzung von Firebase, haben wir einige Schwierigkeiten gehabtn Unit-Tests zu implementieren. Wir haben vor kurzem von Michael gute Tipps bekommen, mittels des Dumb-Component-Ansatzes die einzelnen Componenten zu testen.

### Usability Ansicht:
* Order Form
  * bei Fehl-Eingabe wir der Focus beim nächsten Error Feld gesetzt. Im nächsten Schritt wird die Fehlermeldung neben dem Feld dargestellt.


## Lessons Learned - was wir nächstes mal anders machen würden
 * aus Styled-Components verzichten und nur mit einem CSS-File (Sass) arbeiten.
 * Login nicht mit mehr Google's Firebase Authentification machen.
