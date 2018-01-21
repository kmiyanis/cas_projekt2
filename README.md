# cas_projekt2

Thema : online shop " MIYA JAPAN TEE",  wo man Tee, Nierenwärmer, Socken kaufen kann

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

Der Web-Server läuft nun auf <code>http://localhost:8080</code>

## Features

* Homepage
* Shop
* Einkauf mit Login / ohne Login
* Einkauf History beim Loggedin
* Rezept Bewertung
* Admin Bereich
  * User verwaltung Switch (Admin / User), User löschen
  * Shop Produkte herstellen, updaten, löschen


## Besonders gut gelöst
### Style & Design & Html Ansicht:
* Am Anfang Webpack config die Zeit investiert, um css mit font Verbindung, sass, autoprefixer, postcss-loader automatisieren zu können
* oft bei uns falle ist, statische html template zuerst herstellen, danach react oder cms programmieren, und gleichzeitig ausarbeiten. Deswegen haben wir so gemacht, sass file sind die selben File beim Html-templating und react-Bearbeitung, und beiden fall automatische complien lassen kann.
* styled-components eingeführt und sass mixen ähnliche utitily per javascript nachgebaut, damit in den verschiedenen Component gleichen style anwenden kann.
    * Aber während der Arbeit haben wir gemerkt, das ist nicht weder effizient noch einfach verwaltbar, da man jedes Elemente in Componente Styles zuweisen müssen. 
    
    
### Programming Ansicht:
* Google’s Firebase mit Redux und React
* Wir haben vor, diese Projekt nachher mit Kirby(CMS) zur content Verwaltung benutzen, deswegen haben wir in dieser Projekt versucht, vom Anfang an mit externen Databank zu Kommunikation. Nämlich Firebase
* wir haben redux und die basic Bibliothek von Firebase benutzt. Unsere Ziel ist erstmal die Grundlagen zu verstehen. Diese unsere Ziel ist völlig erreicht. 
* Da wir Firebase benutzt haben, haben wir Schwierigkeiten gehabtn, uni test durchzuführen. Wir haben vor kurzem von Michael gute Tipps bekommen, mit dumb-component lösen. Aber das wird nächste Step sein.

### Usability Ansicht:
* Order Form 
  * beim Fehlereingabe, Focus wird zum ersten Error Feld gesetzt. Am nächsten Step ist die Fehlermeldung wird neben dem Feld dargestellt.


## Das nächste Mal anders
 * styled-components verzichten und nur style mit CSS (Sass) file zu arbeiten.
 * Login nicht mit Google Authentification machen
