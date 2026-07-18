# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 10

**Italiano:**

genera la sezione di una pagina di un e-commerce con la lista dei prodotti

**English:**

generate the section of an e-commerce page with the list of products

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE ProductCatalog
  * DICHIARA array di oggetti `prodotti` con proprietà: `id`, `nome`, `prezzo`, `immagine`, `categoria`, `disponibile`
  * RITORNA struttura JSX:
    * SEZIONE catalogo (section)
      * INTESTAZIONE sezione: TITOLO "I Nostri Prodotti"
      * GRIGLIA prodotti (div con layout grid o flex):
        * PER OGNI `prodotto` IN `prodotti` (ciclo map):
          * COMPONENTE Card o contenitore con chiave `prodotto.id`:
            * IMMAGINE del prodotto (`prodotto.immagine`)
            * TITOLO (`prodotto.nome`) e CATEGORIA (`prodotto.categoria`)
            * PREZZO (`prodotto.prezzo` €)
            * SE `prodotto.disponibile` È true:
              * MOSTRA pulsante "Aggiungi al carrello"
            * ALTRIMENTI:
              * MOSTRA etichetta "Esaurito" disabilitata
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE ProductCatalog
```

**English:**

```text
* START COMPONENT ProductCatalog
  * DECLARE array of objects `products` with properties: `id`, `name`, `price`, `image`, `category`, `available`
  * RETURN JSX structure:
    * CATALOG SECTION (section)
      * SECTION HEADER: TITLE "Our Products"
      * PRODUCTS GRID (div with grid or flex layout):
        * FOR EACH `product` IN `products` (map loop):
          * Card COMPONENT or container with key `product.id`:
            * PRODUCT IMAGE (`product.image`)
            * TITLE (`product.name`) and CATEGORY (`product.category`)
            * PRICE (`product.price` €)
            * IF `product.available` IS true:
              * DISPLAY button "Add to cart"
            * ELSE:
              * DISPLAY disabled label "Out of stock"
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT ProductCatalog
```
