# Exercise 3

**Italiano:**

crea un form per calcolare il costo di spedizione di un pacco chiedendo larghezza, altezza e profondità. Se la somma delle dimensioni è minore di 150cm il costo è fisso a 12 €, se è tra 150 e 750cm è il 10% delle dimensioni totali, altrimenti non è possibile spedirlo perché troppo ingombrante

**English:**

create a form to calculate shipping cost for a package asking for width, height, and depth. If the sum of the dimensions is less than 150cm the cost is fixed at 12 €, if it is between 150 and 750cm it is 10% of the total dimensions, otherwise it is not possible to ship it because it is too bulky

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE ShipCalc
  * DICHIARA stati di input: `width`, `height`, `depth`
  * DICHIARA stati calcolati: `totalDimensions`, `shippingCost`, `shippingType`
  * DEFINISCI effetto `useEffect` in ascolto su `[width, height, depth]`:
    * CALCOLA somma `sum = width + height + depth`
    * AGGIORNA `totalDimensions` con `sum`
    * SE `sum < 150`:
      * IMPOSTA `shippingCost` a `12` e `shippingType` a `'standard'`
    * ALTRIMENTI SE `sum >= 150` E `sum <= 750`:
      * IMPOSTA `shippingCost` a `sum * 0.10` e `shippingType` a `'volumetric'`
    * ALTRIMENTI:
      * IMPOSTA `shippingCost` a `null` e `shippingType` a `'oversized'`
  * RITORNA struttura JSX:
    * FORM con 3 input numerici per le dimensioni
    * RIEPILOGO con il totale cm e un alert condizionale:
      * Successo (12 €) se standard
      * Avviso (10% importo) se volumetrica
      * Errore ("Troppo ingombrante") se `oversized`
* FINE COMPONENTE ShipCalc
```

**English:**

```text
* START COMPONENT ShipCalc
  * DECLARE input states: `width`, `height`, `depth`
  * DECLARE calculated states: `totalDimensions`, `shippingCost`, `shippingType`
  * DEFINE effect `useEffect` observing `[width, height, depth]`:
    * CALCULATE sum `sum = width + height + depth`
    * UPDATE `totalDimensions` with `sum`
    * IF `sum < 150`:
      * SET `shippingCost` to `12` and `shippingType` to `'standard'`
    * ELSE IF `sum >= 150` AND `sum <= 750`:
      * SET `shippingCost` to `sum * 0.10` and `shippingType` to `'volumetric'`
    * ELSE:
      * SET `shippingCost` to `null` and `shippingType` to `'oversized'`
  * RETURN JSX structure:
    * FORM with 3 numeric inputs for dimensions
    * SUMMARY card with total cm and conditional alert:
      * Success alert (12 €) if standard
      * Warning alert (10% amount) if volumetric
      * Danger alert ("Too bulky") if `oversized`
* END COMPONENT ShipCalc
```
