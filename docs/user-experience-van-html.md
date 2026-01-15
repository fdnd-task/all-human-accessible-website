# All Human - Accessible Website

## User Experience van HTML

Je hebt maandag gezien dat Mensen (waar deze sprint om draait) veel verschillende browsers en apparaten gebruiken. Al die browsers kunnen overweg met HTML, de standaard waar het hele Web op draait.

Als frontender heb je de verantwoordelijkheid om een goede gebruikerservaring voor eindgebruikers neer te zetten. Goede HTML helpt bij die goede _User Experience (UX)_. En slechte HTML zorgt voor een slechte gebruikerservaring. Dat klinkt logisch, maar het Internet (en ook ChadGPT) staat vol met voorbeelden van slechte HTML.

### Aanpak

Voordat je kunt bepalen wat goede HTML is, moet je vooral leren wat HTML zoal kan. En welke functionaliteiten je van de browser gratis krijgt, als je de juiste HTML elementen kiest.

Vandaag ga je leren wat verschillende (interactieve) HTML elementen in een browser doen.

Open je code editor en maak een blanco HTML pagina in je editor, noem deze `ux.html` en sla deze op in jouw i-love-web repo. Begin met een `<h1>UX van HTML</h1>`. Schrijf daarna op het whiteboard je naam als HTML tag, zodat we kunnen beginnen. `<jad>`, `<sanne>`, `<joost>`, `<krijn>` en de tweedejaars mentoren gaan je door deze workshop heen loodsen.


### Links

De allereerste browser ooit, zo'n 30 jaar geleden, kon al met links (_anchors_, `<a href="...">`) overweg. Sindsdien is er alleen maar leuk spul bijgekomen in HTML.

Maak een eerste subkop in je HTML document, `<h2 id="links">Links</h2>`. Schrijf daaronder een simpele link naar dezelfde pagina, `<a href="ux.html">UX van HTML</a>`, push je werk naar GitHub Pages, en open de pagina in een willekeurige browser.

#### Oefeningen

- Onderzoek met je tafel welke functionaliteiten _verschillende browsers_ je geven bij zo'n link. Gebruik je rechtermuisknop, doe een _long tap_ op je telefoon, gebruik de Shift-, Control-, Command-, Option- en Alt-toetsen (of een combinatie van die toetsen) bij het klikken op die link.

- Voeg het `download` attribuut toe, en onderzoek wat er met de functionaliteit in de browser verandert. (Dit attribuut werkt niet in elke browser lokaal, in Firefox bijvoorbeeld wel. Het kan dus zijn dat je dit weer even via een push naar GitHub Pages moet testen.)

- Verander het `download` attribuut naar `target="_blank"`, en onderzoek wat er met de functionaliteit in de browser verandert, als je op de link klikt.

- Voeg ook een `<button>Knop</button>` toe aan je HTML. Krijg je hiermee dezelfde functionaliteit van de browser?

- Voeg meerdere `<a href="...">` links toe aan je HTML, en probeer met alleen je de Tab toets op je toetsenbord de links te bereiken. Wat is de standaard _tabvolgorde_? Wat gebeurt er als je Shift+Tab gebruikt?

- Je kunt met `<a href="#links">` ook linken naar verschillende onderdelen binnen dezelfde pagina, door naar een `id` te verwijzen. Probeer maar uit. Wat doet dat met de tabvolgorde?

- _Wrap_ je naam in een `<a>` tag op het whiteboard, als je klaar bent met deze oefeningen.

Met zoiets simpels als een link kun je al alle kanten op. <!-- Hrhr --> Wil je de eindgebruiker dus de mogelijkheid geven om ergens _heen_ te gaan, gebruik dan een `<a>` (_anchor_).

#### Bronnen

- [`<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [Het `href` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href)
- [Het `download` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download)
- [Het `target` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)


### Afbeeldingen

Door foto's, logo's en andere afbeeldingen toe te voegen in HTML, maken we het meteen ingewikkeld. Niet iedere browser kan namelijk de afbeeldingen downloaden, en niet ieder _mens_ kan überhaupt _zien_. In HTML willen we met die gebruikerservaring ook rekening houden.

Voeg in jouw `ux.html` de volgende subkop toe, `<h2 id="afbeeldingen">Afbeeldingen</h2>`. We hebben nog geen afbeeldingen, maar de HTML kunnen we wel alvast schrijven. Zet de volgende HTML onder je kop: `<a href="ux.html"><img width="200" height="100"></a>`, en bekijk het resultaat in je browser.

De afbeelding kan nog niet gedownload worden, dus de browser tekent hier ook geen pixels.

#### Oefeningen

- Voeg het _attribuut_ `alt="UX van HTML"` toe aan de `<img>` tag, en bekijk het in je browser. Wat werkt beter als de afbeelding niet getoond kan worden?

- We gaan nu een link met tekst én een icoon toevoegen, ook al hebben we de afbeelding voor het icoontje nog niet. En we hebben net geleerd dat een `alt` attribuut “beter” is voor de UX, dus die zetten we er ook meteen in. We willen immers het juiste doen. Gebruik de volgende HTML: `<a href="ux.html"><img alt="UX van HTML">UX van HTML</a>`, en bekijk het in je browser. Hm, is dit nou echt beter? Wat als je van dat `alt` attribuut `alt="Icoon"`, of `alt="Download icoon"` maakt? En wat als je gewoon `alt=""` doet in dit geval? Welke UX vind je beter?

- Onderzoek en bespreek met je tafel en mentor op welke verschillende manieren je afbeeldingen kunt gebruiken. Wat voor soort `alt` attributen horen daarbij? Schrijf en schets drie verschillende manieren en voorbeelden op het whiteboard.

Nu weet je waarom je altijd na moet denken over de inhoud van je `alt` attributen, en waarom dat bijvoorbeeld in Lighthouse en de WCAG richtlijnen langskomt. De context van een afbeelding is relevant bij het schrijven van een `alt` attribuut.

#### Bronnen

- [`<img>`: The Image Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Een beslisboom voor je `alt` attribuut](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Requirements for providing text to act as an alternative for images @ de HTML specificatie (geavanceerd)](https://html.spec.whatwg.org/dev/images.html#:~:text=4.8.4.3%20Requirements%20for%20providing%20text%20to%20act%20as%20an%20alternative%20for%20images)


### Labels

Bij het maken van formulieren, voor bijvoorbeeld filters of zoekvelden, kun je verschillende invoervelden gebruiken. Denk aan een lijst met _checkboxes_ of _radio buttons_. Voor formulieren hangt een goede UX onder andere af van goede _labels_.

Maak een nieuwe subkop aan, `<h2 id="labels">Labels</h2>`, plak de volgende HTML eronder, en test het in je browser door jouw docenten te selecteren.

```html
<fieldset>
  <legend>Docenten</legend>
  <ul>
    <li><input type="checkbox"> Docent 1</li>
    <li><input type="checkbox"> Docent 2</li>
    <li><input type="checkbox"> Docent 3</li>
    <li><input type="checkbox"> Docent 4</li>
    <li><input type="checkbox"> Docent 5</li>
    <li><input type="checkbox"> Docent 6</li>
    <li><input type="checkbox"> Docent 7</li>
    <li><input type="checkbox"> Docent 8</li>
    <li><input type="checkbox"> Docent 9</li>
    <li><input type="checkbox"> Docent 10</li>
  </ul>
</fieldset>
```

Inderdaad, hoe weet je nou wie welke docent is? Blijkbaar is het handig om een goed _tekstlabel_ te geven aan een invoerelement.

Probeer dit eens:

```html
<fieldset>
  <legend>Docenten</legend>
  <ul>
    <li><input type="checkbox"> Cyd</li>
    <li><input type="checkbox"> Dorien</li>
    <li><input type="checkbox"> Gwen</li>
    <li><input type="checkbox"> Jad</li>
    <li><input type="checkbox"> Joost</li>
    <li><input type="checkbox"> Justus</li>
    <li><input type="checkbox"> Koop</li>
    <li><input type="checkbox"> Krijn</li>
    <li><input type="checkbox"> Sanne</li>
    <li><input type="checkbox"> Suus</li>
  </ul>
</fieldset>
```

Al iets beter, maar de UX van deze HTML is nog steeds verschrikkelijk. Lighthouse klaagt er ook over als je het test. WCAG audit niet gehaald.. Helaas..

#### Oefeningen

- Commit en Push je code naar GitHub Pages, en doe een Lighthouse Accessibility test op de HTML met input en labels. Krijg je ook deze melding te zien in je test?

<img width="613" height="98" alt="image" src="https://github.com/user-attachments/assets/1b6870f7-bb26-4586-bc47-be1d63d83039" />

We hebben toch net duidelijke tekstlabels toegevoegd? Waarom zeurt Lighthouse hier nog over? Omdat we nog wat HTML vergeten zijn, om het _goed_ te maken.

- Wat nou als je elke `<input>` én elke docent samen in één `<label>` zet? Test de wijzigingen door je docenten te selecteren. Welke UX vind je beter?

```html
<fieldset>
  <legend>Docenten</legend>
  <ul>
    <li><label><input type="checkbox"> Cyd</label></li>
    <li><label><input type="checkbox"> Dorien</label></li>
    <li><label><input type="checkbox"> Gwen</label></li>
    <li><label><input type="checkbox"> Jad</label></li>
    <li><label><input type="checkbox"> Joost</label></li>
    <li><label><input type="checkbox"> Justus</label></li>
    <li><label><input type="checkbox"> Koop</label></li>
    <li><label><input type="checkbox"> Krijn</label></li>
    <li><label><input type="checkbox"> Sanne</label></li>
    <li><label><input type="checkbox"> Suus</label></li>
  </ul>
</fieldset>
```

Je slaat hiermee een paar vliegen in één klap: je hebt de UX voor _alle_ gebruikers verbeterd, Lighthouse klaagt wat minder, en die WCAG checklist is zo ook wel te doen. Leer jezelf aan om bij elke `<input>` een goed tekstlabel te verzinnen, én een `<label>` te koppelen. Niet alleen bij checkboxjes, maar bij _alle_ invoervelden.

Zonder labels is het voor _iedereen_ ontoegankelijk en onbruikbaar, omdat je geen idee hebt wat je waar moet invullen. Voeg onderstaande code toe aan je HTML document en test het in je browser, werkt dit goed? Weet een gebruiker wat die moet invullen?

```html
<fieldset>
  <legend>Adresgegevens</legend>
  <p><input type="text"></p>
  <p><input type="text"></p>
  <p><input type="text"></p>
  <p><input type="text"></p>
</fieldset>
```

- Plak het volgende voorbeeld onder je code, zodat je het kunt vergelijken. Wat is het verschil tussen de twee voorbeelden?

```html
<fieldset>
  <legend>Adresgegevens</legend>
  <p>Straat: <input type="text"></p>
  <p>Huisnummer: <input type="text"></p>
  <p>Postcode: <input type="text"></p>
  <p>Plaats: <input type="text"></p>
</fieldset>
```

- Als we wél de tekstuele labels toevoegen, maar _niet_ de `<label>` elementen, blijft het voor _een deel_ van je eindgebruikers ontoegankelijk en onbruikbaar. En HTML schrijf je voor _iedereen_. Plak dit onder je code, zodat je alle versies kunt vergelijken. Test de verschillen in je browser. Welke UX vind je beter?

```html
<fieldset>
  <legend>Adresgegevens</legend>
  <p><label>Straat: <input type="text"></label></p>
  <p><label>Huisnummer: <input type="text"></label></p>
  <p><label>Postcode: <input type="text"></label></p>
  <p><label>Plaats: <input type="text"></label></p>
</fieldset>
```

- Wrap je naam en `<a>` in een `<label>` tag op het whiteboard, als je klaar bent met deze oefeningen. Check de pro-tip hieronder als je aan het wachten bent.

#### Bronnen

- [`<label>`: The Label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [`<fieldset>`: The Field Set element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
- Pro-tip voor het werken met HTML: [Multiple selections (multi-cursor) @ VS Code](https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor) & [Multi-cursor code editing: An animated introduction](https://alexharri.com/blog/multi-cursor-code-editing-animated-introduction)


### Headings

Door je content een goede heading structuur te geven, zorg je dat bijvoorbeeld _Inhoudsopgaves_ automatisch gemaakt kunnen worden. Sommige browsers en tools bieden deze functionaliteit aan eindgebruikers.

#### Onderzoek

- Onderzoek met je tafel hoe je de huidige heading structuur van je UX pagina kunt laten zien of voorlezen door een tool. Gebruik hiervoor bijvoorbeeld de screen reader die je geïnstalleerd hebt voor de WCAG Audit deeltaak, zoek een browser extensie die een “table of contents” of “document outline” kan weergeven, of installeer een browser zoals Polypane.

- Zet een `<h1>` op het whiteboard als jullie klaar zijn.

#### Bronnen

- [`<h1>`–`<h6>`: The HTML Section Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Bronnen WCAG Audit deeltaak](https://github.com/fdnd-task/wcag-audit/blob/main/docs/INSTRUCTIONS.md#bronnen-handmatige-tests)
- [Web Developer toolbar browser extensie](https://chrispederick.com/work/web-developer/)
- [HeadingsMap Chrome extensie](https://chromewebstore.google.com/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) (ook voor [Firefox](https://addons.mozilla.org/en-US/firefox/addon/headingsmap/))
- [Gebruik de tools binnen Polypane om de toegankelijkheid en bruikbaarheid te testen](https://polypane.app/) (gratis voor studenten, via de [GitHub Student Developer Pack](https://polypane.app/github-students/))


### Details

Soms wil je een deel van de informatie op een pagina verbergen en die details pas later tonen. Misschien maak je wel een lijst met Veelgestelde vragen, maar wil je dat er steeds maar één vraag openstaat.

Dit patroon noemen we vaak een _accordeon_, en heeft te maken met _progressive disclosure_. In HTML bestaat hier (tegenwoordig) een simpel element voor. Begin met een `<h2 id="details">Details</h2>` heading.

#### Oefeningen

- Zoek samen op het Internet—of vraag ChadGPT—hoe je een accordeon kunt maken met HTML, CSS en JS. Je gaat verschillende tutorials en meningen vinden. Schrijf met je tafel kort wat verschillende manieren op het whiteboard, en of deze een elegante UX opleveren. Test bijvoorbeeld met je toetsenbord hoe ze te bedienen zijn.

- In HTML kun je het `<details>` element gebruiken voor dit soort _widgets_. Kopieer onderstaande code naar je HTML document en onderzoek wat het je voor UX geeft:

```html
<details>
  <summary>Meer info</summary>
  <p>Deze informatie krijg je pas later te zien.</p>
  <p>Kan handig zijn.</p>
</details>
```

- HTML biedt je ook iets voor accordeons, waarbij slechts één element openstaat. Je kunt hiervoor het `name` attribuut gebruiken. Experimenteer met onderstaande code, en onderzoek hoe de UX is, door je toetsenbord te gebruiken.


```html
<details name="faq">
  <summary>Moet ik al kunnen coderen?</summary>
  <p>Nee, je hebt helemaal geen voorkennis nodig om te beginnen aan deze opleiding, we kunnen je alles leren! Als je wel al voorkennis hebt, is dat alleen maar goed, dan kunnen we je helpen je skills te verbeteren en te verdiepen in de stof.</p>
</details>
<details name="faq">
  <summary>Wat is frontend development?</summary>
  <p>Een frontend developer ontwerpt en bouwt websites in HTML, CSS en JavaScript. Deze frontend talen leer je bij ons, je hebt dus geen voorkennis nodig.</p>
</details>
<details name="faq">
  <summary>Hoe werkt deze frontend developer opleiding?</summary>
  <p>Je richt je tijdens deze tweejarige studie op webdesign, visual interface design en frontend development. Vanaf het begin van de opleiding werk je aan actuele opdrachten van échte opdrachtgevers, en leer je samenwerken in multidisciplinaire teams.</p>
</details>
```

- Zoek via je browser eens naar een stuk tekst dat ingeklapt is, met `Cmd+F` of `Ctrl+F`. Wat gebeurt er dan? Allemaal functionaliteit die je gratis krijgt, als je goede HTML gebruikt.

- Schrijf een `<summary>` element op het whiteboard als jullie klaar zijn.

#### Bronnen

- [`<details>`: The Details disclosure element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [Het `open` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#open)
- [Het `name` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name)
- [Using & Styling the Details Element](https://css-tricks.com/using-styling-the-details-element/)


### Popups

Zoek op het Internet hoe je een popup kunt maken met HTML, CSS en JS. Je gaat ook hier weer verschillende oplossingen vinden.

Test of je de voorbeelden die je gevonden hebt ook kunt bedienen met alleen het toetsenbord. Kun je je `Escape` toets gebruiken om de popup te sluiten? Hoe werkt dit samen met de tabvolgorde? Oftewel: hoe is de UX van deze oplossingen?

Waarschijnlijk vond je iets over `<div>`jes, verschillende `class`es, JavaScript gebruiken, `classList`, `style.display = 'block'`, `style.display = 'none'`, `<button>`s, `focus`, `inert`, _focus trap_, etc. Het Web staat er vol mee. Hoe weet je nou wat goed is?

HTML biedt ook hier iets voor. Voeg de subkop `<h2 id="popups">Popups</h2>` toe aan je HTML, en daarna het volgende:

```html
<button popovertarget="popup">Open iets</button>

<dialog popover id="popup">
  <p>Dit staat in een popup/overlay/popover.</p>
  <p>Leuk he.</p>
  <button popovertarget="popup" popovertargetaction="hide">Sluit dit ding weer</button>
</dialog>
```

Controleer of deze popup bijvoorbeeld volledig met je toetsenbord te bedienen is. Je hoeft hier geen extra werk voor te doen. De `Escape` toets werkt, buiten de popup klikken werkt, de focus wordt automatisch goed gezet. Dankjewel HTML.

En, wat ook prettig is, dit werkt goed samen met CSS. Voeg dit bijvoorbeeld toe, en test wat het doet.

```html
<style>
dialog::backdrop {
  background: rgb(0 0 0 / 50%);
}
</style>
```

Dankjewel CSS.

#### Bronnen

- [`<dialog>`: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [Het `open` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#open)
- [Het `popover` attribuut](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)
- [De `::backdrop` selector in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop)


### Hoe nu verder?

Je hebt gezien dat HTML je veel biedt als _basislaag_. En met CSS als _extra laag_ kun je dit er vaak ook nog _mooi_ uit laten zien. Dit noemen we _Progressive Enhancement_: zoek de _simpelste_ techniek om iets voor elkaar te krijgen, en verrijk die pas daarna. HTML heeft meer dan 100 elementen, allemaal met hun eigen ingebouwde UX.

Ga door met de issues uit je project board, en pas toe wat je de afgelopen dagen hebt geleerd over HTML en Toegankelijkheid. Misschien moet je hele stukken opnieuw schrijven door wat je hebt geleerd, maar dat is helemaal prima.

Tijdens de Code/Design Review komende vrijdag krijg je feedback op je voortgang.
