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

## Exercise 5

**Italiano:**

Calcolo prezzo variante
realizza una card prodotto che ricalcoli dinamicamente il prezzo finale applicando un sovrapprezzo percentuale alla selezione di una variante specifica

**English:**

Variant price calculation
create a product card that dynamically recalculates the final price by applying a percentage surcharge upon selecting a specific variant

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE ProductCard (riceve props: `basePrice`, `variants`, `productName`)
  * DICHIARA stato `selectedVariantIndex` inizializzato a 0
  * CALCOLA `varianteSelezionata` = `variants[selectedVariantIndex]`
  * CALCOLA `prezzoFinale` = `basePrice` * (1 + `varianteSelezionata.surchargePercentage` / 100)
  * RITORNA struttura JSX:
    * CONTENITORE card (article)
      * TITOLO prodotto `productName`
      * SELEZIONE variante (select o bottoni):
        * PER OGNI `variante` (e indice `idx`) IN `variants` (ciclo map):
          * OPZIONE con valore `idx` -> mostra `variante.name` (+`variante.surchargePercentage`%)
        * AL CAMBIAMENTO aggiorna `selectedVariantIndex`
      * SEZIONE prezzo:
        * MOSTRA prezzo base `basePrice` €
        * MOSTRA prezzo finale ricalcolato `prezzoFinale` €
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE ProductCard
```

**English:**

```text
* START COMPONENT ProductCard (receives props: `basePrice`, `variants`, `productName`)
  * DECLARE state `selectedVariantIndex` initialized to 0
  * CALCULATE `selectedVariant` = `variants[selectedVariantIndex]`
  * CALCULATE `finalPrice` = `basePrice` * (1 + `selectedVariant.surchargePercentage` / 100)
  * RETURN JSX structure:
    * CARD container (article)
      * PRODUCT TITLE `productName`
      * VARIANT SELECTION (select or buttons):
        * FOR EACH `variant` (and index `idx`) IN `variants` (map loop):
          * OPTION with value `idx` -> display `variant.name` (+`variant.surchargePercentage`%)
        * ON CHANGE update `selectedVariantIndex`
      * PRICE SECTION:
        * DISPLAY base price `basePrice` €
        * DISPLAY recalculated final price `finalPrice` €
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT ProductCard
```
