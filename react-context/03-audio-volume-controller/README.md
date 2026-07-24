# Exercise 03 - audio-volume-controller

**Italiano:**

Crea un sistema per gestire l'audio, crea due componenti per abbassare e alzare il volume ed un terzo componente per visualizzarlo... il volume non può essere inferiore a 0 né superiore a 100.

**English:**

Create a system to manage audio, create two components to lower and raise the volume and a third component to visualize it... the volume cannot be less than 0 or greater than 100.

## Reasoning

**Italiano:**

```text
* INIZIO COMPONENTE VolumeProvider
  * MANTIENI `volume` tra 0 e 100 in uno stato globale
  * ESPONI funzioni `increaseVolume` e `decreaseVolume` nel Provider
* FINE COMPONENTE VolumeProvider

* INIZIO COMPONENTE VolumeDisplay
  * LEGGI `volume` dal Context
  * MOSTRA in tempo reale in una progress bar
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTE VolumeDisplay

* INIZIO COMPONENTI VolumeUp / VolumeDown
  * LEGGI funzione di incremento/decremento dal Context
  * ALTERA stato in modo sicuro al click
  * NOTA: Il componente è strutturato e salvato all'interno della cartella src/components/
* FINE COMPONENTI VolumeUp / VolumeDown
```

**English:**

```text
* START COMPONENT VolumeProvider
  * MAINTAIN `volume` between 0 and 100 in global state
  * EXPOSE `increaseVolume` and `decreaseVolume` functions in Provider
* END COMPONENT VolumeProvider

* START COMPONENT VolumeDisplay
  * READ `volume` from Context
  * DISPLAY in real time in a progress bar
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENT VolumeDisplay

* START COMPONENTS VolumeUp / VolumeDown
  * READ increment/decrement function from Context
  * ALTER state safely on click
  * NOTE: The component is structured and saved inside the src/components/ folder
* END COMPONENTS VolumeUp / VolumeDown
```
