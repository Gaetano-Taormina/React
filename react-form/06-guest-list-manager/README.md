# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 6

**Italiano:**

gestisci la lista degli invitati permettendo di segnare l'avvenuta presenza e organizzando la visualizzazione per separare chi è arrivato da chi è ancora atteso

**English:**

manage the guest list allowing to mark attendance and organizing the view to separate who has arrived from who is still expected

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE GuestList
  * DICHIARA stato array `guests` inizializzato con alcuni invitati di esempio e proprietà booleana `present`
  * DICHIARA stato `newName` per l'aggiunta dal form
  * DEFINISCI funzione `handleAdd(e)` per inserire un nuovo invitato con `present: false`
  * DEFINISCI funzione `togglePresent(id)` per invertire lo stato `present` dell'invitato selezionato
  * FILTRA la lista creando due sotto-array: `arrived` (`present === true`) ed `expected` (`present === false`)
  * RITORNA struttura JSX:
    * FORM di inserimento rapido per nuovi invitati
    * SEZIONE Arrivati con pulsante per segnare l'assenza
    * SEZIONE Ancora Attesi con pulsante per segnare la presenza
* FINE COMPONENTE GuestList
```

**English:**

```text
* START COMPONENT GuestList
  * DECLARE state array `guests` initialized with sample guests and boolean property `present`
  * DECLARE state `newName` for form addition
  * DEFINE function `handleAdd(e)` to append a new guest with `present: false`
  * DEFINE function `togglePresent(id)` to toggle boolean `present` state of selected guest
  * FILTER array into two groups: `arrived` (`present === true`) and `expected` (`present === false`)
  * RETURN JSX structure:
    * QUICK INPUT form to add new guests
    * ARRIVED section with action button to mark as absent
    * EXPECTED section with action button to mark as arrived
* END COMPONENT GuestList
```
