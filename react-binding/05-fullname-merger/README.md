# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 5

**Italiano:**

unisci in tempo reale il valore di due input distinti (nome e cognome) visualizzando il risultato completo in un unico elemento di testo

**English:**

merge in real time the value of two distinct inputs (first name and last name), displaying the complete result in a single text element

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE NameMerger
  * DICHIARA stato `first` per il nome
  * DICHIARA stato `last` per il cognome
  * RITORNA struttura JSX:
    * DUE INPUT separati per nome e cognome
    * ALERT o box di testo che unisce e mostra in tempo reale `first` e `last`
* FINE COMPONENTE NameMerger
```

**English:**

```text
* START COMPONENT NameMerger
  * DECLARE state `first` for first name
  * DECLARE state `last` for last name
  * RETURN JSX structure:
    * TWO SEPARATE inputs for first and last name
    * ALERT box merging and displaying `first` and `last` in real time
* END COMPONENT NameMerger
```
