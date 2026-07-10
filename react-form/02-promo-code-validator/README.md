# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 2

**Italiano:**

valida un codice promozionale inserito dall'utente mostrando lo sconto applicato o segnalando l'invalidità del codice

**English:**

validate a promotional code entered by the user, showing the discount applied or reporting the code invalidity

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE PromoValidator
  * DICHIARA costante oggetto `PROMOS` con codici promozionali validi e relative percentuali
  * DICHIARA stato `code` per l'input dell'utente
  * DICHIARA stato `status` (null) per il risultato della validazione
  * DEFINISCI funzione `handleValidate(e)`:
    * PREVIENI default del form
    * VERIFICA se il codice inserito (in maiuscolo) è presente in `PROMOS`
    * IMPOSTA `status` a valido con il messaggio di sconto, oppure a invalido
  * RITORNA struttura JSX:
    * FORM con input per il codice e bottone Applica
    * BOX di notifica (Alert Bootstrap verde o rosso) che mostra l'esito dinamicamente se `status !== null`
* FINE COMPONENTE PromoValidator
```

**English:**

```text
* START COMPONENT PromoValidator
  * DECLARE constant object `PROMOS` containing valid promo codes and discount percentages
  * DECLARE state `code` for user input
  * DECLARE state `status` (null) for validation result
  * DEFINE function `handleValidate(e)`:
    * PREVENT form default
    * CHECK if uppercase clean code exists in `PROMOS`
    * SET `status` to valid with discount message, or invalid with error message
  * RETURN JSX structure:
    * FORM with text input and Apply button
    * NOTIFICATION box (Bootstrap alert green or red) dynamically showing `status` if present
* END COMPONENT PromoValidator
```
