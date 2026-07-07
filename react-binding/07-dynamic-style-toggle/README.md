# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 7

**Italiano:**

applica o rimuovi uno stile specifico (es. grassetto, corsivo, sottolineato, evidenziato) ad un testo target quando la checkbox associata viene attivata o disattivata

**English:**

apply or remove a specific style (e.g. bold, italic, underline, highlight) to target text when the associated checkbox is toggled on or off

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE StyleToggle
  * DICHIARA stati booleani per grassetto, corsivo, sottolineato
  * RITORNA struttura JSX:
    * PARAGRAFO le cui classi Bootstrap dinamiche (`fw-bold`, `fst-italic`, `text-decoration-underline`) seguono le checkbox
    * GRUPPO di checkbox per attivare/disattivare ogni stile
* FINE COMPONENTE StyleToggle
```

**English:**

```text
* START COMPONENT StyleToggle
  * DECLARE boolean states for bold, italic, underline
  * RETURN JSX structure:
    * PARAGRAPH whose dynamic Bootstrap classes (`fw-bold`, `fst-italic`, `text-decoration-underline`) follow checkboxes
    * GROUP of checkboxes to toggle each style
* END COMPONENT StyleToggle
```
