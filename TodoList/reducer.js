// reducer.js

const initialState = {
    todos: [],
    filter: 'all'
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      case 'CLEAR_COMPLETED':
        return { ...state, todos: state.todos.filter(todo => !todo.completed) };
      default:
        return state;
    }
  }
  