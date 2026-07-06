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

## Exercise 9

**Italiano:**

Form login validato
costruisci un form di login dove il pulsante di invio rimane inattivo finché i campi email e password non soddisfano i requisiti minimi di lunghezza

**English:**

Validated login form
build a login form where the submit button remains inactive until the email and password fields meet the minimum length requirements

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE LoginForm (riceve props: `onLogin`, `minEmailLength` = 5, `minPasswordLength` = 8)
  * DICHIARA stato stringa `email` inizializzato a stringa vuota
  * DICHIARA stato stringa `password` inizializzato a stringa vuota
  * CALCOLA booleano `isEmailValid` = lunghezza di `email` >= `minEmailLength` e contiene '@'
  * CALCOLA booleano `isPasswordValid` = lunghezza di `password` >= `minPasswordLength`
  * CALCOLA booleano `isFormValid` = `isEmailValid` E `isPasswordValid`
  * DEFINISCI funzione `handleSubmit(event)`:
    * PREVIENI comportamento predefinito del form
    * SE `isFormValid` È true:
      * CHIAMA prop callback `onLogin({ email, password })`
  * RITORNA struttura JSX:
    * FORM al cui evento `onSubmit` associ `handleSubmit`:
      * CAMPO INPUT email (type="email", value=`email`, onChange aggiorna `email`)
      * CAMPO INPUT password (type="password", value=`password`, onChange aggiorna `password`)
      * BOTTONE submit "Accedi":
        * SE `isFormValid` È false -> imposta attributo `disabled` a true
        * ALTRIMENTI -> imposta attributo `disabled` a false
* FINE COMPONENTE LoginForm
```

**English:**

```text
* START COMPONENT LoginForm (receives props: `onLogin`, `minEmailLength` = 5, `minPasswordLength` = 8)
  * DECLARE string state `email` initialized to empty string
  * DECLARE string state `password` initialized to empty string
  * CALCULATE boolean `isEmailValid` = `email.length` >= `minEmailLength` and contains '@'
  * CALCULATE boolean `isPasswordValid` = `password.length` >= `minPasswordLength`
  * CALCULATE boolean `isFormValid` = `isEmailValid` AND `isPasswordValid`
  * DEFINE function `handleSubmit(event)`:
    * PREVENT default form behavior
    * IF `isFormValid` IS true:
      * CALL callback prop `onLogin({ email, password })`
  * RETURN JSX structure:
    * FORM with handler `onSubmit={handleSubmit}`:
      * INPUT FIELD email (type="email", value=`email`, onChange updates `email`)
      * INPUT FIELD password (type="password", value=`password`, onChange updates `password`)
      * SUBMIT BUTTON "Login":
        * IF `isFormValid` IS false -> set `disabled` attribute to true
        * ELSE -> set `disabled` attribute to false
* END COMPONENT LoginForm
```
