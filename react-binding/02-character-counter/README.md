# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 2

**Italiano:**

mostra dinamicamente il numero di caratteri inseriti in una casella di input, aggiornando il conteggio ad ogni digitazione

**English:**

dynamically display the number of characters entered in an input box, updating the count with every keystroke

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE CharCounter
  * DICHIARA stato `text` inizializzato a stringa vuota `""`
  * RITORNA struttura JSX:
    * CONTENITORE Bootstrap card
      * INPUT testuale collegato a `text`
      * BADGE che mostra dinamicamente la lunghezza di `text` (`text.length`)
* FINE COMPONENTE CharCounter
```

**English:**

```text
* START COMPONENT CharCounter
  * DECLARE state `text` initialized to empty string `""`
  * RETURN JSX structure:
    * Bootstrap card CONTAINER
      * TEXT INPUT linked to `text`
      * BADGE dynamically showing `text.length`
* END COMPONENT CharCounter
```
