# Exercise 4

**Italiano:**

calcola la rata mensile di un finanziamento chiedendo l'importo totale e la durata in anni. Usa un tasso di interesse base del 5%, ma riduci lo tasso dello 0.25% ogni volta che la durata supera i 10 anni multipli (es. dopo 10 anni, dopo 20 anni, ecc.)

**English:**

calculate the monthly installment of a loan asking for total amount and duration in years. Use a base interest rate of 5%, but reduce the rate by 0.25% every time the duration exceeds multiples of 10 years (e.g. after 10 years, after 20 years, etc.)

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE LoanCalc
  * DICHIARA stati di input: `totalAmount` inizializzato a 15000 e `durationYears` a 15
  * DICHIARA stati di uscita: `interestRate`, `monthlyInstallment`, `totalRepayment`
  * DEFINISCI effetto `useEffect` in ascolto su `[totalAmount, durationYears]`:
    * IMPOSTA tasso base `rate = 5.0`
    * SE `durationYears > 10`:
      * CALCOLA multipli superati `multiplesExceeded = Math.floor((durationYears - 1) / 10)`
      * RIDUCI `rate` di `multiplesExceeded * 0.25`
    * AGGIORNA `interestRate` con `rate`
    * CALCOLA numero di mesi `months = durationYears * 12` e tasso mensile `monthlyRate = (rate / 100) / 12`
    * CALCOLA `installment = (totalAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))`
    * AGGIORNA `monthlyInstallment` e `totalRepayment = installment * months`
  * RITORNA struttura JSX:
    * FORM con input per importo e durata in anni
    * BOX evidenziato con il tasso effettivo e badge di sconto se applicato
    * CARDS con rata mensile calcolata e totale finale da restituire
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE LoanCalc
```

**English:**

```text
* START COMPONENT LoanCalc
  * DECLARE input states: `totalAmount` initialized to 15000 and `durationYears` to 15
  * DECLARE output states: `interestRate`, `monthlyInstallment`, `totalRepayment`
  * DEFINE effect `useEffect` observing `[totalAmount, durationYears]`:
    * SET base rate `rate = 5.0`
    * IF `durationYears > 10`:
      * CALCULATE multiples exceeded `multiplesExceeded = Math.floor((durationYears - 1) / 10)`
      * REDUCE `rate` by `multiplesExceeded * 0.25`
    * UPDATE `interestRate` with `rate`
    * CALCULATE total months `months = durationYears * 12` and monthly rate `monthlyRate = (rate / 100) / 12`
    * CALCULATE `installment = (totalAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))`
    * UPDATE `monthlyInstallment` and `totalRepayment = installment * months`
  * RETURN JSX structure:
    * FORM with inputs for amount and duration in years
    * HIGHLIGHTED box displaying effective interest rate and discount badge if applied
    * SUMMARY cards displaying estimated monthly installment and total repayment amount
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT LoanCalc
```
