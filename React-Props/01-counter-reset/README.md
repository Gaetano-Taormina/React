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

## Exercise 1

**Italiano:**

Contatore con reset
implementa un contatore numerico incrementabile via bottone e aggiungi un pulsante dedicato per azzerare istantaneamente il valore

**English:**

Counter with reset
implement a numerical counter that can be incremented via a button and add a dedicated button to instantly reset the value

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE Counter (riceve props: `initialValue`, `step`)
  * DICHIARA stato `count` inizializzato con `initialValue` (default 0)
  * DEFINISCI funzione `incrementa()`:
    * AGGIORNA `count` sommandogli `step` (default 1)
  * DEFINISCI funzione `reset()`:
    * IMPOSTA `count` uguale a `initialValue`
  * RITORNA struttura JSX:
    * CONTENITORE principale (div)
      * MOSTRA valore corrente di `count`
      * BOTTONE "Incrementa":
        * AL CLICK esegui `incrementa()`
      * BOTTONE "Reset":
        * AL CLICK esegui `reset()`
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE Counter
```

**English:**

```text
* START COMPONENT Counter (receives props: `initialValue`, `step`)
  * DECLARE state `count` initialized with `initialValue` (default 0)
  * DEFINE function `increment()`:
    * UPDATE `count` by adding `step` (default 1)
  * DEFINE function `reset()`:
    * SET `count` equal to `initialValue`
  * RETURN JSX structure:
    * MAIN container (div)
      * DISPLAY current value of `count`
      * BUTTON "Increment":
        * ON CLICK execute `increment()`
      * BUTTON "Reset":
        * ON CLICK execute `reset()`
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT Counter
```
