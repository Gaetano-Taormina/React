# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 10

**Italiano:**

ridimensiona il testo della pagina in base al radio button selezionato dall'utente

**English:**

resize page text based on the radio button selected by the user

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE FontResizer
  * DICHIARA stato `size` (`"fs-5"`)
  * RITORNA struttura JSX:
    * RADIO BUTTON (Piccolo, Medio, Grande) che modificano `size`
    * TESTO dimostrativo la cui classe Bootstrap di dimensione corrisponde a `size`
* FINE COMPONENTE FontResizer
```

**English:**

```text
* START COMPONENT FontResizer
  * DECLARE state `size` (`"fs-5"`)
  * RETURN JSX structure:
    * RADIO BUTTONS (Small, Medium, Large) updating `size`
    * DEMO TEXT whose Bootstrap size class matches `size`
* END COMPONENT FontResizer
```
