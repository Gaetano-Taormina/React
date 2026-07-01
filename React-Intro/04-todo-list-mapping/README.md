# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Exercise 4

**Italiano:**

crea un componente che visualizza una todo-list

**English:**

create a component that displays a todo-list

### Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE TodoList
  * DICHIARA array di oggetti `tasks` dove ogni oggetto ha: `id`, `testo`, `completata`
  * RITORNA struttura JSX:
    * CONTENITORE lista (div o section)
      * TITOLO "Todo List"
      * LISTA non ordinata (ul):
        * PER OGNI `task` IN `tasks` (ciclo map):
          * ELEMENTO lista (li) con chiave `task.id`:
            * CHECKBOX impostato sul valore di `task.completata`
            * TESTO della task `task.testo`
* FINE COMPONENTE TodoList
```

**English:**

```text
* START COMPONENT TodoList
  * DECLARE array of objects `tasks` where each object has: `id`, `text`, `completed`
  * RETURN JSX structure:
    * LIST container (div or section)
      * TITLE "Todo List"
      * UNORDERED LIST (ul):
        * FOR EACH `task` IN `tasks` (map loop):
          * LIST ITEM (li) with key `task.id`:
            * CHECKBOX set to the value of `task.completed`
            * TASK TEXT `task.text`
* END COMPONENT TodoList
```
