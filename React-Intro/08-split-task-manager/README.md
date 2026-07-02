# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 8

**Italiano:**

mostra una serie di task, distinguendo quelle completate da quelle ancora da svolgere

**English:**

show a series of tasks, distinguishing completed ones from those still to be done

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE TaskManager
  * DICHIARA array di oggetti `tasks` con proprietà: `id`, `titolo`, `completata`
  * FILTRA array per ottenere `taskDaSvolgere` (dove `completata` è false)
  * FILTRA array per ottenere `taskCompletate` (dove `completata` è true)
  * RITORNA struttura JSX:
    * CONTENITORE principale (div)
      * SEZIONE "Da Svolgere":
        * LISTA (ul):
          * PER OGNI `task` IN `taskDaSvolgere` (ciclo map):
            * ELEMENTO lista (li) con chiave `task.id` -> mostra `task.titolo`
      * SEZIONE "Completate":
        * LISTA (ul):
          * PER OGNI `task` IN `taskCompletate` (ciclo map):
            * ELEMENTO lista (li) con chiave `task.id` e stile barrato -> mostra `task.titolo`
* FINE COMPONENTE TaskManager
```

**English:**

```text
* START COMPONENT TaskManager
  * DECLARE array of objects `tasks` with properties: `id`, `title`, `completed`
  * FILTER array to get `tasksToDo` (where `completed` is false)
  * FILTER array to get `completedTasks` (where `completed` is true)
  * RETURN JSX structure:
    * MAIN container (div)
      * SECTION "To Do":
        * LIST (ul):
          * FOR EACH `task` IN `tasksToDo` (map loop):
            * LIST ITEM (li) with key `task.id` -> display `task.title`
      * SECTION "Completed":
        * LIST (ul):
          * FOR EACH `task` IN `completedTasks` (map loop):
            * LIST ITEM (li) with key `task.id` and strikethrough style -> display `task.title`
* END COMPONENT TaskManager
```
