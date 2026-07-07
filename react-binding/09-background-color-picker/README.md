# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 9

**Italiano:**

modifica il colore di sfondo della pagina scegliendo tra diverse opzioni di colori predefiniti tramite pulsanti

**English:**

change the page background color by choosing from several predefined color options via buttons

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE ColorPicker
  * DICHIARA stato `color` con classe sfondo predefinita
  * RITORNA struttura JSX:
    * CONTENITORE principale che adotta dinamicamente la classe `color.class`
    * GRUPPO di pulsanti per cambiare istantaneamente `color`
* FINE COMPONENTE ColorPicker
```

**English:**

```text
* START COMPONENT ColorPicker
  * DECLARE state `color` with default background class
  * RETURN JSX structure:
    * MAIN wrapper adopting dynamic `color.class`
    * BUTTON GROUP to instantly update `color`
* END COMPONENT ColorPicker
```
