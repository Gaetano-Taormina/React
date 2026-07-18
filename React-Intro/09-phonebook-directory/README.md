# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 9

**Italiano:**

visualizza una rubrica telefonica

**English:**

display a telephone directory (phonebook)

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE Phonebook
  * DICHIARA array di oggetti `contatti` con proprietà: `id`, `nome`, `cognome`, `telefono`, `email`, `categoria`
  * ORDINA `contatti` alfabeticamente per cognome e nome
  * RITORNA struttura JSX:
    * CONTENITORE rubrica (div)
      * TITOLO "Rubrica Telefonica"
      * LISTA contatti (ul o griglia di card):
        * PER OGNI `contatto` IN `contatti` (ciclo map):
          * CARD contatto con chiave `contatto.id`:
            * INTESTAZIONE con `contatto.nome` e `contatto.cognome`
            * DETTAGLIO telefono: `contatto.telefono`
            * DETTAGLIO email: `contatto.email`
            * BADGE categoria (es. Lavoro, Famiglia, Amici): `contatto.categoria`
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE Phonebook
```

**English:**

```text
* START COMPONENT Phonebook
  * DECLARE array of objects `contacts` with properties: `id`, `name`, `surname`, `phone`, `email`, `category`
  * SORT `contacts` alphabetically by surname and name
  * RETURN JSX structure:
    * PHONEBOOK container (div)
      * TITLE "Telephone Directory"
      * CONTACTS LIST (ul or grid of cards):
        * FOR EACH `contact` IN `contacts` (map loop):
          * CONTACT CARD with key `contact.id`:
            * HEADER with `contact.name` and `contact.surname`
            * DETAIL phone: `contact.phone`
            * DETAIL email: `contact.email`
            * BADGE category (e.g. Work, Family, Friends): `contact.category`
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT Phonebook
```
