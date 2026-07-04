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

## Exercise 3

**Italiano:**

Validazione checkbox
mostra una checkbox per i termini di servizio e mantieni il bottone di registrazione disabilitato finché l'utente non effettua la selezione

**English:**

Checkbox validation
show a service terms checkbox and keep the registration button disabled until the user makes the selection

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE RegistrationForm (riceve props: `onRegister`)
  * DICHIARA stato booleano `termsAccepted` inizializzato a `false`
  * DEFINISCI funzione `handleCheckboxChange(event)`:
    * IMPOSTA `termsAccepted` sul valore di `event.target.checked`
  * DEFINISCI funzione `handleSubmit(event)`:
    * PREVIENI il comportamento predefinito del form
    * SE `termsAccepted` È true:
      * CHIAMA la callback prop `onRegister()`
  * RITORNA struttura JSX:
    * FORM con gestore `onSubmit={handleSubmit}`
      * ETICHETTA con CHECKBOX:
        * IMPOSTA `checked` su `termsAccepted`
        * AL CAMBIAMENTO esegui `handleCheckboxChange`
        * TESTO "Accetto i termini e le condizioni"
      * BOTTONE "Registrati":
        * SE `termsAccepted` È false:
          * IMPOSTA attributo `disabled` a true
        * ALTRIMENTI:
          * IMPOSTA attributo `disabled` a false
* FINE COMPONENTE RegistrationForm
```

**English:**

```text
* START COMPONENT RegistrationForm (receives props: `onRegister`)
  * DECLARE boolean state `termsAccepted` initialized to `false`
  * DEFINE function `handleCheckboxChange(event)`:
    * SET `termsAccepted` to the value of `event.target.checked`
  * DEFINE function `handleSubmit(event)`:
    * PREVENT default form behavior
    * IF `termsAccepted` IS true:
      * CALL callback prop `onRegister()`
  * RETURN JSX structure:
    * FORM with handler `onSubmit={handleSubmit}`
      * LABEL with CHECKBOX:
        * SET `checked` to `termsAccepted`
        * ON CHANGE execute `handleCheckboxChange`
        * TEXT "I accept the terms and conditions"
      * BUTTON "Register":
        * IF `termsAccepted` IS false:
          * SET `disabled` attribute to true
        * ELSE:
          * SET `disabled` attribute to false
* END COMPONENT RegistrationForm
```
