# Exercise 5

**Italiano:**

crea un configuratore di viaggio chiedendo numero camere, numero di notti e tipo di alloggio (standard, premium, VIP). Calcola il preventivo totale applicando un prezzo diverso per notte in base alla scelta dell'alloggio e mostra il riepilogo finale

**English:**

create a travel configurator asking for number of rooms, number of nights, and type of accommodation (standard, premium, VIP). Calculate the total estimate by applying a different price per night depending on the accommodation choice and display the final summary

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE TripConfig
  * DICHIARA costante `ACCOMMODATION_PRICES` con tariffe per notte (`standard: 80`, `premium: 130`, `vip: 250`)
  * DICHIARA stati di input: `rooms` (1), `nights` (3), `accommodationType` ('standard')
  * DICHIARA stati calcolati: `pricePerNight` e `totalQuote`
  * DEFINISCI effetto `useEffect` in ascolto su `[rooms, nights, accommodationType]`:
    * ESTRAI prezzo unitario per notte in base ad `accommodationType` -> `currentPrice`
    * CALCOLA preventivo `total = rooms * nights * currentPrice`
    * AGGIORNA `pricePerNight` con `currentPrice` e `totalQuote` con `total`
  * RITORNA struttura JSX:
    * FORM con input per camere e notti e tendina `select` per il tipo di alloggio
    * RIEPILOGO DETTAGLIATO con lista parametri selezionati e box evidenziato per il preventivo totale
* FINE COMPONENTE TripConfig
```

**English:**

```text
* START COMPONENT TripConfig
  * DECLARE constant `ACCOMMODATION_PRICES` with nightly rates (`standard: 80`, `premium: 130`, `vip: 250`)
  * DECLARE input states: `rooms` (1), `nights` (3), `accommodationType` ('standard')
  * DECLARE calculated states: `pricePerNight` and `totalQuote`
  * DEFINE effect `useEffect` observing `[rooms, nights, accommodationType]`:
    * EXTRACT unit price per night based on `accommodationType` -> `currentPrice`
    * CALCULATE quote `total = rooms * nights * currentPrice`
    * UPDATE `pricePerNight` with `currentPrice` and `totalQuote` with `total`
  * RETURN JSX structure:
    * FORM with inputs for rooms and nights and `select` dropdown for accommodation type
    * DETAILED SUMMARY card displaying selected parameters and highlighted total quote box
* END COMPONENT TripConfig
```
