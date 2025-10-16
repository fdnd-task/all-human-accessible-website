# All Human - Accessible Website

## Code/Design Review Toegankelijkheid
Deze week heb je geleerd wat toegankelijkheid is en hoe je een toegankelijkheidstest kunt uitvoeren. 
Daarnaast hebben we gekeken naar hoe je met HTML een goede User Experience (UX) neerzet als front-ender. In de workshop User Experience van HTML heb je geleerd hoe goede en nette HTML ervoor zorgt dat je website beter werkt voor gebruikers. 

### Aanpak

#### 1. Code review toegankelijkheid

1. Push je laatste werk van de repository all-human-accessible-website naar GitHub, publiceer je site via GitHub Pages en plaats een link bij je repo. Zorg ook dat je issues aanstaan.
2. Lees onderstaande checklist om de code review straks mee uit te voeren.

Checklist code-review:
- [ ] Test of de HTML valide is door een HTML validator check te doen op de W3C website: https://validator.w3.org. Schrijf een issue als er in de test problemen naar voren zijn gekomen, en voeg ook mogelijke oplossingen toe aan je issue.
- [ ] Bekijk of de website gebruik maakt van `<a>` en/of `<button>`. Wordt het juiste HTML-element gebruikt voor links naar andere pagina's of externe bronnen? Worden links niet _in_ buttons genest? Kun je met je Tab-toets bij alle links komen? Maak zo nodig hier een issue voor aan.
- [ ] Zet afbeeldingen uit in je browser, of via de Web Developer extensie. Controleer of het juiste gebruik van het `alt`-attribuut wordt toegepast bij de `<img>` tags. Beantwoord daarvoor de volgende vragen: Heeft elke afbeelding een `alt`-attribuut? Is de tekst in het `alt`-attribuut beschrijvend en passend bij de _context van de afbeelding_? Zou je een andere tekst voor het `alt`-attribuut kiezen? Waarom wel of niet? Maak zo nodig hier een issue voor aan.
- [ ] Bekijk of `<input>` elementen worden gebruikt. Controleer of de _labels_ correct zijn gekoppeld aan de invoervelden. Beantwoord de volgende vragen: Heeft elk inputveld een gekoppeld `<label>` element? Kun je op het label klikken om het invoerveld te selecteren? Maak zo nodig hier een issue voor aan.
- [ ] Bekijk de heading structuur als een inhoudsopgave. Je kan hiervoor een screen reader gebruiken, Polypane, of een browser extensie zoals HeadingsMap. Controleer of de heading levels correct zijn gebruikt. De volgende vragen kunnen je daarbij helpen: Is er een logische volgorde van de heading levels (`<h1>`, `<h2>`, `<h3>`, etc.)? Geeft deze een handige inhoudsopgave, of verwacht je andere headings? Is er maar één `<h1>` op de pagina? Worden er geen heading levels overgeslagen (bijvoorbeeld van `<h2>` naar `<h4>`)? Maak zo nodig hier een issue voor aan.
- [ ] Zijn er “popups” of “uitklappers” gemaakt? Gebruiken die ook de juiste HTML, die je bijvoorbeeld met je toetsenbord kunt bedienen? Maak zo nodig hier een issue voor aan.
- [ ] Controleer met de HeadingsMap browser extensie of _landmark_ elementen goed toegepast zijn. Maak zo nodig hier een issue voor aan.

3. Bepaal samen met jullie mentor welke criteria nog toegevoegd kunnen worden aan de code review. Noteer minimaal vijf criteria voor de code review op het whiteboard. Tip: gebruik hiervoor de deeltaak [wcag-audit](https://github.com/fdnd-task/wcag-audit/blob/main/docs/INSTRUCTIONS.md), en met de handmatige tests.
4. Vorm een duo binnen jouw groep en kies twee andere duo’s waarvan jullie de code gaan reviewen. Samen bespreken jullie de code en schieten jullie issues in. Jullie geven als duo dus feedback op het werk van vier verschillende klasgenoten.
5. Gebruik de checklist hierboven en de workshop [user-experience-van-html](https://github.com/fdnd-task/all-human-accessible-website/blob/main/docs/user-experience-van-html.md#links) van woensdag om de code review te doen.

<br/>

#### 2. Design review (vanaf 11:30)
- Als het goed is, heb jij een iteratie gemaakt op het ontwerp van de opdrachtgever. Dit kan een geheel nieuw ontwerp zijn, een kleine aanpassing op het bestaande ontwerp of een uitbreiding van het ontwerp op een ander device (je hebt bijvoorbeeld een desktop versie ontworpen).
- Pak jouw iteratie op het bestaande ontwerp (schetsen of Figma) en de live link van je website erbij.
- Noteer waar in jouw ontwerp je graag feedback op wil ontvangen.
- Ga langs bij minimaal 2 mentoren om feedback te verzamelen. Maak van de feedback issues aan in jouw repo all-human-accessible-website. 

#### Bronnen

- [`<a>`: The Anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [Het `alt` attribuut](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt#usage_notes)
- [HTML5 landmark elements are used to improve navigation](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/)
- [Requirements for providing text to act as an alternative for images @ de HTML specificatie (geavanceerd)](https://html.spec.whatwg.org/dev/images.html#:~:text=4.8.4.3%20Requirements%20for%20providing%20text%20to%20act%20as%20an%20alternative%20for%20images)
- [`<label>`: The Label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [`<h1>`–`<h6>`: The HTML Section Heading elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
