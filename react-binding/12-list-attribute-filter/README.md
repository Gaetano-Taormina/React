# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 12

**Italiano:**

visualizza gli elementi di una lista, e tramite select, filtrali per un suo attributo

**English:**

display elements of a list, and via a select dropdown, filter them by an attribute

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE ListFilter
  * DICHIARA array di elementi con categoria (`cat`)
  * DICHIARA stato `category` (`"all"`)
  * CALCOLA `filtered` in base al selettore
  * RITORNA struttura JSX:
    * SELECT per filtrare la categoria
    * LISTA (`ul`) di elementi corrispondenti
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE ListFilter
```

**English:**

```text
* START COMPONENT ListFilter
  * DECLARE item array with category (`cat`) attribute
  * DECLARE state `category` (`"all"`)
  * CALCULATE `filtered` items matching selector
  * RETURN JSX structure:
    * SELECT dropdown to filter category
    * LIST (`ul`) rendering matching items
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT ListFilter
```
