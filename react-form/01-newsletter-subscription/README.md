# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 1

**Italiano:**

gestisci l'iscrizione alla newsletter nascondendo il form e mostrando un messaggio di ringraziamento dopo l'invio

**English:**

manage newsletter subscription by hiding the form and displaying a thank you message after submission

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE Newsletter
  * DICHIARA stato `email` inizializzato a `""`
  * DICHIARA stato booleano `submitted` (false)
  * DEFINISCI funzione `handleSubmit(e)`:
    * PREVIENI comportamento di default del form
    * SE `email` non è vuota, IMPOSTA `submitted` a true
  * RITORNA struttura JSX:
    * SE `!submitted`, MOSTRA il form con input email e bottone Iscriviti
    * ALTRIMENTI, NASCONDI il form e MOSTRA un messaggio di ringraziamento con la conferma dell'indirizzo
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE Newsletter
```

**English:**

```text
* START COMPONENT Newsletter
  * DECLARE state `email` initialized to `""`
  * DECLARE boolean state `submitted` (false)
  * DEFINE function `handleSubmit(e)`:
    * PREVENT default form submission
    * IF `email` is not empty, SET `submitted` to true
  * RETURN JSX structure:
    * IF `!submitted`, SHOW the subscription form with email input and button
    * ELSE, HIDE the form and SHOW a thank you confirmation message with the address
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT Newsletter
```
