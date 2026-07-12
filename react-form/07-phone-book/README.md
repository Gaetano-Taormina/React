# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 7

**Italiano:**

crea una rubrica telefonica consentendo l'inserimento di nuovi nominativi e la loro eliminazione

**English:**

create a phone book allowing the insertion of new contacts and their deletion

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE PhoneBook
  * DICHIARA stato array `contacts` con alcuni contatti predefiniti
  * DICHIARA stati `name` e `phone` per i due input del form di inserimento
  * DEFINISCI funzione `handleAdd(e)`:
    * PREVIENI default e valida che nome e telefono non siano vuoti
    * AGGIUNGI il nuovo contatto al vettore `contacts` con id univoco
    * RESETTA i campi input
  * DEFINISCI funzione `handleDelete(id)` che filtra via il contatto selezionato
  * RITORNA struttura JSX:
    * FORM di inserimento con campi Nome e Numero di Telefono
    * LISTA di contatti salvati, ciascuno con bottone Elimina
* FINE COMPONENTE PhoneBook
```

**English:**

```text
* START COMPONENT PhoneBook
  * DECLARE state array `contacts` with sample contacts
  * DECLARE states `name` and `phone` for the form inputs
  * DEFINE function `handleAdd(e)`:
    * PREVENT default and validate that inputs are not empty
    * APPEND new contact object with unique id into `contacts` state
    * RESET input fields
  * DEFINE function `handleDelete(id)` filtering out the selected contact ID
  * RETURN JSX structure:
    * ADD CONTACT form with Name and Phone input fields
    * LIST of stored contacts, each accompanied by a Delete button
* END COMPONENT PhoneBook
```
