
export const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
      editAble: false
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
      editAble: false
    },
  ];
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
  
      case "ADD": 
          return [...state,
            {
            id: Date.now(),
            title: action.title,
            complete: false,
            editAble: false
            }];
      case "DELETE":
            return state.filter(todo => todo.id !== action.id);
      case "EDIT":
          return state.map(todo => {
              if(todo.id === action.id){
                return {...todo, editAble: !todo.editAble}
              }else {
                return todo;
              }
            });
      case "UPDATE":
            return state.map(todo => {
              if(todo.id === action.id){
                return {...todo, title: action.title, editAble: !todo.editAble}
              }else {
                return todo;
              }
            })
       case "INITIALTODOS":
            return action.todos;     
      default:
        return state;
    }
  };
  