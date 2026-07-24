# Exercise 01 - digital-traffic-light

**Italiano:**

Crea un semaforo digitale, realizzalo con tre componenti-pulsante, uno per colore... e un componente per visualizzare il semaforo.

**English:**

Create a digital traffic light, make it with three button-components, one for each color... and a component to visualize the traffic light.

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE TrafficLightProvider
  * DICHIARA stato globale `color` tramite useState (default 'red')
  * METTI a disposizione `color` e la funzione `setColor` tramite Context.Provider
* FINE COMPONENTE TrafficLightProvider

* INIZIO COMPONENTE TrafficLightViewer
  * LEGGI stato `color` dal context tramite `useContext`
  * MOSTRA il semaforo modificando l'opacità dei cerchi colorati
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE TrafficLightViewer

* INIZIO COMPONENTE ColorButton
  * RICEVI props `targetColor`, `label`, `btnClass`
  * INVOCA `setColor(targetColor)` al click leggendo dal context
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE ColorButton
```

**English:**

```text
* START COMPONENT TrafficLightProvider
  * DECLARE global state `color` via useState (default 'red')
  * PROVIDE `color` and the `setColor` function via Context.Provider
* END COMPONENT TrafficLightProvider

* START COMPONENT TrafficLightViewer
  * READ `color` state from context via `useContext`
  * DISPLAY the traffic light by changing opacity of colored circles
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT TrafficLightViewer

* START COMPONENT ColorButton
  * RECEIVE props `targetColor`, `label`, `btnClass`
  * INVOKE `setColor(targetColor)` on click reading from context
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT ColorButton
```
