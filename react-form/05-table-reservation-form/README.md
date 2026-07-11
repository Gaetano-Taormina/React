# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 5

**Italiano:**

registra i dati di prenotazione del tavolo confermando all'utente i dettagli inseriti (nome, n. ospiti e data) in una scheda di riepilogo

**English:**

record table reservation data confirming to the user the entered details (name, number of guests and date) in a summary card

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE TableReservation
  * DICHIARA stato oggetto `formData` con proprietà `name`, `guests`, `date`
  * DICHIARA stato `confirmed` (null) per memorizzare la conferma della prenotazione
  * DEFINISCI funzione `handleSubmit(e)`:
    * PREVIENI default del form
    * SE i campi sono compilati, COPIA `formData` in `confirmed`
  * RITORNA struttura JSX:
    * SE `!confirmed`, MOSTRA il form con input testo per nome, numero per ospiti e datetime-local per data
    * ALTRIMENTI, MOSTRA la scheda di riepilogo con tutti i dettagli di prenotazione confermati
* FINE COMPONENTE TableReservation
```

**English:**

```text
* START COMPONENT TableReservation
  * DECLARE state object `formData` with properties `name`, `guests`, `date`
  * DECLARE state `confirmed` (null) to store confirmed reservation details
  * DEFINE function `handleSubmit(e)`:
    * PREVENT form default
    * IF fields are valid, COPY `formData` inside `confirmed` state
  * RETURN JSX structure:
    * IF `!confirmed`, RENDER reservation form with text, number and datetime-local inputs
    * ELSE, RENDER summary card highlighting confirmed reservation details
* END COMPONENT TableReservation
```
