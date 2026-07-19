# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

---

## Exercise 7

**Italiano:**

Lista espandibile
presenta un elenco di elementi limitando inizialmente la vista ai primi tre e fornisci un'azione per rivelare progressivamente il resto della lista

**English:**

Expandable list
present a list of items initially limiting the view to the first three and provide an action to progressively reveal the rest of the list

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE ExpandableList (riceve props: `items`, `initialLimit` = 3)
  * DICHIARA stato booleano `isExpanded` inizializzato a `false`
  * CALCOLA `displayedItems`:
    * SE `isExpanded` È true:
      * RITORNA tutto l'array `items`
    * ALTRIMENTI:
      * RITORNA la porzione `items.slice(0, initialLimit)`
  * DEFINISCI funzione `toggleExpand()`:
    * INVERTI il valore di `isExpanded`
  * RITORNA struttura JSX:
    * CONTENITORE lista (div)
      * LISTA (ul):
        * PER OGNI `item` (e indice `idx`) IN `displayedItems` (ciclo map):
          * ELEMENTO lista (li) con chiave `idx` -> mostra contenuto `item`
      * SE la lunghezza di `items` È MAGGIORE di `initialLimit`:
        * BOTTONE azione:
          * SE `isExpanded` È true -> mostra testo "Mostra meno"
          * ALTRIMENTI -> mostra testo "Mostra tutti (" + `items.length` + ")"
          * AL CLICK esegui `toggleExpand()`
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE ExpandableList
```

**English:**

```text
* START COMPONENT ExpandableList (receives props: `items`, `initialLimit` = 3)
  * DECLARE boolean state `isExpanded` initialized to `false`
  * CALCULATE `displayedItems`:
    * IF `isExpanded` IS true:
      * RETURN entire `items` array
    * ELSE:
      * RETURN slice `items.slice(0, initialLimit)`
  * DEFINE function `toggleExpand()`:
    * INVERT value of `isExpanded`
  * RETURN JSX structure:
    * LIST container (div)
      * LIST (ul):
        * FOR EACH `item` (and index `idx`) IN `displayedItems` (map loop):
          * LIST ITEM (li) with key `idx` -> display `item` content
      * IF `items.length` IS GREATER than `initialLimit`:
        * ACTION BUTTON:
          * IF `isExpanded` IS true -> display text "Show less"
          * ELSE -> display text "Show all (" + `items.length` + ")"
          * ON CLICK execute `toggleExpand()`
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT ExpandableList
```
