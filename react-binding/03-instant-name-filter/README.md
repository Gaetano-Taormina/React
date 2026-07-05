# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 3

**Italiano:**

filtra istantaneamente un array di nomi visualizzati a schermo mostrando solo quelli che contengono la stringa digitata nell'input

**English:**

instantly filter an array of names displayed on screen, showing only those containing the string typed into the input

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE NameFilter
  * DICHIARA costante `NAMES` con elenco predefinito
  * DICHIARA stato `search` inizializzato a `""`
  * CALCOLA `filtered` filtrando `NAMES` in base alla stringa digitata
  * RITORNA struttura JSX:
    * INPUT di ricerca
    * LISTA di elementi renderizzati con `.map()` da `filtered`
* FINE COMPONENTE NameFilter
```

**English:**

```text
* START COMPONENT NameFilter
  * DECLARE constant `NAMES` with predefined list
  * DECLARE state `search` initialized to `""`
  * CALCULATE `filtered` array matching input search
  * RETURN JSX structure:
    * SEARCH INPUT field
    * LIST of items rendered with `.map()` from `filtered`
* END COMPONENT NameFilter
```
