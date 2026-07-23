# Exercise 1

**Italiano:**

crea un form per stimare la bolletta elettrica chiedendo all'utente il costo al kWh e il consumo medio giornaliero. Mostra il costo stimato mensile e annuale, evidenziando in rosso se la spesa mensile supera una certa soglia di attenzione

**English:**

create a form to estimate the electric bill by asking the user the cost per kWh and average daily consumption. Display the estimated monthly and annual cost, highlighting in red if the monthly expense exceeds a certain attention threshold

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE BillCalc
  * DICHIARA stato `costPerKwh` inizializzato a `0.28`
  * DICHIARA stato `dailyKwh` inizializzato a `12.5`
  * DICHIARA stato `warningThreshold` inizializzato a `90`
  * DICHIARA stati `monthlyCost`, `annualCost` e `isOverThreshold`
  * DEFINISCI effetto `useEffect` in ascolto su `[costPerKwh, dailyKwh, warningThreshold]`:
    * CALCOLA `costPerDay = dailyKwh * costPerKwh`
    * CALCOLA `calculatedMonthly = costPerDay * 30` e `calculatedAnnual = costPerDay * 365`
    * AGGIORNA `monthlyCost` e `annualCost` con i valori calcolati
    * IMPOSTA `isOverThreshold` a `true` SE `calculatedMonthly > warningThreshold` ALTRIMENTI `false`
  * RITORNA struttura JSX:
    * FORM con input per `costPerKwh`, `dailyKwh` e `warningThreshold`
    * RIEPILOGO con importo mensile (evidenziato in rosso se `isOverThreshold` è true) e importo annuale
    * AVVISO di allerta in rosso mostrato condizionalmente se la soglia viene superata
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE BillCalc
```

**English:**

```text
* START COMPONENT BillCalc
  * DECLARE state `costPerKwh` initialized to `0.28`
  * DECLARE state `dailyKwh` initialized to `12.5`
  * DECLARE state `warningThreshold` initialized to `90`
  * DECLARE states `monthlyCost`, `annualCost`, and `isOverThreshold`
  * DEFINE effect `useEffect` observing `[costPerKwh, dailyKwh, warningThreshold]`:
    * CALCULATE `costPerDay = dailyKwh * costPerKwh`
    * CALCULATE `calculatedMonthly = costPerDay * 30` and `calculatedAnnual = costPerDay * 365`
    * UPDATE `monthlyCost` and `annualCost` with calculated values
    * SET `isOverThreshold` to `true` IF `calculatedMonthly > warningThreshold` ELSE `false`
  * RETURN JSX structure:
    * FORM with inputs for `costPerKwh`, `dailyKwh`, and `warningThreshold`
    * SUMMARY card displaying monthly cost (highlighted in red if `isOverThreshold` is true) and annual cost
    * ALERT box displayed conditionally if threshold is exceeded
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT BillCalc
```
