# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 3

**Italiano:**

raccogli il feedback dell'utente tramite un voto numerico (radio button) e un commento testuale fornendo una risposta personalizzata in base al punteggio ottenuto

**English:**

collect user feedback via a numerical rating (radio button) and a text comment, providing a personalized response based on the score obtained

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE FeedbackForm
  * DICHIARA stato `rating` (`"5"`) per il voto radio button
  * DICHIARA stato `comment` per la textarea di recensione
  * DICHIARA stato `submitted` (null) per memorizzare i dati al momento dell'invio
  * DEFINISCI funzione `handleSubmit(e)`:
    * CALCOLA una risposta personalizzata in base al valore numerico di `rating` (es. entusiasta per >=4, costruttiva per <=2)
    * SALVA in `submitted` il voto, il commento e la risposta
  * RITORNA struttura JSX:
    * SE `!submitted`, MOSTRA il form con radio button da 1 a 5 stelle e textarea
    * ALTRIMENTI, MOSTRA la scheda di riepilogo con la risposta personalizzata al feedback
* FINE COMPONENTE FeedbackForm
```

**English:**

```text
* START COMPONENT FeedbackForm
  * DECLARE state `rating` (`"5"`) for radio button score
  * DECLARE state `comment` for review textarea
  * DECLARE state `submitted` (null) to store submitted review object
  * DEFINE function `handleSubmit(e)`:
    * COMPUTE personalized reply string depending on numeric `rating` value
    * STORE rating, comment, and reply inside `submitted` state
  * RETURN JSX structure:
    * IF `!submitted`, RENDER form with 1-to-5 star radio buttons and textarea
    * ELSE, RENDER summary box with personalized response string
* END COMPONENT FeedbackForm
```
