# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 1

**Italiano:**

visualizza un'immagine memorizzata in una variabile

**English:**

display an image stored in a variable

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE App
  * DICHIARA variabile `imageUrl` contenente il percorso o l'URL dell'immagine
  * DICHIARA variabile `imageAlt` contenente la descrizione dell'immagine
  * RITORNA struttura JSX:
    * CONTENITORE principale (div o main)
      * TITOLO descrittivo (h1 o h2)
      * ELEMENTO immagine (img):
        * IMPOSTA attributo `src` con il valore di `imageUrl`
        * IMPOSTA attributo `alt` con il valore di `imageAlt`
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE App
```

**English:**

```text
* START COMPONENT App
  * DECLARE variable `imageUrl` containing the image path or URL
  * DECLARE variable `imageAlt` containing the image description
  * RETURN JSX structure:
    * MAIN container (div or main)
      * DESCRIPTIVE title (h1 or h2)
      * IMAGE element (img):
        * SET `src` attribute to the value of `imageUrl`
        * SET `alt` attribute to the value of `imageAlt`
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT App
```
