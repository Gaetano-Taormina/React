# React Exercises Repository

**Italiano:**
Raccolta completa degli esercizi e progetti su **React & Vite** sviluppati durante il percorso Boolean, strutturata in moduli tematici indipendenti e formattata con **Bootstrap 5**. Ogni cartella di esercizio è denominata con uno standard in inglese (`00-kebab-case`) basato sulla sua funzionalità tecnica principale ed è provvista di verifica linter tramite **Oxlint**.

**English:**
Comprehensive collection of **React & Vite** exercises and projects developed during the Boolean course, structured into modular thematic modules and styled with **Bootstrap 5**. All exercise directories have been explicitly named after their core technical functionality in English (`00-kebab-case`) and include fast linting verification via **Oxlint**.

---

## Moduli & Contenuti / Modules & Contents

| Modulo / Module | Descrizione / Description | Esercizi / Exercises | Link |
| :--- | :--- | :--- | :--- |
| **react-intro** | Concetti base: sintassi JSX, rendering condizionale, mapping di array (`.map()`, `.filter()`, `.sort()`) e oggetti. Include esercizi da `01-image-display` a `10-ecommerce-catalog`. | 10 Esercizi | [Apri react-intro](./react-intro) |
| **react-props** | Gestione dello Stato (`useState`), Props (`initialValue`, `step`), eventi form (`event.target.value`) e interattività. Include esercizi da `01-counter-reset` a `10-interactive-todo-list`. | 10 Esercizi | [Apri react-props](./react-props) |
| **react-binding** | Two-way data binding in tempo reale, gestione eventi dinamici (`onChange`, `onClick`), filtri istantanei, contatori e selettori interattivi. Include esercizi da `01-realtime-text-echo` a `15-textarea-length-warnings`. | 15 Esercizi | [Apri react-binding](./react-binding) |
| **react-form** | Gestione completa dei moduli interattivi (Newsletter, Codici Promo, Recensioni, Preventivi, Prenotazioni, Liste Invitati, Rubrica). Include esercizi da `01-newsletter-subscription` a `07-phone-book`. | 7 Esercizi | [Apri react-form](./react-form) |
| **react-use-effect** | Gestione degli effetti collaterali (`useEffect`), calcoli reattivi in tempo reale, preventivi e validazione form (Bolletta, Pagamento, Spedizione, Finanziamento, Viaggio, Carburante). Include esercizi da `01-electric-bill-estimator` a `06-fuel-consumption-estimator`. | 6 Esercizi | [Apri react-use-effect](./react-use-effect) |

---

## Come eseguire i progetti / How to Run Locally

1. Entra nella cartella di un esercizio / Navigate to any exercise folder (es. `cd react-binding/01-realtime-text-echo`)
2. Installa le dipendenze / Install dependencies: `pnpm install` (o `npm install`)
3. Avvia il server locale / Start dev server: `pnpm dev` (o `npm run dev`)
4. Verifica linter / Run linter check: `pnpm oxlint`
