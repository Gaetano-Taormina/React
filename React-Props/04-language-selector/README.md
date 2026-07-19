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

## Exercise 4

**Italiano:**

Selettore lingua
visualizza un messaggio di benvenuto che si aggiorni in tempo reale scegliendo tra diverse lingue tramite una serie di bottoni dedicati

**English:**

Language selector
display a welcome message that updates in real time by choosing between different languages via a series of dedicated buttons

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE LanguageSelector (riceve props: `messages`)
  * DICHIARA stato stringa `currentLang` inizializzato con 'it' (o chiave di default)
  * RITORNA struttura JSX:
    * CONTENITORE principale (div)
      * INTESTAZIONE messaggio di benvenuto:
        * MOSTRA la stringa corrispondente a `messages[currentLang]`
      * GRUPPO bottoni lingua:
        * PER OGNI chiave `lang` IN `messages` (ciclo map):
          * BOTTONE con chiave `lang`:
            * AL CLICK imposta `currentLang` uguale a `lang`
            * EVIDENZIA graficamente se `currentLang === lang`
            * MOSTRA il nome della lingua o il codice `lang`
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE LanguageSelector
```

**English:**

```text
* START COMPONENT LanguageSelector (receives props: `messages`)
  * DECLARE string state `currentLang` initialized to 'it' (or default key)
  * RETURN JSX structure:
    * MAIN container (div)
      * WELCOME MESSAGE HEADER:
        * DISPLAY string corresponding to `messages[currentLang]`
      * LANGUAGE BUTTONS GROUP:
        * FOR EACH key `lang` IN `messages` (map loop):
          * BUTTON with key `lang`:
            * ON CLICK set `currentLang` equal to `lang`
            * HIGHLIGHT graphically if `currentLang === lang`
            * DISPLAY language name or code `lang`
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT LanguageSelector
```
