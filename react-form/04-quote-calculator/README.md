# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 4

**Italiano:**

calcola il preventivo moltiplicando ore e tariffa oraria, aggiungendo automaticamente un extra al totale se viene superata una certa soglia lavorativa

**English:**

calculate the quote by multiplying hours and hourly rate, automatically adding an extra to the total if a certain working threshold is exceeded

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE QuoteCalc
  * DICHIARA costanti per soglia ore (`THRESHOLD_HOURS = 40`) ed extra (`EXTRA_FEE = 150`)
  * DICHIARA stato `hours` per le ore di lavoro perse in input numerico
  * DICHIARA stato `rate` per la tariffa oraria
  * CALCOLA dinamicamente importo base (`hours * rate`) e verifica superamento soglia
  * CALCOLA totale finale aggiungendo `EXTRA_FEE` se `isOverThreshold` è vero
  * RITORNA struttura JSX:
    * FORM con due campi di input di tipo numerico (ore e tariffa)
    * RIEPILOGO che mostra in tempo reale importo base, eventuale extra evidenziato e totale preventivo
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE QuoteCalc
```

**English:**

```text
* START COMPONENT QuoteCalc
  * DECLARE constants for hour threshold (`THRESHOLD_HOURS = 40`) and extra fee (`EXTRA_FEE = 150`)
  * DECLARE state `hours` for input working hours
  * DECLARE state `rate` for hourly rate
  * CALCULATE dynamically base amount (`hours * rate`) and check if threshold is exceeded
  * CALCULATE final total adding `EXTRA_FEE` if `isOverThreshold` is true
  * RETURN JSX structure:
    * FORM with two numeric inputs (hours and rate)
    * SUMMARY card displaying real-time base amount, highlighted extra fee if applicable, and final total
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT QuoteCalc
```
