# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 6

**Italiano:**

ordina e visualizza una lista di nomi presenti in un array

**English:**

sort and display a list of names present in an array

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE SortedNames
  * DICHIARA array di stringhe `nomi`
  * CREA nuovo array `nomiOrdinati` copiando `nomi` e applicando il metodo `.sort()`
  * RITORNA struttura JSX:
    * CONTENITORE principale
      * TITOLO "Lista Nomi Ordinata"
      * LISTA (ul o ol):
        * PER OGNI `nome` (e indice `index`) IN `nomiOrdinati` (ciclo map):
          * ELEMENTO lista (li) con chiave `index`:
            * MOSTRA la stringa `nome`
* FINE COMPONENTE SortedNames
```

**English:**

```text
* START COMPONENT SortedNames
  * DECLARE array of strings `names`
  * CREATE new array `sortedNames` by copying `names` and applying `.sort()` method
  * RETURN JSX structure:
    * MAIN container
      * TITLE "Sorted Names List"
      * LIST (ul or ol):
        * FOR EACH `name` (and index `index`) IN `sortedNames` (map loop):
          * LIST ITEM (li) with key `index`:
            * DISPLAY string `name`
* END COMPONENT SortedNames
```
