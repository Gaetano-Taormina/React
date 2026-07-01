# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 5

**Italiano:**

genera una serie di box colorati a partire da un array di colori

**English:**

generate a series of colored boxes starting from an array of colors

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE ColorBoxes
  * DICHIARA array di stringhe `colori` contenente codici colore (es. esadecimali o nomi di colori)
  * RITORNA struttura JSX:
    * CONTENITORE flessibile o griglia (div)
      * PER OGNI `colore` (e indice `index`) IN `colori` (ciclo map):
        * ELEMENTO box (div) con chiave `index`:
          * IMPOSTA stile inline `backgroundColor` uguale a `colore`
          * MOSTRA il codice o nome del colore all'interno del box
* FINE COMPONENTE ColorBoxes
```

**English:**

```text
* START COMPONENT ColorBoxes
  * DECLARE array of strings `colors` containing color codes (e.g. hex or color names)
  * RETURN JSX structure:
    * FLEX or GRID container (div)
      * FOR EACH `color` (and index `index`) IN `colors` (map loop):
        * BOX ELEMENT (div) with key `index`:
          * SET inline style `backgroundColor` equal to `color`
          * DISPLAY the color code or name inside the box
* END COMPONENT ColorBoxes
```
