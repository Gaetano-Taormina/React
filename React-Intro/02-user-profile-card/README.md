# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 2

**Italiano:**

visualizza i dati anagrafici di una persona partendo da un oggetto contenente le sue informazioni principali

**English:**

display a person's personal data starting from an object containing their main information

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE App
  * DICHIARA oggetto `persona` con proprietà: `nome`, `cognome`, `eta`, `citta`, `professione`
  * RITORNA struttura JSX:
    * CONTENITORE scheda anagrafica (div o article)
      * TITOLO con nome e cognome (`persona.nome` e `persona.cognome`)
      * LISTA dettagli (ul):
        * ELEMENTO lista: Età -> `persona.eta` anni
        * ELEMENTO lista: Città -> `persona.citta`
        * ELEMENTO lista: Professione -> `persona.professione`
* FINE COMPONENTE App
```

**English:**

```text
* START COMPONENT App
  * DECLARE object `person` with properties: `name`, `surname`, `age`, `city`, `profession`
  * RETURN JSX structure:
    * PERSONAL DATA container (div or article)
      * TITLE with name and surname (`person.name` and `person.surname`)
      * DETAILS list (ul):
        * LIST ITEM: Age -> `person.age` years old
        * LIST ITEM: City -> `person.city`
        * LIST ITEM: Profession -> `person.profession`
* END COMPONENT App
```
