# Exercise 2

**Italiano:**

crea un form di pagamento con gli input per il numero di carta (16 cifre), la scadenza (separando mese e anno) e il CVV (3 cifre). Abilita il pulsante "Paga" solo se tutti i campi sono compilati correttamente

**English:**

create a payment form with inputs for card number (16 digits), expiration (separating month and year), and CVV (3 digits). Enable the "Pay" button only if all fields are filled out correctly

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE PayForm
  * DICHIARA stati di input: `cardNumber`, `expiryMonth`, `expiryYear` e `cvv`
  * DICHIARA stati di validazione: `isCardValid`, `isExpiryValid`, `isCvvValid`, `isFormValid`
  * DICHIARA stato booleano `paymentSuccess` inizializzato a `false`
  * DEFINISCI effetto `useEffect` in ascolto su `[cardNumber, expiryMonth, expiryYear, cvv]`:
    * PULISCI e VERIFICA che `cardNumber` contenga esattamente 16 cifre -> `validCard`
    * VERIFICA che `expiryMonth` sia tra 1 e 12 e che `expiryYear` sia valido -> `validExpiry`
    * PULISCI e VERIFICA che `cvv` contenga esattamente 3 cifre -> `validCvv`
    * AGGIORNA i singoli stati di validità per il feedback visivo
    * IMPOSTA `isFormValid` a `true` SOLO SE `validCard && validExpiry && validCvv`
  * DEFINISCI funzione `handlePayment(e)`:
    * PREVIENI comportamento di default del form
    * SE `isFormValid` è `true`, IMPOSTA `paymentSuccess` a `true`
  * RITORNA struttura JSX:
    * SE `!paymentSuccess`: MOSTRA form con input validati e bottone `disabled={!isFormValid}`
    * ALTRIMENTI: MOSTRA messaggio di successo della transazione
* FINE COMPONENTE PayForm
```

**English:**

```text
* START COMPONENT PayForm
  * DECLARE input states: `cardNumber`, `expiryMonth`, `expiryYear`, and `cvv`
  * DECLARE validation states: `isCardValid`, `isExpiryValid`, `isCvvValid`, `isFormValid`
  * DECLARE boolean state `paymentSuccess` initialized to `false`
  * DEFINE effect `useEffect` observing `[cardNumber, expiryMonth, expiryYear, cvv]`:
    * CLEAN and CHECK if `cardNumber` contains exactly 16 digits -> `validCard`
    * CHECK if `expiryMonth` is between 1 and 12 and `expiryYear` is valid -> `validExpiry`
    * CLEAN and CHECK if `cvv` contains exactly 3 digits -> `validCvv`
    * UPDATE individual validity states for visual feedback
    * SET `isFormValid` to `true` ONLY IF `validCard && validExpiry && validCvv`
  * DEFINE function `handlePayment(e)`:
    * PREVENT default form behavior
    * IF `isFormValid` is `true`, SET `paymentSuccess` to `true`
  * RETURN JSX structure:
    * IF `!paymentSuccess`: SHOW form with validated inputs and button `disabled={!isFormValid}`
    * ELSE: SHOW transaction success alert
* END COMPONENT PayForm
```
