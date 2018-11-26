# Update.js

## function update(msg, model)

- Handles interaction and transforms the model.

- The update function is the only place your model gets transformed. ​
It receives a message as well as the model, then updates the model according
to the message and returns it.

- As the update function is the only place where your model gets transformed, this
structure makes it very easy to reason about state changes and where they are coming from.
This concept seems very simple and natural, yet it emerged and gained popularity through
The Elm Architecture.

- Contrast this to applications that manage all of their possible states implicitly
and being changed from several places. It’s no surprise that this simple, yet
powerful way of state management became very popular and influenced other
frameworks like Redux.
 
