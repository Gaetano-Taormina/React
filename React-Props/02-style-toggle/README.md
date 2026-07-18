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

## Exercise 2

**Italiano:**

Toggle classe CSS
crea un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click, mutandone dinamicamente l'aspetto grafico

**English:**

CSS class toggle
create a button that alternates its style class (e.g., from primary to success) on every click, dynamically changing its graphical appearance

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE StyleToggleButton (riceve props: `label`, `classA`, `classB`)
  * DICHIARA stato booleano `isClassA` inizializzato a `true`
  * DEFINISCI funzione `toggleStyle()`:
    * INVERTI il valore booleano di `isClassA`
  * RITORNA struttura JSX:
    * ELEMENTO button:
      * SE `isClassA` È true:
        * IMPOSTA `className` uguale alla prop `classA` (es. 'primary')
      * ALTRIMENTI:
        * IMPOSTA `className` uguale alla prop `classB` (es. 'success')
      * AL CLICK esegui `toggleStyle()`
      * MOSTRA il testo `label`
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE StyleToggleButton
```

**English:**

```text
* START COMPONENT StyleToggleButton (receives props: `label`, `classA`, `classB`)
  * DECLARE boolean state `isClassA` initialized to `true`
  * DEFINE function `toggleStyle()`:
    * INVERT the boolean value of `isClassA`
  * RETURN JSX structure:
    * BUTTON element:
      * IF `isClassA` IS true:
        * SET `className` equal to prop `classA` (e.g. 'primary')
      * ELSE:
        * SET `className` equal to prop `classB` (e.g. 'success')
      * ON CLICK execute `toggleStyle()`
      * DISPLAY text `label`
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT StyleToggleButton
```
