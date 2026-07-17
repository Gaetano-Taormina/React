# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 3

**Italiano:**

mostra in una card le caratteristiche e calcola il costo di un prodotto, considerando uno sconto del 20%

**English:**

show the characteristics in a card and calculate the cost of a product, considering a 20% discount

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE App
  * DICHIARA oggetto `prodotto` con proprietà: `nome`, `descrizione`, `prezzoOriginale`, `scontoPercentuale` (20)
  * CALCOLA `prezzoScontato` = `prodotto.prezzoOriginale` * (1 - `prodotto.scontoPercentuale` / 100)
  * RITORNA struttura JSX:
    * CONTENITORE card (div o article)
      * TITOLO prodotto (`prodotto.nome`)
      * DESCRIZIONE prodotto (`prodotto.descrizione`)
      * SEZIONE prezzi:
        * PREZZO originale barrato (`prodotto.prezzoOriginale`)
        * BADGE sconto (`prodotto.scontoPercentuale`%)
        * PREZZO finale scontato (`prezzoScontato`)
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE App
```

**English:**

```text
* START COMPONENT App
  * DECLARE object `product` with properties: `name`, `description`, `originalPrice`, `discountPercentage` (20)
  * CALCULATE `discountedPrice` = `product.originalPrice` * (1 - `product.discountPercentage` / 100)
  * RETURN JSX structure:
    * CARD container (div or article)
      * PRODUCT TITLE (`product.name`)
      * PRODUCT DESCRIPTION (`product.description`)
      * PRICE SECTION:
        * STRIKETHROUGH original price (`product.originalPrice`)
        * DISCOUNT BADGE (`product.discountPercentage`%)
        * FINAL discounted price (`discountedPrice`)
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT App
```
