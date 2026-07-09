# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 14

**Italiano:**

mostra il numero di caratteri rimanenti da scrivere durante la digitazione in una textarea

**English:**

display the number of remaining characters to type while typing in a textarea

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE RemainingChars
  * DICHIARA costante `MAX = 100`
  * DICHIARA stato `text` e calcola i caratteri rimanenti (`rem`)
  * RITORNA struttura JSX:
    * TEXTAREA collegata a `text` con limite `maxLength={MAX}`
    * BADGE colorato con i caratteri rimanenti
* FINE COMPONENTE RemainingChars
```

**English:**

```text
* START COMPONENT RemainingChars
  * DECLARE constant `MAX = 100`
  * DECLARE state `text` and compute remaining chars (`rem`)
  * RETURN JSX structure:
    * TEXTAREA linked to `text` with `maxLength={MAX}`
    * COLORED BADGE showing remaining characters
* END COMPONENT RemainingChars
```
