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

## Exercise 8

**Italiano:**

Selezione taglia prodotto
disponi un gruppo di bottoni per le taglie disponibili ed evidenzia graficamente quella attiva, aggiornando lo stato del componente alla selezione

**English:**

Product size selection
display a group of buttons for the available sizes and visually highlight the active one, updating the component state upon selection

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE SizeSelector (riceve props: `sizes`, `onSizeSelect`)
  * DICHIARA stato `selectedSize` inizializzato con `sizes[0]` (o null)
  * DEFINISCI funzione `handleSelect(size)`:
    * IMPOSTA `selectedSize` uguale a `size`
    * SE la prop `onSizeSelect` È definita:
      * CHIAMA `onSizeSelect(size)`
  * RITORNA struttura JSX:
    * CONTENITORE principale (div)
      * ETICHETTA "Taglia selezionata: " + `selectedSize`
      * GRUPPO BOTTONI taglie (div):
        * PER OGNI `size` IN `sizes` (ciclo map):
          * BOTTONE con chiave `size`:
            * SE `selectedSize === size`:
              * APPLICA classe di stile attiva o evidenziata
            * ALTRIMENTI:
              * APPLICA classe di stile standard
            * AL CLICK esegui `handleSelect(size)`
            * MOSTRA testo della taglia `size` (es. S, M, L, XL)
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE SizeSelector
```

**English:**

```text
* START COMPONENT SizeSelector (receives props: `sizes`, `onSizeSelect`)
  * DECLARE state `selectedSize` initialized with `sizes[0]` (or null)
  * DEFINE function `handleSelect(size)`:
    * SET `selectedSize` equal to `size`
    * IF prop `onSizeSelect` IS defined:
      * CALL `onSizeSelect(size)`
  * RETURN JSX structure:
    * MAIN container (div)
      * LABEL "Selected size: " + `selectedSize`
      * SIZES BUTTONS GROUP (div):
        * FOR EACH `size` IN `sizes` (map loop):
          * BUTTON with key `size`:
            * IF `selectedSize === size`:
              * APPLY active or highlighted style class
            * ELSE:
              * APPLY standard style class
            * ON CLICK execute `handleSelect(size)`
            * DISPLAY size text `size` (e.g. S, M, L, XL)
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT SizeSelector
```
