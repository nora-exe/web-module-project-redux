# Redux React Module Project: Movie CRUD
## Introduction
This module explores the redux philosophy, creation of the redux store and using connect to link state and action to arbitrary components.

In this project, you take a fairly complex application used to search a movie database and connect it to two different reducers through redux. You will both connect existing state definitions and build entire reducer / redux pairings from scratch.

![Movie DB Example](project-goals.gif)

## Objectives
- Understand the use and setup of Redux
- Use Redux to connect existing state and actions to components
- Use the `combineReducer` method to combine states.
- Build reducers, actions and redux connections from scratch

# Notes
* 🎥 [GP video](https://youtu.be/vKz12G9XpFI)
* 🎥 [MP video](https://www.loom.com/share/dc97839acccf48339842c6265413fafb)
## Key Concepts:
* [Redux](https://react-redux.js.org/introduction/why-use-react-redux) - A framework used to create and mantain a reducer pattern
## Key Terminology:
* [default arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) - A means to set what value a javascript function argument should be when it is not defined.
* [function currying](https://www.youtube.com/watch?v=oU3LzOO0OGA) - Functions that return other functions
* [the connect function](https://react-redux.js.org/api/connect) - A react-redux method that allows for components to be connect to state and dispatch through props.
```javascript
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```
If a `mapStateToProps` function is specified, the new wrapper component will subscribe to Redux store updates - any time the store is updated, `mapStateToProps` will be called. The results of `mapStateToProps` must be a plain object, which will be merged into the wrapped component’s props. If you don't want to subscribe to store updates, pass `null` or `undefined` in place of `mapStateToProps`.
* [combine reducers](https://redux.js.org/api/combinereducers/) - A redux method that allows several different reducers used in one application
* [mapStateToProps](https://react-redux.js.org/7.1/using-react-redux/connect-mapstate#mapstatetoprops-will-not-run-if-the-store-state-is-the-same) - A programmer generated function that gets the application state and connects it to a components props

If your `mapStateToProps` function is declared as taking one parameter, it will be called whenever the store state changes, and given the store state as the only parameter.

```javascript
const mapStateToProps = (state) => ({ todos: state.todos })
```
* [ownProps](https://react-redux.js.org/api/connect#ownprops) - If your `mapStateToProps` function is declared as taking two parameters, it will be called whenever the store state changes or when the wrapper component receives new props (based on shallow equality comparisons). It will be given the store state as the first parameter, and the wrapper component's props as the second parameter.

```javascript
const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.id],
})
```

## Walkthrough
***Make sure to complete your tasks one at a time and complete test each task before proceeding forward.***

### Task 2: Project Requirements
#### Setup Redux
> *The DOM and movie reducer has been provided for you, but it's up to to connect it to redux...*

* [ ] In index.js, make use of the createStore method and Provider component to link your App to redux.

#### Connecting the Movie reducer
> *Within the reducers folder is the movieReducers file. We have the state already setup it up here with some initial data. Let's connect that state to our component.*

* [ ] **In movieReducer.js, make sure that we are setting our state by default to initialState.** Otherwise your state will not have the original structure it needs to function!

* [ ] **The MovieList component prints all of our movies to the screen.** Use the connect method here to map the movies state value into props. Replace our static movie variable with that prop.

* [ ] **The Movie component needs to access our list of movies to function.** Map movies to props here as well.

* [ ] **Finally, MovieHeader uses appTitle to display the title text.** Connect this component to appTitle and test appTitle is correctly displayed in your app.


#### Connecting the Delete and Add Movie actions
> *Looks like you got a good handle on mapping stateToProps! Now let's connect some actions.*

* [ ] Note that the deleteMovie reducer case and action creator are already available.

* [ ] **We can delete movies within the Movie Component.** Connect the deleteMovie action through the connect method.

* [ ] **Find the HTML element that should trigger a deletion in the movie component.** Create and connect the necessary event handlers to call deleteMovie on the current movie's id AND redirect the user using push('/movies').

* [ ] Add in an ADD_MOVIE case to the movieReducer.js.
* [ ] Make this new case return all state with a new movie added to the movies array.
* [ ] Create an action creator for addMovie in movieActions.js.
* [ ] Find the component that triggers the adding of a movie and connect the addMovie action.
* [ ] Create and connect the necessary event handlers to call addMovie, passing in user created movie values. Add in push('/movies/) after adding addMovie to trigger a redirect.

#### Build out the favorites reducer
> *Alright! Now that the movie reducer is complete, you have the chance to build a reducer from scratch to handle favorite movie functionality. We will also work on combining reducers.*

* [ ] Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
  -  favorites: an array of movie objects
  -  displayFavorites: a boolean that holds if favorite elements should be displayed in app

* [ ] **Import you new reducer file into the ./reducers/index.js file.** As a start, only add a default case to the switch statement.

* [ ] **In reducers/index.js, use the combineReducers method to connect both movies and favorite movies to redux.**

* [ ] **Notice that your movie functions no longer work. Why?** Make changes necessary to get the component connected to the movie reducer working again.

* [ ] Connect the favorites state to the FavoriteMovieList component and test.

* [ ] Connect the displayFavorites state to the Movie and MovieHeader component.

#### Build out the favorites actions
> *Now is your chance to build our all the rest of the app on your own. You can do this!*

1. Add in reducer cases, action creators and event handler code for the following actions:
  - toggleFavorites : Switches the displayFavorites state value between true and false. When displayFavorites is true, the favorite button does not show on the Movie page.
  
  - addFavorites: Adds in a new movie object into the favorites list.
  - removeFavorite: Removes a movie Object from the favorites list with an id passed in.

### Stretch goals
- ✅ It makes sense to not allow the user to favorite an item if favorites is not displayed. Add in means for the favorite button to ONLY display if displayFavorite is true.
- Right now, you can favorite the same movie multiple times. Change the addFavorite action to only add in a new favorite if it doesn't already exist.
- Add in the ability to remove a movie from the favorites list if that movie is removed from our main movie list.
- Style to your heart's content ❤️

