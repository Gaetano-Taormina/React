# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 15

**Italiano:**

mostra degli avvisi riguardo la quantità di testo scritto in una textarea (es. troppo corto, troppo lungo, lunghezza ottimale)

**English:**

show alerts regarding the amount of text typed in a textarea (e.g. too short, too long, optimal length)

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE LengthAlerts
  * DICHIARA stato `text`
  * DETERMINA il messaggio e la classe di avviso Bootstrap (`alert-warning`, `alert-success`, `alert-danger`)
  * RITORNA struttura JSX:
    * TEXTAREA di input
    * ALERT dinamico che notifica la quantità di testo
* FINE COMPONENTE LengthAlerts
```

**English:**

```text
* START COMPONENT LengthAlerts
  * DECLARE state `text`
  * DETERMINE message and Bootstrap alert class (`alert-warning`, `alert-success`, `alert-danger`)
  * RETURN JSX structure:
    * TEXTAREA input field
    * DYNAMIC ALERT notifying text length status
* END COMPONENT LengthAlerts
```
