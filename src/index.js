// write your createStore function here
function createStore(reducer) {

  let state

  return {
    getState: () => {
      return state
    },
    dispatch: (action) => {
      state = reducer(state, action)
      render()
    }
  }
}

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

const store = createStore(candyReducer)
store.dispatch({ type: "ADD_CANDY", candy: "Jolly Ranchers" })
store.dispatch({ type: "ADD_CANDY", candy: "Airheads" })
store.dispatch({ type: "ADD_CANDY", candy: "Mike n Ikes" })

// use your createStore function and the functions provided here to create a store
// once the store is created, call an initial dispatch