# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

---

## Exercise 10

**Italiano:**

Todo list interattiva
genera una lista di attività permettendo di segnare ogni elemento come completato al click, applicando contestualmente uno stile testuale barrato

**English:**

Interactive todo list
generate a list of activities allowing each item to be marked as completed on click, simultaneously applying a strikethrough text style

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE InteractiveTodoList (riceve props: `initialTasks`)
  * DICHIARA stato array `tasks` inizializzato con la prop `initialTasks`
  * DEFINISCI funzione `toggleTask(taskId)`:
    * CREA nuovo array mappando su `tasks`:
      * PER OGNI `task`:
        * SE `task.id === taskId`:
          * RITORNA una copia di `task` con il valore di `completed` invertito
        * ALTRIMENTI:
          * RITORNA `task` inalterato
    * AGGIORNA lo stato `tasks` con il nuovo array
  * RITORNA struttura JSX:
    * CONTENITORE principale (div)
      * TITOLO "Lista Attività Interattiva"
      * LISTA (ul):
        * PER OGNI `task` IN `tasks` (ciclo map):
          * ELEMENTO lista (li) con chiave `task.id`:
            * SE `task.completed` È true:
              * APPLICA stile testuale barrato (es. text-decoration: line-through)
            * ALTRIMENTI:
              * APPLICA stile testuale normale
            * AL CLICK sull'elemento esegui `toggleTask(task.id)`
            * MOSTRA `task.text` e un indicatore di completamento
* FINE COMPONENTE InteractiveTodoList
```

**English:**

```text
* START COMPONENT InteractiveTodoList (receives props: `initialTasks`)
  * DECLARE array state `tasks` initialized with prop `initialTasks`
  * DEFINE function `toggleTask(taskId)`:
    * CREATE new array by mapping over `tasks`:
      * FOR EACH `task`:
        * IF `task.id === taskId`:
          * RETURN a copy of `task` with `completed` value inverted
        * ELSE:
          * RETURN `task` unchanged
    * UPDATE state `tasks` with the new array
  * RETURN JSX structure:
    * MAIN container (div)
      * TITLE "Interactive Todo List"
      * LIST (ul):
        * FOR EACH `task` IN `tasks` (map loop):
          * LIST ITEM (li) with key `task.id`:
            * IF `task.completed` IS true:
              * APPLY strikethrough text style (e.g. text-decoration: line-through)
            * ELSE:
              * APPLY normal text style
            * ON CLICK on item execute `toggleTask(task.id)`
            * DISPLAY `task.text` and completion indicator
* END COMPONENT InteractiveTodoList
```
