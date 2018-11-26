# Model-View-Update Architecture Overview

![alt text][mvu]

[mvu]: ../../src/assets/images/mvu-architecture-overview.png "Model View Update architetcure"

This is the MVU architecture floatchart derived from Elm architecture:

- ➊ When our application first starts, we have an initial model that is passed to our program’s view function.

- ➋ The view function renders the current model to produce our program’s user interface (typically as HTML).

- ➌ When the user interacts with the rendered view, a message is sent to the Elm Runtime (➍) e.g. ExpandDetails.

- ➎ The Elm Runtime calls our program’s update function, passing in the message and the current model.

- ➏ The update function returns an updated model, and optionally a list of side effects to run (➐).

- ➑ The Elm Runtime calls our view function again to render our interface with the updated model. It also performs any side effects requested by our program.

## The Basic Pattern

![alt text][diagram]

[diagram]: ../../src/assets/images/elm-architecture-overview-diagram.svg "Elm architecture overview diagram"

The logic of program will break up into three cleanly separated parts:

- Model — the state of your application
- View — a way to view your state as HTML
- Update — a way to update your state

plus

- Runtime — as a controller and only place with side effects

## Terminology In Elm Vs Redux

Most Elm applications are built using a pattern called The Elm Architecture (TEA). If you have used Redux, this architecture will be very familiar. This is not a coincidence – Redux was heavily inspired by Elm!

| Concept                                  | Elm          | Redux     |
| ---------------------------------------- | ------------ | --------- |
| Application state                        | Model        | State     |
| Application events                       | Message      | Action    |
| Function that transforms the state       | Update       | Reducer   |

[source](https://sporto.github.io/elm-workshop/03-tea/01-intro.html)
