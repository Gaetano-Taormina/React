# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 6

**Italiano:**

mantieni disabilitato un pulsante di azione finché l'utente non spunta una specifica casella di controllo per confermare la volontà di procedere

**English:**

keep an action button disabled until the user checks a specific checkbox confirming their willingness to proceed

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE SubmitUnlock
  * DICHIARA stato booleano `checked` (false)
  * RITORNA struttura JSX:
    * CHECKBOX di conferma collegata a `checked`
    * PULSANTE di invio con attributo `disabled={!checked}`
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE SubmitUnlock
```

**English:**

```text
* START COMPONENT SubmitUnlock
  * DECLARE boolean state `checked` (false)
  * RETURN JSX structure:
    * CHECKBOX input linked to `checked`
    * SUBMIT BUTTON with attribute `disabled={!checked}`
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT SubmitUnlock
```
