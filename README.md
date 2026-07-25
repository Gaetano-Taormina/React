# React Exercises Repository

**Italiano:**
Raccolta completa degli esercizi e progetti su **React & Vite** sviluppati durante il percorso Boolean, strutturata in moduli tematici indipendenti e formattata con **Bootstrap 5**. Ogni cartella di esercizio è denominata con uno standard in inglese (`00-kebab-case`) basato sulla sua funzionalità tecnica principale ed è provvista di verifica linter tramite **Oxlint**.

---

## Moduli & Contenuti

| Modulo | Descrizione | Esercizi | Link |
| :--- | :--- | :--- | :--- |
| **react-intro** | Concetti base: sintassi JSX, rendering condizionale, mapping di array (`.map()`, `.filter()`, `.sort()`) e oggetti. Include esercizi da `01-image-display` a `10-ecommerce-catalog`. | 10 Esercizi | [Apri react-intro](./react-intro) |
| **react-props** | Gestione dello Stato (`useState`), Props (`initialValue`, `step`), eventi form (`event.target.value`) e interattività. Include esercizi da `01-counter-reset` a `10-interactive-todo-list`. | 10 Esercizi | [Apri react-props](./react-props) |
| **react-binding** | Two-way data binding in tempo reale, gestione eventi dinamici (`onChange`, `onClick`), filtri istantanei, contatori e selettori interattivi. Include esercizi da `01-realtime-text-echo` a `15-textarea-length-warnings`. | 15 Esercizi | [Apri react-binding](./react-binding) |
| **react-form** | Gestione completa dei moduli interattivi (Newsletter, Codici Promo, Recensioni, Preventivi, Prenotazioni, Liste Invitati, Rubrica). Include esercizi da `01-newsletter-subscription` a `07-phone-book`. | 7 Esercizi | [Apri react-form](./react-form) |
| **react-use-effect** | Gestione degli effetti collaterali (`useEffect`), calcoli reattivi in tempo reale, preventivi e validazione form (Bolletta, Pagamento, Spedizione, Finanziamento, Viaggio, Carburante). Include esercizi da `01-electric-bill-estimator` a `06-fuel-consumption-estimator`. | 6 Esercizi | [Apri react-use-effect](./react-use-effect) |
| **react-context** | Utilizzo della **Context API** di React. Gestione di stati globali evitando il "prop drilling", passando dati e funzioni direttamente ai componenti tramite `Provider` e `useContext`. Include esercizi da `01-digital-traffic-light` a `03-audio-volume-controller`. | 3 Esercizi | [Apri react-context](./react-context) |

---

## Come eseguire i progetti

1. Entra nella cartella di un esercizio (es. `cd react-binding/01-realtime-text-echo`)
2. Installa le dipendenze: `pnpm install` (o `npm install`)
3. Avvia il server locale: `pnpm dev` (o `npm run dev`)
4. Verifica linter: `pnpm oxlint`

---

**English:**
Comprehensive collection of **React & Vite** exercises and projects developed during the Boolean course, structured into modular thematic modules and styled with **Bootstrap 5**. All exercise directories have been explicitly named after their core technical functionality in English (`00-kebab-case`) and include fast linting verification via **Oxlint**.

---

## Modules & Contents

| Module | Description | Exercises | Link |
| :--- | :--- | :--- | :--- |
| **react-intro** | Basic concepts: JSX syntax, conditional rendering, array mapping (`.map()`, `.filter()`, `.sort()`) and objects. Includes exercises from `01-image-display` to `10-ecommerce-catalog`. | 10 Exercises | [Open react-intro](./react-intro) |
| **react-props** | State Management (`useState`), Props (`initialValue`, `step`), form events (`event.target.value`) and interactivity. Includes exercises from `01-counter-reset` to `10-interactive-todo-list`. | 10 Exercises | [Open react-props](./react-props) |
| **react-binding** | Two-way data binding in real-time, dynamic event handling (`onChange`, `onClick`), instant filters, counters and interactive selectors. Includes exercises from `01-realtime-text-echo` to `15-textarea-length-warnings`. | 15 Exercises | [Open react-binding](./react-binding) |
| **react-form** | Complete handling of interactive forms (Newsletter, Promo Codes, Reviews, Quotes, Bookings, Guest Lists, Phone Book). Includes exercises from `01-newsletter-subscription` to `07-phone-book`. | 7 Exercises | [Open react-form](./react-form) |
| **react-use-effect** | Side effects management (`useEffect`), real-time reactive calculations, quotes and form validation (Bill, Payment, Shipping, Financing, Travel, Fuel). Includes exercises from `01-electric-bill-estimator` to `06-fuel-consumption-estimator`. | 6 Exercises | [Open react-use-effect](./react-use-effect) |
| **react-context** | Using React **Context API**. Managing global states avoiding "prop drilling", passing data and functions directly to components via `Provider` and `useContext`. Includes exercises from `01-digital-traffic-light` to `03-audio-volume-controller`. | 3 Exercises | [Open react-context](./react-context) |

---

## How to Run Locally

1. Navigate to any exercise folder (e.g., `cd react-binding/01-realtime-text-echo`)
2. Install dependencies: `pnpm install` (or `npm install`)
3. Start dev server: `pnpm dev` (or `npm run dev`)
4. Run linter check: `pnpm oxlint`
