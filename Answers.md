1. What problem does the context API help solve?

   **With the context API, we don't have to worry about prop-drilling anymore!**

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   **An action is an object that must include a “type” property and can also include a “payload” property. We send actions to our reducer to tell it how to update our state and sometimes include some data. A reducer is a pure function (which means it doesn’t produce side effects) which takes in the current state from our redux store and the action object we send it. The reducer will return a new object that represents our updated state, but it won’t ever update state directly. The store is an object that contains our state for our app. It’s called “the single source of truth” because it keeps ALL of our app’s state centralized and updated, instead of components having their own state which can get complicated as an app scales.**

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   **Component state is ideal for managing things like UI state and would be good to use for storing something temporarily like form info that will then be sent to the redux store, that kind of thing. Application state is used for storing and managing higher-level (more important) state, in one central location where other components may need to access that information.**

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   **Redux-thunk allows us to handle asynchronous operations inside our action creators. Since Redux reducers are synchronous by design, we can use redux-thunk to make the flow asynchronous and make API calls from our action creators.**

1. What is your favorite state management system you've learned and this sprint? Please explain why!

   **I still like redux the best, I see its power and why it's so useful! I vow to get over my lack of understanding and really get to know Redux over the coming weeks and months!**
