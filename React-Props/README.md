# React-Props & Dynamic Components

**Italiano:**
Raccolta completa dei 10 esercizi sulla gestione delle **Props**, dello **Stato (`useState`)** e degli eventi in React, implementati con interfaccia moderna semplificata tramite **Bootstrap 5**.

> [!NOTE]
> **Aggiornamento Nomenclatura:** Tutte le cartelle degli esercizi sono state rinominate con descrittori funzionali in inglese (es. `01-counter-reset`, `05-variant-pricing`) per riflettere lo scopo tecnico del codice in modo chiaro e professionale.

**English:**
Comprehensive collection of 10 exercises covering **Props**, **State management (`useState`)**, and event handling in React, implemented with a streamlined modern UI using **Bootstrap 5**.

> [!NOTE]
> **Naming Update:** All exercise directories have been renamed with English functional descriptors (e.g., `01-counter-reset`, `05-variant-pricing`) to clearly and professionally reflect the technical purpose of the code.

---

## Elenco Esercizi / Exercises Overview

Ogni cartella rappresenta un progetto React + Vite indipendente e configurato, corredato da un proprio `README.md` con traccia in italiano/inglese e pseudocodice indentato (Reasoning). / Each folder represents a standalone, configured React + Vite project, complete with its own `README.md` featuring Italian/English specifications and indented pseudocode (Reasoning).

| # | Cartella / Folder | Funzionalità / Feature | Concetti Chiave / Key Concepts |
| :---: | :--- | :--- | :--- |
| **1** | [`01-counter-reset`](./01-counter-reset) | Contatore con Reset / Counter with Reset | Props (`initialValue`, `step`), `useState`, reset handlers |
| **2** | [`02-style-toggle`](./02-style-toggle) | Toggle Classe CSS / CSS Style Toggle | Styling dinamico con classi Bootstrap (`primary` / `success`) / Dynamic styling with Bootstrap classes |
| **3** | [`03-checkbox-validation`](./03-checkbox-validation) | Validazione Checkbox / Checkbox Validation | Eventi form e attributo `disabled` condizionale / Form events and conditional `disabled` attribute |
| **4** | [`04-language-selector`](./04-language-selector) | Selettore Lingua / Language Selector | Oggetti di traduzione, mapping di chiavi / Translation objects and key mapping |
| **5** | [`05-variant-pricing`](./05-variant-pricing) | Prezzo Variante / Variant Pricing | **`event.target.value`** con `<select>`, calcolo percentuale / **`event.target.value`** with `<select>` |
| **6** | [`06-brand-filter`](./06-brand-filter) | Filtro Marca / Brand Filter | **`event.target.value`** con `<select>`, filtro array (`filter`) / Array filtering with `<select>` |
| **7** | [`07-expandable-list`](./07-expandable-list) | Lista Espandibile / Expandable List | Slice condizionale degli array, toggle testo / Conditional array slicing and button toggle |
| **8** | [`08-size-selector`](./08-size-selector) | Selezione Taglia / Size Selector | Mapping di bottoni, evidenziazione elemento attivo / Button mapping and active state highlighting |
| **9** | [`09-login-form`](./09-login-form) | Form Login / Validated Login Form | **`event.target.value`** con `<input>`, validazione combinata / Multi-input real-time validation |
| **10** | [`10-interactive-todo-list`](./10-interactive-todo-list) | Todo List Interattiva / Interactive Todo List | Modifica immutabile di array, stile barrato / Immutable array updates and strikethrough |

---

## Esercizi in evidenza (`event.target.value`) / Featured Exercises

**Italiano:**
Negli esercizi **5**, **6** e **9** è stato implementato l'utilizzo di `event.target.value` per estrarre in tempo reale il valore inserito o selezionato dall'utente nei campi form (`<select>` e `<input>`):

- **Esercizio 5 (`05-variant-pricing`)**: Lettura dell'indice della variante dalla tendina per ricalcolare dinamicamente il prezzo maggiorato.
- **Esercizio 6 (`06-brand-filter`)**: Lettura della marca selezionata per filtrare reattivamente il catalogo prodotti visualizzato.
- **Esercizio 9 (`09-login-form`)**: Lettura dei campi Email e Password per sbloccare il bottone di submit solo al raggiungimento dei criteri di validazione.

**English:**
In exercises **5**, **6**, and **9**, `event.target.value` is implemented to extract real-time user input or selection from form fields (`<select>` and `<input>`):

- **Exercise 5 (`05-variant-pricing`)**: Reads the variant dropdown index to dynamically recalculate the surcharged price.
- **Exercise 6 (`06-brand-filter`)**: Reads the selected brand to reactively filter the displayed product catalog.
- **Exercise 9 (`09-login-form`)**: Reads Email and Password fields to unlock the submit button only when validation thresholds are met.

---

## Come eseguire i progetti / How to Run Locally

**Italiano:**
Per avviare qualsiasi esercizio:

1. Entra nella cartella desiderata (es. `cd 05-variant-pricing`)
2. Installa le dipendenze con `npm install` (oppure `pnpm install`)
3. Avvia il server di sviluppo con `npm run dev` (oppure `pnpm run dev`)
4. Verifica il linter con `pnpm oxlint`

**English:**
To run any exercise locally:

1. Navigate to the desired folder (e.g., `cd 05-variant-pricing`)
2. Install dependencies with `npm install` (or `pnpm install`)
3. Start the development server with `npm run dev` (or `pnpm run dev`)
4. Run linter checks with `pnpm oxlint`
