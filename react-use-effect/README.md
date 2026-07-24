# React-Use-Effect & Side Effects Handling

**Italiano:**
Raccolta completa dei 6 esercizi sulla gestione degli effetti collaterali (**Side Effects**) e calcoli reattivi in React tramite l'hook **`useEffect`**, calcolo preventivi, validazioni e stime in tempo reale. Tutti gli esercizi sono formattati con **Bootstrap 5** per un'interfaccia moderna e verificati tramite linter **Oxlint**.

> [!NOTE]
> **Nomenclatura Standard:** Tutte le cartelle degli esercizi sono state create con descrittori funzionali in inglese (`00-kebab-case`) e i componenti interni sono focalizzati sulla sincronizzazione reattiva tramite `useEffect`.

**English:**
Comprehensive collection of 6 exercises covering **Side Effects** handling and reactive calculations in React using the **`useEffect`** hook, quote calculations, validations, and real-time estimators. Styled with **Bootstrap 5** and verified with **Oxlint**.

> [!NOTE]
> **Standard Naming:** All exercise directories have been created using English functional descriptors (`00-kebab-case`), and internal components focus on reactive synchronization via `useEffect`.

---

---

## Come eseguire i progetti / How to Run Locally

**Italiano:**
Per avviare o verificare qualsiasi esercizio:

1. Entra nella cartella desiderata (es. `cd 01-electric-bill-estimator`)
2. Installa le dipendenze con `pnpm install` (oppure `npm install`)
3. Avvia il server di sviluppo con `pnpm dev` (oppure `npm run dev`)
4. Verifica il linter con `pnpm oxlint`

**English:**
To run or lint any exercise locally:

1. Navigate to the desired folder (e.g., `cd 01-electric-bill-estimator`)
2. Install dependencies with `pnpm install` (or `npm install`)
3. Start the development server with `pnpm dev` (or `npm run dev`)
4. Run linter checks with `pnpm oxlint`

## Elenco Esercizi (Italiano)

Ogni cartella rappresenta un progetto React + Vite indipendente e configurato, corredato da un proprio `README.md` con traccia in italiano/inglese e pseudocodice indentato (Reasoning).

| # | Cartella | Funzionalità | Concetti Chiave |
| :---: | :--- | :--- | :--- |
| **1** | [`01-electric-bill-estimator`](./01-electric-bill-estimator) | Stima Bolletta Elettrica | Sincronizzazione costi mensili/annuali ed evidenziazione rossa se si supera la soglia |
| **2** | [`02-payment-form-validator`](./02-payment-form-validator) | Validatore Form di Pagamento | Controllo di carta (16 cifre), scadenza e CVV (3 cifre) con abilitazione bottone `Paga` |
| **3** | [`03-shipping-cost-calculator`](./03-shipping-cost-calculator) | Costo di Spedizione | Calcolo fasce (standard <150cm, volumetrica 150-750cm, ingombrante >750cm) |
| **4** | [`04-loan-installment-calculator`](./04-loan-installment-calculator) | Calcolo Rata Finanziamento | Sconto tasso -0.25% per ogni decennio multiplo superato (>10 anni, >20 anni) |
| **5** | [`05-trip-quote-configurator`](./05-trip-quote-configurator) | Configuratore di Viaggio | Calcolo preventivo combinato su camere, notti e tipologia di alloggio (Standard, Premium, VIP) |
| **6** | [`06-fuel-consumption-estimator`](./06-fuel-consumption-estimator) | Consumo di Carburante | Calcolo litri necessari e spesa totale in base ai km da percorrere e prezzo benzina |

## Exercises Overview (English)

Each folder represents a standalone, configured React + Vite project, complete with its own `README.md` featuring Italian/English specifications and indented pseudocode (Reasoning).

| # | Folder | Feature | Key Concepts |
| :---: | :--- | :--- | :--- |
| **1** | [`01-electric-bill-estimator`](./01-electric-bill-estimator) | Electric Bill Estimator | Sincronizzazione costi mensili/annuali ed evidenziazione rossa se si supera la soglia |
| **2** | [`02-payment-form-validator`](./02-payment-form-validator) | Payment Form Validator | Controllo di carta (16 cifre), scadenza e CVV (3 cifre) con abilitazione bottone `Paga` |
| **3** | [`03-shipping-cost-calculator`](./03-shipping-cost-calculator) | Shipping Cost Calculator | Calcolo fasce (standard <150cm, volumetrica 150-750cm, ingombrante >750cm) |
| **4** | [`04-loan-installment-calculator`](./04-loan-installment-calculator) | Loan Installment Calculator | Sconto tasso -0.25% per ogni decennio multiplo superato (>10 anni, >20 anni) |
| **5** | [`05-trip-quote-configurator`](./05-trip-quote-configurator) | Trip Quote Configurator | Calcolo preventivo combinato su camere, notti e tipologia di alloggio (Standard, Premium, VIP) |
| **6** | [`06-fuel-consumption-estimator`](./06-fuel-consumption-estimator) | Fuel Consumption Estimator | Calcolo litri necessari e spesa totale in base ai km da percorrere e prezzo benzina |
