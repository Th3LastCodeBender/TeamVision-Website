# Wiki: catturare l'attenzione sul web

Oct 12, 2026 · @Magico

## Principi chiave

Gli utenti non leggono: scansionano, decidono in pochi secondi e guardano soprattutto in alto a sinistra. Ogni scelta di design parte da qui.

1. **Hai circa 10 secondi** per dire cosa offri: se la pagina supera quel filtro, l'utente resta molto più a lungo.
2. **Struttura per la scansione**: titoli, sottotitoli, grassetti ed elenchi guidano l'occhio; un muro di testo produce lettura a "F" e contenuti persi.
3. **Il contenuto importante va in alto e a sinistra**: lì si concentra la maggior parte del tempo di visione.
4. **Mai far sembrare un contenuto una pubblicità**: ciò che sembra un banner viene ignorato, anche se è utile.
5. **Un obiettivo per pagina**: una sola call-to-action principale, ripetuta se serve, senza alternative in competizione.

## I primi 10 secondi

La visita media a una pagina dura meno di un minuto e l'utente fa in tempo a leggere circa un quarto del testo. Ma la media inganna: il comportamento è "o esco subito, o resto a lungo".

- Uno studio Microsoft Research su oltre 2 miliardi di tempi di permanenza ha mostrato che nel 99% delle pagine la probabilità di uscita **cala** col passare del tempo.
- I **primi 10 secondi** sono il giudizio più severo: l'utente, scottato da troppe pagine inutili, scarta in fretta.
- Tra 10 e 30 secondi il rischio di uscita resta alto; dopo circa **30 secondi** la curva si appiattisce e spesso la visita supera i 2 minuti.

**Regola di design:** la value proposition (chi sei, cosa offri, perché dovrebbe interessarmi) deve essere chiara entro 10 secondi, senza scroll e senza interpretazione.

## Come leggono gli utenti

Il layout decide quale schema di lettura adotterà l'utente. L'obiettivo è trasformare la lettura a "F" (la peggiore) in lettura a "layer-cake" (la migliore dopo la lettura completa).

| Pattern | Cosa succede | Quando si verifica | Efficacia |
| --- | --- | --- | --- |
| F | Due passate orizzontali in alto, poi lo sguardo scende lungo il margine sinistro | Testo senza formattazione, utente di fretta | Bassa: si perde ciò che sta a destra e in basso |
| Spotted | Salti tra parole che risaltano o che somigliano a ciò che si cerca | Link, grassetti, numeri, elenchi | Media |
| Layer-cake | Si leggono solo titoli e sottotitoli, poi il corpo della sezione scelta | Contenuto diviso in sezioni con titoli chiari | Alta |
| Commitment | Si legge quasi tutto | Utente molto motivato o che si fida della fonte | Massima, ma rara |
| Marking | Occhio fermo mentre si scorre | Soprattutto su mobile | — |
| Bypassing | Si saltano le prime parole ripetute di un elenco | Voci che iniziano tutte uguali | — |

Nelle lingue che si leggono da destra a sinistra (es. arabo) la F è specchiata.

**Come contrastare la F:**

- Metti i punti più importanti nei **primi due paragrafi**.
- Titoli e sottotitoli ben visibili, che **iniziano con le parole più informative**: bastano le prime 2 parole per capire la sezione.
- Raggruppa visivamente piccoli blocchi correlati (bordo o sfondo diverso).
- Grassetto sulle parole chiave.
- Link con testo descrittivo, mai "clicca qui" o "leggi di più".
- Elenchi puntati e numerati per liste e processi.
- Taglia il testo superfluo.
- Evita che le voci di un elenco inizino tutte con le stesse parole.

## Attenzione verticale e orizzontale

L'attenzione cala bruscamente sotto la prima schermata e si concentra sulla metà sinistra. Dati eyetracking NN/g (120 utenti, schermo 1920×1080):

| Zona della pagina | Quota del tempo di visione |
| --- | --- |
| Prima schermata (above the fold) | 57% |
| Prime due schermate | 74% |
| Prime tre schermate | 81% |
| Primo 20% della pagina | oltre 42% |
| Metà sinistra dello schermo | 80% |
| 10% più a sinistra (zona navigazione) | 6% |

Gli utenti scorrono più di un tempo (nel 2010 l'80% del tempo stava sopra il fold), ma raramente vanno oltre la terza schermata. Schermi più larghi hanno spostato il picco d'attenzione verso destra di soli \~200 px.

**Regole di design:**

- Riserva la **parte alta** a obiettivi chiave dell'utente e del business; la CTA principale sopra il fold.
- Contenuto prioritario **al centro-sinistra**; il margine estremo sinistro per la navigazione.
- Contenuto secondario a **destra**: verrà visto meno, ed è accettabile.
- Se devi usare la destra per qualcosa di importante, aumentane la **prominenza visiva**.
- Evita i **"falsi fondi"**: nei layout minimalisti la pagina sembra finita; usa segnali (testo o immagini tagliati dal bordo) che invitano a scorrere.
- Rispetta le **convenzioni** (navigazione in alto o a sinistra, logo in alto a sinistra): gli utenti cercano le cose dove le trovano sugli altri siti.

## Banner blindness

Gli utenti ignorano tutto ciò che percepiscono come pubblicità, anche quando non lo è. Il fenomeno è documentato da quasi trent'anni ed è ancora forte, su desktop e su mobile.

**Cosa fa sembrare un elemento una pubblicità:**

- **Posizione**: banner in cima alla pagina o colonna destra.
- **Aspetto**: animazioni, riquadri rettangolari in mezzo al testo, sfondo colorato diverso dal resto, testo incorporato nell'immagine.
- **Vicinanza** a vere pubblicità: un annuncio "contamina" tutta la zona in cui si trova.

**Effetto "patata bollente":** se un'area delude una volta, l'utente smette di guardarla, anche nelle altre pagine e su altri siti. In un caso osservato, la colonna destra occupava il 25% dell'area contenuti ma ha ricevuto lo 0,8% delle fissazioni.

**Su mobile** anche elementi legittimi che risaltano troppo (grandi immagini, sezioni con sfondo diverso) vengono scambiati per annunci e saltati.

**Regole di design:**

- Non far sembrare i contenuti importanti delle pubblicità: renderli "diversi" per farli notare spesso ottiene l'effetto opposto.
- Non mescolare contenuti e annunci nella stessa sezione visiva.
- Verifica con test utente che i contenuti in cima o a destra vengano davvero visti.

## Hero section e landing page

La hero è il blocco in cima che l'utente vede al caricamento: deve superare da sola il test dei 10 secondi. Una landing page = un obiettivo = una CTA principale.

**Anatomia della hero:**

| Elemento | Funzione | Regola |
| --- | --- | --- |
| Headline | Dire cosa offri | Specifica, chiara, orientata al beneficio; coerente con l'annuncio o il link da cui arriva l'utente |
| Sottotitolo | Spiegare la headline | Una riga, linguaggio semplice |
| Visual | Mostrare il prodotto o il risultato | Concreto (prodotto, screenshot, persona reale), non decorativo o astratto; leggero da caricare |
| CTA | Far agire | Idealmente una sola, testo orientato al risultato ("Prova gratis", non "Invia") |
| Segnale di fiducia | Ridurre lo scetticismo | Recensioni, loghi clienti, numeri reali, già visibili senza scroll |

**Regole per la landing page:**

- Headline, sottotitolo, CTA e almeno un elemento di fiducia visibili **senza scroll**, sia su desktop che su mobile.
- Ripeti la stessa CTA lungo la pagina: dopo un beneficio chiave, dopo le testimonianze e alla fine.
- Elimina link e uscite che competono con l'obiettivo principale.
- Parla di **benefici**, non solo di caratteristiche: il valore percepito deve superare il costo percepito.
- Una hero più bassa, o elementi tagliati dal bordo inferiore, invitano a scorrere.
- Pagina veloce: verifica con Google PageSpeed Insights.
- Testa headline, immagine, CTA e form con A/B test: sono gli elementi che più spesso producono risultati significativi.

## Checklist per nuovi design

Da spuntare prima di pubblicare ogni pagina.

**Primi 10 secondi**

- [ ] La value proposition si capisce senza scroll e senza leggere il corpo del testo
- [ ] Headline specifica e coerente con la fonte del traffico
- [ ] CTA principale sopra il fold, con testo orientato al risultato
- [ ] Almeno un segnale di fiducia visibile subito

**Struttura e lettura**

- [ ] I punti chiave sono nei primi due paragrafi
- [ ] Titoli e sottotitoli iniziano con le parole più informative
- [ ] Niente muri di testo: blocchi brevi, elenchi, grassetti mirati
- [ ] Link con testo descrittivo

**Layout**

- [ ] Contenuto prioritario in alto e al centro-sinistra
- [ ] Navigazione e logo nelle posizioni convenzionali
- [ ] Nessun falso fondo: segnali che invitano a scorrere
- [ ] Nessun contenuto importante che sembri una pubblicità o stia vicino a un annuncio

**Conversione**

- [ ] Un solo obiettivo, CTA ripetuta e senza alternative in competizione
- [ ] Benefici prima delle caratteristiche
- [ ] Pagina veloce su mobile
- [ ] Piano di A/B test su headline, visual e CTA

## Fonti

Contenuti sintetizzati e riformulati; per i dettagli e le heatmap consulta gli originali.

- [F-Shaped Pattern of Reading on the Web — NN/g](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- [Text Scanning Patterns: Eyetracking Evidence — NN/g](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)
- [How Long Do Users Stay on Web Pages? — NN/g](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)
- [Scrolling and Attention — NN/g](https://www.nngroup.com/articles/scrolling-and-attention/)
- [Horizontal Attention Leans Left — NN/g](https://www.nngroup.com/articles/horizontal-attention-leans-left/)
- [Banner Blindness Revisited — NN/g](https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/)
- [11 Best CRO Books — Invesp](https://www.invespcro.com/blog/best-cro-books/)
- [34 Must-have books for landing page designers — Landingfolio](https://landingfolio.com/blog/post/34-must-have-books-for-landing-page-designers-and-digital-marketers-including-lesser-known-books)
- [Landing Page Optimization Checklist — ClicksGeek](https://clicksgeek.com/landing-page-optimization-checklist/)
- [Website hero section: 6 design best practices — Nick Babich](https://babich.biz/blog/website-hero-section-6-design-best-practices/)
