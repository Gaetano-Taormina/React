# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 13

**Italiano:**

converti e mostra il prezzo di un prodotto fisso in diverse valute (EUR, USD, GBP) aggiornando il simbolo e il valore in base alla select

**English:**

convert and display the price of a fixed product in different currencies (EUR, USD, GBP), updating the symbol and value based on the select dropdown

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE PriceConverter
  * DICHIARA tassi di cambio per EUR, USD, GBP
  * DICHIARA stato `curr` (`"EUR"`)
  * CALCOLA il prezzo convertito
  * RITORNA struttura JSX:
    * SELECT valuta
    * DISPLAY con simbolo e prezzo convertito
* FINE COMPONENTE PriceConverter
```

**English:**

```text
* START COMPONENT PriceConverter
  * DECLARE exchange rates for EUR, USD, GBP
  * DECLARE state `curr` (`"EUR"`)
  * CALCULATE converted price
  * RETURN JSX structure:
    * SELECT dropdown for currency
    * DISPLAY showing symbol and converted price
* END COMPONENT PriceConverter
```
