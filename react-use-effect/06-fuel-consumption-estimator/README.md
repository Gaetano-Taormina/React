# Exercise 6

**Italiano:**

crea un form per stimare il consumo di carburante chiedendo i km da percorrere, il consumo medio dell'auto (km/litro) e il prezzo della benzina. Calcola quanti litri servono e quanto costerà il viaggio totale

**English:**

create a form to estimate fuel consumption asking for km to travel, average car consumption (km/liter) and gasoline price. Calculate how many liters are needed and how much the total trip will cost

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE FuelCalc
  * DICHIARA stati di input: `distanceKm` (450), `kmPerLiter` (18.5), `fuelPrice` (1.85)
  * DICHIARA stati di uscita: `litersNeeded` e `totalCost`
  * DEFINISCI effetto `useEffect` in ascolto su `[distanceKm, kmPerLiter, fuelPrice]`:
    * SE `kmPerLiter > 0` e `distanceKm > 0`:
      * CALCOLA litri necessari `liters = distanceKm / kmPerLiter`
      * CALCOLA costo `cost = liters * fuelPrice`
      * AGGIORNA `litersNeeded` con `liters` e `totalCost` con `cost`
    * ALTRIMENTI:
      * AZZERA `litersNeeded` e `totalCost`
  * RITORNA struttura JSX:
    * FORM con 3 input numerici per km da percorrere, consumo km/l e prezzo carburante
    * CARDS RIASSUNTIVE con il quantitativo totale di litri necessari e il costo complessivo stimato
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE FuelCalc
```

**English:**

```text
* START COMPONENT FuelCalc
  * DECLARE input states: `distanceKm` (450), `kmPerLiter` (18.5), `fuelPrice` (1.85)
  * DECLARE output states: `litersNeeded` and `totalCost`
  * DEFINE effect `useEffect` observing `[distanceKm, kmPerLiter, fuelPrice]`:
    * IF `kmPerLiter > 0` and `distanceKm > 0`:
      * CALCULATE needed liters `liters = distanceKm / kmPerLiter`
      * CALCULATE cost `cost = liters * fuelPrice`
      * UPDATE `litersNeeded` with `liters` and `totalCost` with `cost`
    * ELSE:
      * RESET `litersNeeded` and `totalCost` to 0
  * RETURN JSX structure:
    * FORM with 3 numeric inputs for distance in km, consumption in km/l, and fuel price
    * SUMMARY CARDS showing total liters needed and overall estimated cost
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT FuelCalc
```
