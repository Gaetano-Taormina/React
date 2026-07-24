# Exercise 02 - wedding-guests-manager

**Italiano:**

Gestisci gli invitati ad un matrimonio... ogni tavolo ha un nome, il numero di invitati previsti e il numero di invitati arrivati. Crea un componente per ogni tavolo con il pulsante per dichiarare che è arrivato un invitato e in un componente a parte un riepilogo che mostra gli invitati arrivati in totale.

**English:**

Manage the guests at a wedding... each table has a name, the number of expected guests and the number of arrived guests. Create a component for each table with the button to declare that a guest has arrived and in a separate component a summary showing the total arrived guests.

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE GuestsProvider
  * DEFINISCI stato globale dei tavoli (array di oggetti con previsti/arrivati)
  * CREA funzione `markGuestArrived` per incrementare arrivi di un tavolo
  * CALCOLA il totale tramite `reduce` e fornisci tutto al Provider
* FINE COMPONENTE GuestsProvider

* INIZIO COMPONENTE Table
  * LEGGI `markGuestArrived` dal Context
  * MOSTRA i dati del tavolo
  * AL CLICK incrementa l'invitato
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE Table

* INIZIO COMPONENTE TotalGuests
  * LEGGI i totali previsti e arrivati dal Context
  * MOSTRA la somma totale nell'interfaccia
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE TotalGuests
```

**English:**

```text
* START COMPONENT GuestsProvider
  * DEFINE global state of tables (array of objects with expected/arrived)
  * CREATE `markGuestArrived` function to increment arrivals of a table
  * CALCULATE total via `reduce` and provide everything to Provider
* END COMPONENT GuestsProvider

* START COMPONENT Table
  * READ `markGuestArrived` from Context
  * DISPLAY table data
  * ON CLICK increment guest
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT Table

* START COMPONENT TotalGuests
  * READ total expected and arrived from Context
  * DISPLAY total sum in the interface
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT TotalGuests
```
