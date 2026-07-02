# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 7

**Italiano:**

organizza i risultati di un torneo mostrando per ogni partecipante il nome, il punteggio totale e altre statistiche di gioco (a fantasia vostra)

**English:**

organize the results of a tournament by showing for each participant their name, total score, and other game statistics (of your choice)

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE TournamentResults
  * DICHIARA array di oggetti `partecipanti`, dove ogni oggetto ha: `id`, `nome`, `punteggioTotale`, `partiteGiocate`, `vittorie`, `sconfitte`
  * ORDINA array `partecipanti` per `punteggioTotale` in ordine decrescente
  * RITORNA struttura JSX:
    * CONTENITORE classifica (div o section)
      * TITOLO "Risultati Torneo"
      * TABELLA o GRIGLIA risultati:
        * PER OGNI `giocatore` IN `partecipanti` (ciclo map):
          * RIGA giocatore con chiave `giocatore.id`:
            * COLONNA Nome -> `giocatore.nome`
            * COLONNA Punteggio -> `giocatore.punteggioTotale`
            * COLONNA Partite Giocate -> `giocatore.partiteGiocate`
            * COLONNA Vittorie/Sconfitte -> `giocatore.vittorie`V / `giocatore.sconfitte`S
* FINE COMPONENTE TournamentResults
```

**English:**

```text
* START COMPONENT TournamentResults
  * DECLARE array of objects `participants`, where each object has: `id`, `name`, `totalScore`, `gamesPlayed`, `wins`, `losses`
  * SORT array `participants` by `totalScore` in descending order
  * RETURN JSX structure:
    * LEADERBOARD container (div or section)
      * TITLE "Tournament Results"
      * TABLE or GRID of results:
        * FOR EACH `player` IN `participants` (map loop):
          * PLAYER ROW with key `player.id`:
            * COLUMN Name -> `player.name`
            * COLUMN Score -> `player.totalScore`
            * COLUMN Games Played -> `player.gamesPlayed`
            * COLUMN Wins/Losses -> `player.wins`W / `player.losses`L
* END COMPONENT TournamentResults
```
