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

## Exercise 6

**Italiano:**

Filtro marca a tendina
data una collezione di articoli, implementa un menu a tendina (select) che filtri la lista visualizzata mostrando esclusivamente i prodotti della marca scelta

**English:**

Brand dropdown filter
given a collection of articles, implement a dropdown menu (select) that filters the displayed list by showing only the products of the chosen brand

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE BrandFilterList (riceve props: `articles`)
  * DICHIARA stato stringa `selectedBrand` inizializzato a 'tutte' (o 'all')
  * ESTRAI lista di marche uniche `brands` da `articles` (aggiungendo l'opzione 'tutte')
  * FILTRA array `articles` per ottenere `filteredArticles`:
    * SE `selectedBrand` È UGUALE a 'tutte':
      * RITORNA tutti gli articoli
    * ALTRIMENTI:
      * RITORNA solo gli articoli dove `articolo.brand === selectedBrand`
  * RITORNA struttura JSX:
    * CONTENITORE principale (div)
      * MENU A TENDINA (select) il cui valore è `selectedBrand`:
        * AL CAMBIAMENTO imposta `selectedBrand` sul valore selezionato
        * PER OGNI `marca` IN `brands` -> elemento `option`
      * LISTA PRODOTTI (ul o griglia):
        * PER OGNI `articolo` IN `filteredArticles` (ciclo map):
          * ELEMENTO lista con chiave `articolo.id` -> mostra nome e marca
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE BrandFilterList
```

**English:**

```text
* START COMPONENT BrandFilterList (receives props: `articles`)
  * DECLARE string state `selectedBrand` initialized to 'all'
  * EXTRACT list of unique brands `brands` from `articles` (adding 'all' option)
  * FILTER array `articles` to get `filteredArticles`:
    * IF `selectedBrand` EQUALS 'all':
      * RETURN all articles
    * ELSE:
      * RETURN only articles where `article.brand === selectedBrand`
  * RETURN JSX structure:
    * MAIN container (div)
      * DROPDOWN MENU (select) whose value is `selectedBrand`:
        * ON CHANGE set `selectedBrand` to the selected value
        * FOR EACH `brand` IN `brands` -> `option` element
      * PRODUCTS LIST (ul or grid):
        * FOR EACH `article` IN `filteredArticles` (map loop):
          * LIST ITEM with key `article.id` -> display name and brand
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT BrandFilterList
```
