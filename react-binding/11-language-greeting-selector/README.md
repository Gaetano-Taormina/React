# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 11

**Italiano:**

cambia la lingua di un messaggio di benvenuto visualizzato a schermo selezionando l'opzione desiderata da una select

**English:**

change the language of a welcome message displayed on the screen by selecting the desired option from a select dropdown

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE LangSelector
  * DICHIARA oggetto `GREETINGS` con messaggi in varie lingue
  * DICHIARA stato `lang` (`"it"`)
  * RITORNA struttura JSX:
    * SELECT per scegliere il codice lingua
    * ALERT che mostra il messaggio di benvenuto associato a `GREETINGS[lang]`
* FINE COMPONENTE LangSelector
```

**English:**

```text
* START COMPONENT LangSelector
  * DECLARE object `GREETINGS` with multi-language strings
  * DECLARE state `lang` (`"it"`)
  * RETURN JSX structure:
    * SELECT dropdown to pick language code
    * ALERT displaying welcome string inside `GREETINGS[lang]`
* END COMPONENT LangSelector
```
